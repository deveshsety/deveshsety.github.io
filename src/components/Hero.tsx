"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";

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
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c8ff00]/5 rounded-full blur-[120px]" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full"
      >
        <div className="flex flex-col gap-8">
          {/* Eyebrow */}
          <motion.div
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-[1px] bg-[#c8ff00]" />
            <span className="text-xs tracking-[0.3em] uppercase text-white/40">
              Backend Developer
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="overflow-hidden">
            <motion.h1
              variants={textReveal}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-[48px] md:text-[80px] lg:text-[120px] font-light leading-[0.9] tracking-tighter text-white"
            >
              Devesh
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={textReveal}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-[48px] md:text-[80px] lg:text-[120px] font-light leading-[0.9] tracking-tighter text-stroke"
            >
              Sety
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={3}
            className="max-w-md text-base md:text-lg text-white/50 leading-relaxed mt-4"
          >
            Building scalable systems and secure payment solutions.
            Turning complex problems into elegant code.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-wrap items-center gap-6 mt-4"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex items-center gap-3 px-8 py-4 bg-[#c8ff00] text-[#0a0a0a] text-sm font-medium tracking-wide hover:bg-[#b8f000] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </motion.a>

            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-white/40 hover:text-[#c8ff00] transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubLogo size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-white/40 hover:text-[#c8ff00] transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedinLogo size={20} />
              </motion.a>
              <motion.a
                href="mailto:"
                className="p-3 text-white/40 hover:text-[#c8ff00] transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <EnvelopeSimple size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}
