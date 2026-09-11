"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { GithubLogo, ArrowUpRight } from "@phosphor-icons/react";

interface Project {
  id: number;
  name: string;
  description: string;
  scope: string;
  outcome: string;
  url: string;
  language: string | null;
  topics: string[];
}

const allProjects: Project[] = [
  {
    id: 1,
    name: "ERP Readiness Questionnaire",
    description: "Interactive diagnostic with agentic AI workflow and phase-gated QA checkpoints, condensing multi-week reviews into same-day turnarounds.",
    scope: "Process maturity, data quality, and change-management capacity assessment",
    outcome: "Gives leadership a defensible go/no-go signal before engaging a vendor.",
    url: "https://deveshsety.github.io/erp-questionnaire/",
    language: "JavaScript",
    topics: ["JavaScript", "SQL", "Supabase", "Playwright"],
  },
  {
    id: 2,
    name: "Consulting Arena",
    description: "Self-guided case interview simulator with timed frameworks, quantitative drills, and structured feedback loops.",
    scope: "MBB-style case interview prep with timed frameworks and quantitative drills",
    outcome: "Mirrors real interview flow for structured practice and feedback.",
    url: "https://github.com/deveshsety/consulting-arena",
    language: "JavaScript",
    topics: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 3,
    name: "GrowthExchange",
    description: "Corporate landing site for a trading and investment firm, built with React and Vite featuring smooth-scroll navigation and responsive layout.",
    scope: "Investment approach, company overview, and client acquisition sections",
    outcome: "Professional web presence showcasing firm credibility and driving inbound leads.",
    url: "https://github.com/deveshsety/GrowthExchange",
    language: "JavaScript",
    topics: ["React", "Vite", "SCSS"],
  },
];

function humanizeName(name: string): string {
  return name
    .replace(/[-_]/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="relative section bg-[var(--color-anthracite-deep)]">
      <div ref={ref} className="container-main">
        <div className="section-header">
          <div className="section-line" />
          <span className="section-eyebrow">Work</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="headline-section mb-16"
        >
          Featured Work
        </motion.h2>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[320px] card-surface animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {allProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-surface overflow-hidden flex flex-col h-full"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-6 flex flex-col flex-1">
                    {/* Header: icon + link arrow */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-9 h-9 flex items-center justify-center border border-[rgba(193,124,90,0.2)] bg-[rgba(193,124,90,0.06)] group-hover:border-[rgba(193,124,90,0.35)] group-hover:bg-[rgba(193,124,90,0.1)] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                        <GithubLogo size={16} className="text-[var(--color-copper)]" />
                      </div>
                      <ArrowUpRight size={14} className="text-[var(--color-steel-dim)] group-hover:text-[var(--color-copper)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-[var(--color-platinum)] mb-2 group-hover:text-[var(--color-copper)] transition-colors">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[var(--color-steel)] leading-relaxed mb-4 flex-1 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Scope + Outcome rows */}
                    <div className="grid grid-cols-1 gap-2 mb-4">
                      <div className="p-3 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
                        <span className="text-[10px] uppercase tracking-wider text-[var(--color-copper)] font-medium block mb-1">Scope</span>
                        <span className="text-xs text-[var(--color-platinum)] leading-relaxed line-clamp-2">{project.scope}</span>
                      </div>
                      <div className="p-3 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
                        <span className="text-[10px] uppercase tracking-wider text-[var(--color-copper)] font-medium block mb-1">Impact</span>
                        <span className="text-xs text-[var(--color-platinum)] leading-relaxed line-clamp-2">{project.outcome}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    {project.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.topics.slice(0, 3).map((topic: string) => (
                          <span key={topic} className="tag tag-copper">
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Language */}
                    <div className="flex items-center gap-3 pt-3 border-t border-[var(--color-slate-border)] mt-auto">
                      {project.language && (
                        <span className="text-xs text-[var(--color-steel-dim)] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-copper)]" />
                          {project.language}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
