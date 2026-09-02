"use client";

import { useRef, useEffect } from "react";
import { useMotionValue, useReducedMotion } from "motion/react";

interface UseMagneticOptions {
  strength?: number;
  radius?: number;
  damping?: number;
  stiffness?: number;
}

export function useMagnetic<T extends HTMLElement = HTMLElement>(options: UseMagneticOptions = {}) {
  const {
    strength = 0.3,
    radius = 45,
    damping = 12,
    stiffness = 120,
  } = options;

  const ref = useRef<T>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (reduceMotion || !ref.current) return;

    const element = ref.current;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      if (distance < radius) {
        const force = (1 - distance / radius) * strength;
        x.set(deltaX * force);
        y.set(deltaY * force);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [radius, strength, reduceMotion, x, y]);

  const magneticStyle = {
    x: reduceMotion ? 0 : x,
    y: reduceMotion ? 0 : y,
    transition: reduceMotion ? undefined : { type: "spring", damping, stiffness },
  };

  return { ref, magneticStyle };
}