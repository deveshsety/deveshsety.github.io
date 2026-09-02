"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";


const experiences = [
  {
    type: "work" as const,
    title: "Backend Developer",
    company: "OSF Digital",
    period: "Jul 2021 – Apr 2026",
    achievements: [
      "Directed the security architecture for a global brand's payment gateway, enabling secure authorization for <strong>100% of client transactions</strong>",
      "Built a structured design-review system across frontend and QA, embedding quality checkpoints into the Agile workflow and <strong>reducing solution defects</strong>",
      "Architected a scalable inventory foundation that let the brand expand its catalogue on demand, <strong>shortening the runway from concept to market launch</strong>",
      "Spotted a cross-sell gap in the subscription flow and led the design and launch of an upsell feature, <strong>lifting attach rates 15-20%</strong>",
      "Led account-verification and fraud due-diligence work, <strong>cutting fraudulent account creation by 70-80%</strong>",
    ],
  },
  {
    type: "education" as const,
    title: "Academic Project",
    company: "Tech-Ed Platform",
    period: "2024",
    achievements: [
      "Designed an adaptive tech-ed platform integrating microlearning and gamification into onboarding, <strong>projected to increase user retention by 50%</strong>",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="relative section">
      <div ref={ref} className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="headline-section mb-12"
        >
          Where I&apos;ve Worked
        </motion.h2>

        <div className="timeline">
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
              className="timeline-item group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-medium text-[var(--color-platinum)] group-hover:text-[var(--color-copper)] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-[var(--color-steel)]">{exp.company}</p>
                </div>
                <span className="text-xs text-[var(--color-steel-dim)] tracking-wider whitespace-nowrap">{exp.period}</span>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, ai) => (
                  <motion.li
                    key={achievement}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.2 + ai * 0.08,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="text-sm text-[var(--color-steel)] leading-relaxed flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-copper)] mt-1.5 shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: achievement }} />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}