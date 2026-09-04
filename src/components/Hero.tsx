"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowFatLineDown } from "@phosphor-icons/react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const textReveal = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: i * 0.12,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative hero-viewport flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-anthracite)] via-[var(--color-anthracite-deep)] to-[var(--color-anthracite)]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-copper)]/5 rounded-full blur-[120px]" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container-main w-full"
      >
        <div className="flex flex-col gap-6">
          <motion.div
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-[1px] bg-[var(--color-copper)]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-steel-dim)]">
              Backend Developer → Tech Consultant
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              variants={textReveal}
              initial="hidden"
              animate="visible"
              custom={1}
              className="headline-hero"
            >
              Four years shipping enterprise software.
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={textReveal}
              initial="hidden"
              animate="visible"
              custom={2}
              className="headline-hero"
            >
              Now applying that to{" "}
              <span className="headline-accent">strategy.</span>
            </motion.h1>
          </div>

          <motion.div
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex items-baseline gap-3 mt-4"
          >
            <span className="metric-large">80%</span>
            <span className="metric-label">
              reduction in report generation time across enterprise cycles
            </span>
          </motion.div>

          <motion.div
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn btn-primary group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
              <ArrowFatLineDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}