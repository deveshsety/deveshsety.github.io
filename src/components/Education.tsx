"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { GraduationCap } from "@phosphor-icons/react";

const education = [
  {
    degree: "MBA (PGPM)",
    institution: "Great Lakes Institute of Management, Chennai",
    score: "2.93 CGPA",
    year: "2027",
  },
  {
    degree: "BE (Electronics)",
    institution: "Vivekanand Education Society's Institute of Technology",
    score: "65.63%",
    year: "2021",
  },
  {
    degree: "12th",
    institution: "DAV Public School, Airoli",
    score: "74.4%",
    year: "2017",
  },
  {
    degree: "10th",
    institution: "DAV Public School, Airoli",
    score: "89.3%",
    year: "2015",
  },
];

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="education" className="relative section bg-[var(--color-anthracite-deep)]">
      <div ref={ref} className="container-main">
        <div className="section-header">
          <div className="section-line" />
          <span className="section-eyebrow">Education</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="headline-section mb-12"
        >
          Academic Background
        </motion.h2>

        <div className="space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="group flex items-start gap-4 p-5 card-surface"
              whileHover={{ x: 4 }}
            >
              <div className="w-10 h-10 flex items-center justify-center border border-[rgba(193,124,90,0.2)] bg-[rgba(193,124,90,0.06)] shrink-0 group-hover:border-[rgba(193,124,90,0.35)] group-hover:bg-[rgba(193,124,90,0.1)] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                <GraduationCap
                  size={18}
                  className="text-[var(--color-copper)]"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="text-sm font-semibold text-[var(--color-platinum)] tracking-wide">
                    {edu.degree}
                  </h3>
                  <span className="text-xs text-[var(--color-steel-dim)] tracking-wider">
                    {edu.year}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-steel)] mb-1">
                  {edu.institution}
                </p>
                <span className="text-xs text-[var(--color-copper)] font-medium">
                  {edu.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
