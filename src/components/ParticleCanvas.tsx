"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

interface ThemeColors {
  particle: string;
  line: string;
}

const THEMES: Record<string, ThemeColors> = {
  dark: {
    particle: "rgba(193, 124, 90, 0.7)",
    line: "rgba(193, 124, 90, 0.25)",
  },
  light: {
    particle: "rgba(179, 93, 56, 0.55)",
    line: "rgba(179, 93, 56, 0.2)",
  },
};

const PARTICLE_COUNT = 400;
const REPULSION_RADIUS = 140;
const REPULSION_FORCE = 0.06;
const CONNECTION_DISTANCE = 180;
const CONNECTION_DISTANCE_SQ = CONNECTION_DISTANCE * CONNECTION_DISTANCE;
const FRICTION = 0.985;
const DRIFT_SPEED = 0.2;
const VISUAL_BUFFER = 60;

function createParticle(w: number, pageH: number): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * pageH,
    vx: (Math.random() - 0.5) * DRIFT_SPEED,
    vy: (Math.random() - 0.5) * DRIFT_SPEED,
    radius: Math.random() * 1.8 + 0.8,
    opacity: 0,
  };
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const themeRef = useRef<ThemeColors>(THEMES.dark);
  const scrollRef = useRef(0);
  const dimsRef = useRef({ w: 0, pageH: 0 });
  const pausedRef = useRef(false);

  const reduceMotion = useReducedMotion();

  // Theme
  useEffect(() => {
    const update = () => {
      const t = document.documentElement.getAttribute("data-theme") || "dark";
      themeRef.current = THEMES[t] || THEMES.dark;
    };
    update();
    const o = new MutationObserver(update);
    o.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => o.disconnect();
  }, []);

  // Canvas init
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const w = window.innerWidth;
      const vh = window.innerHeight;
      canvas.width = w;
      canvas.height = vh;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${vh}px`;
      dimsRef.current = { w, pageH: document.documentElement.scrollHeight };

      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(w, dimsRef.current.pageH)
      );
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Scroll + mouse
  useEffect(() => {
    const onScroll = () => { scrollRef.current = window.scrollY; };
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY + scrollRef.current };
    };
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Pause on hidden tab
  useEffect(() => {
    const onVis = () => { pausedRef.current = document.hidden; };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (reduceMotion) {
      const { w } = dimsRef.current;
      const vh = window.innerHeight;
      const scrollY = scrollRef.current;
      const colors = themeRef.current;
      ctx.clearRect(0, 0, w, vh);
      ctx.fillStyle = colors.particle;
      for (const p of particlesRef.current) {
        const sy = p.y - scrollY;
        if (sy < -20 || sy > vh + 20) continue;
        ctx.beginPath();
        ctx.arc(p.x, sy, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      return;
    }

    const animate = () => {
      if (pausedRef.current) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      const { w, pageH } = dimsRef.current;
      const vh = window.innerHeight;
      const colors = themeRef.current;
      const mousePos = mouseRef.current;
      const scrollY = scrollRef.current;
      const top = scrollY - VISUAL_BUFFER;
      const bot = scrollY + vh + VISUAL_BUFFER;

      ctx.clearRect(0, 0, w, vh);

      const particles = particlesRef.current;
      const len = particles.length;
      const rSq = REPULSION_RADIUS * REPULSION_RADIUS;

      // Phase 1: update ALL particles (cheap — just velocity + position)
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        p.vx *= FRICTION;
        p.vy *= FRICTION;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = pageH + 10;
        if (p.y > pageH + 10) p.y = -10;
        if (p.opacity < 0.65) p.opacity = Math.min(p.opacity + 0.01, 0.65);
      }

      // Phase 2: collect visible + apply mouse repulsion only to them
      const vis: Particle[] = [];
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        if (p.y >= top && p.y <= bot) {
          // Mouse repulsion — only for visible
          const dx = p.x - mousePos.x;
          const dy = p.y - mousePos.y;
          const dSq = dx * dx + dy * dy;
          if (dSq < rSq && dSq > 0) {
            const d = Math.sqrt(dSq);
            const f = (1 - d / REPULSION_RADIUS) * REPULSION_FORCE;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }
          // Drift jitter — only for visible
          p.vx += (Math.random() - 0.5) * 0.006;
          p.vy += (Math.random() - 0.5) * 0.006;
          // Speed clamp
          const spd = p.vx * p.vx + p.vy * p.vy;
          if (spd > 2.25) {
            const s = Math.sqrt(spd);
            p.vx = (p.vx / s) * 1.5;
            p.vy = (p.vy / s) * 1.5;
          }
          vis.push(p);
        }
      }

      // Phase 3: draw visible particles
      ctx.fillStyle = colors.particle;
      for (let i = 0; i < vis.length; i++) {
        const p = vis[i];
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y - scrollY, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Phase 4: connection lines between visible
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = colors.line;
      for (let i = 0; i < vis.length; i++) {
        for (let j = i + 1; j < vis.length; j++) {
          const dx = vis[i].x - vis[j].x;
          const dy = vis[i].y - vis[j].y;
          const dSq = dx * dx + dy * dy;
          if (dSq < CONNECTION_DISTANCE_SQ) {
            ctx.globalAlpha = (1 - Math.sqrt(dSq) / CONNECTION_DISTANCE) * 0.6;
            ctx.beginPath();
            ctx.moveTo(vis[i].x, vis[i].y - scrollY);
            ctx.lineTo(vis[j].x, vis[j].y - scrollY);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      aria-hidden="true"
    />
  );
}
