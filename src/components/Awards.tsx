"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Trophy, Medal, Star } from "@phosphor-icons/react";

const awards = [
  {
    icon: Star,
    title: "Rising Star by CEO",
    organization: "OSF Digital",
    year: "2022",
  },
  {
    icon: Medal,
    title: "Second Runner Up",
    organization: "National Level Table Tennis Tournament",
    year: "2017",
  },
  {
    icon: Trophy,
    title: "Winner",
    organization: "Zonal Level Table Tennis Tournament",
    year: "2015",
  },
];

export default function Awards() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="awards" className="relative section">
      <div ref={ref} className="container-main">
        <div className="section-header">
          <div className="section-line" />
          <span className="section-eyebrow">Recognition</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="headline-section mb-12"
        >
          Awards & Achievements
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="group card-surface p-6"
              whileHover={{ y: -2 }}
            >
              <div className="w-10 h-10 flex items-center justify-center border border-[rgba(193,124,90,0.2)] bg-[rgba(193,124,90,0.06)] mb-4 group-hover:border-[rgba(193,124,90,0.35)] group-hover:bg-[rgba(193,124,90,0.1)] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                <award.icon
                  size={20}
                  className="text-[var(--color-copper)]"
                />
              </div>
              <h3 className="text-sm font-semibold text-[var(--color-platinum)] mb-1 tracking-wide">
                {award.title}
              </h3>
              <p className="text-xs text-[var(--color-steel)] mb-2">
                {award.organization}
              </p>
              <span className="text-xs text-[var(--color-steel-dim)] tracking-wider">
                {award.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
