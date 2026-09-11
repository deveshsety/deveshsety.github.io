"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Safe parser — only allows <strong> tags, escapes everything else
function parseRichText(text: string): React.ReactNode[] {
  const parts = text.split(/(<strong>.*?<\/strong>)/g);
  return parts.map((part, i) => {
    if (part.startsWith("<strong>") && part.endsWith("</strong>")) {
      const inner = part.slice(8, -9);
      return <strong key={i} className="text-[var(--color-platinum)] font-medium">{inner}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}


const experiences = [
  {
    type: "work" as const,
    title: "Backend Developer A3",
    company: "OSF Digital",
    period: "Feb 2025 – Apr 2026",
    achievements: [
      "Directed the shift to a stronger, multi-step payment verification process after assessing a current-state gap against rising security standards, <strong>securing 100% of customer CC transactions</strong>",
      "Coordinated scrum calls and JIRA tracking across global and localized teams, <strong>closing delivery misalignment during critical cycles</strong>",
      "Overhauled standard order reporting into automated, customizable formats aligned to business analysis needs, <strong>cutting report generation time by 80% every cycle</strong>",
    ],
  },
  {
    type: "work" as const,
    title: "Backend Developer Junior 2",
    company: "OSF Digital",
    period: "Mar 2023 – Feb 2025",
    achievements: [
      "Recommended an up-sell feature after spotting a gap in the subscription flow, partnered with stakeholders to design and launch it, <strong>lifting attach rates by 15-20%</strong> and boosting subscription revenue per customer",
      "Implemented a save-for-later capability to re-engage users post-visit, <strong>contributing to Average Order Value growth</strong>",
    ],
  },
  {
    type: "work" as const,
    title: "Backend Developer Junior 1",
    company: "OSF Digital",
    period: "May 2022 – Mar 2023",
    achievements: [
      "Streamlined the product listing page to persist filter and navigation state across sessions, <strong>improving return-visit engagement</strong>",
      "Architected a scalable inventory foundation that gave the brand the flexibility to expand its catalogue on demand, <strong>shortening the runway from product concept to market launch</strong>",
    ],
  },
  {
    type: "education" as const,
    title: "Academic Projects",
    company: "Great Lakes Institute of Management",
    period: "2026",
    achievements: [
      "Ideated an ERP readiness tool, designing an agentic AI workflow with phase-gated QA checkpoints that autonomously validated each development phase, <strong>condensing a multi-week review into a same-day turnaround</strong>",
      "Analyzed manual process flow bottlenecks in cast nylon manufacturing, building a simulation-based framework to identify and test improvement scenarios, <strong>aiming to reduce cycle time and manual dependency in production</strong>",
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
                    <span>{parseRichText(achievement)}</span>
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