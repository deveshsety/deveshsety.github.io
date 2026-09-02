"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const technicalSkills = [
  "Salesforce Commerce Cloud (SFCC)",
  "Salesforce B2C Developer Certified (2022)",
  "Payment Systems & Security",
  "Agile/Scrum",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Motion (Framer Motion)",
];

const consultingSkills = [
  "Stakeholder Communication",
  "Structured Problem Solving",
  "Commercial Judgment",
  "Identifying Gaps",
  "Result-Oriented Execution",
  "Agile Program Coordination",
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="relative section bg-[var(--color-anthracite-deep)]">
      <div ref={ref} className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="headline-section mb-12"
        >
          Technical & Consulting Capability
        </motion.h2>

        <div className="skills-grid">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          >
            <h3 className="text-sm font-medium text-[var(--color-copper)] tracking-wider uppercase mb-6">Technical</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.05, type: "spring", stiffness: 200, damping: 20 }}
                  className="tag tag-copper"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <h3 className="text-sm font-medium text-[var(--color-copper)] tracking-wider uppercase mb-6">Consulting / Business</h3>
            <div className="flex flex-wrap gap-3">
              {consultingSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.05, type: "spring", stiffness: 200, damping: 20 }}
                  className="tag tag-steel"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="mt-10 text-sm text-[var(--color-steel-dim)] italic"
        >
          Outside work: competitive table tennis, football, and a growing coffee-brewing habit.
        </motion.p>
      </div>
    </section>
  );
}