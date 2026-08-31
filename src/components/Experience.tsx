"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Briefcase, GraduationCap } from "@phosphor-icons/react";

const experiences = [
  {
    type: "work" as const,
    title: "Backend Developer",
    company: "OSF Digital",
    period: "Jul 2021 - Apr 2026",
    achievements: [
      "Secured payment gateway for international brand, enabling 100% of client transactions",
      "Established design review system across frontend and QA, reducing solution defects significantly",
      "Architected scalable inventory foundation, shortening product concept to market launch",
      "Designed upsell feature in subscription flow, lifting attach rates by 15-20%",
      "Implemented account verification, cutting fraudulent creation by 70-80%",
    ],
  },
  {
    type: "education" as const,
    title: "Academic Project",
    company: "Tech-Ed Platform",
    period: "2024",
    achievements: [
      "Designed adaptive tech-ed platform integrating microlearning and gamification",
      "Streamlined onboarding process driving projected 50% increase in user retention",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="relative py-32 md:py-40">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-[#c8ff00]" />
          <span className="text-xs tracking-[0.3em] uppercase text-white/40">Experience</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-3xl md:text-5xl font-light tracking-tight text-white mb-16"
        >
          Where I&apos;ve Worked
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="group relative pl-8 border-l border-[#222] hover:border-[#c8ff00]/30 transition-colors duration-500"
            >
              {/* Icon */}
              <div className="absolute -left-3 top-0 p-1.5 bg-[#0a0a0a] group-hover:bg-[#c8ff00]/10 transition-colors">
                {exp.type === "work" ? (
                  <Briefcase size={14} className="text-[#c8ff00]" />
                ) : (
                  <GraduationCap size={14} className="text-[#c8ff00]" />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-medium text-white group-hover:text-[#c8ff00] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-white/50">{exp.company}</p>
                </div>
                <span className="text-xs text-white/30 tracking-wider">{exp.period}</span>
              </div>

              <ul className="space-y-2">
                {exp.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="text-sm text-white/40 leading-relaxed flex items-start gap-3"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c8ff00]/50 mt-2 shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
