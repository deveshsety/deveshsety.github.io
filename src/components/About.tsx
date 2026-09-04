"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Database, ShieldCheck, Code, TrendUp } from "@phosphor-icons/react";

const highlights = [
  {
    icon: Database,
    label: "Platform Architecture",
    description: "Scalable inventory foundations and catalogue expansion on demand",
  },
  {
    icon: ShieldCheck,
    label: "Payment Security",
    description: "Multi-step verification securing 100% of customer CC transactions",
  },
  {
    icon: Code,
    label: "Agentic AI Workflows",
    description: "Phase-gated QA checkpoints condensing multi-week reviews into same-day turnarounds",
  },
  {
    icon: TrendUp,
    label: "Revenue Optimization",
    description: "Upsell features lifting attach rates 15-20% and AOV growth",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="relative section">
      <div ref={ref} className="container-main">
        <div className="section-header">
          <div className="section-line" />
          <span className="section-eyebrow">About</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="headline-section mb-6"
            >
              Crafting digital experiences through{" "}
              <span className="headline-accent">clean code</span> and thoughtful architecture
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="body-copy mb-6"
            >
              I coordinated technology workstreams for enterprise clients at <strong>OSF Digital</strong> across three progressive roles, translating business requirements into platform and architecture strategies. Along the way, I stopped seeing my work as just code. I started seeing it as <strong>business decisions with a technical solution attached</strong>: a payment verification shift wasn&apos;t just a security update, it was trust at scale; an upsell feature wasn&apos;t just a build, it was <strong>15-20% more revenue per customer</strong>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="body-copy"
            >
              That shift in how I thought about my own work is why I&apos;m now pursuing a <strong>PGPM at Great Lakes Institute of Management</strong>, and why I&apos;m aiming for <strong>tech and strategy consulting</strong> roles. I want to keep solving the business problem, just further upstream, and for more than one company at a time.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="group card-surface p-8 text-center"
                whileHover={{ y: -2 }}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-[rgba(193,124,90,0.2)] bg-[rgba(193,124,90,0.06)] mb-5 mx-auto group-hover:border-[rgba(193,124,90,0.35)] group-hover:bg-[rgba(193,124,90,0.1)] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <item.icon
                    size={22}
                    className="text-[var(--color-copper)]"
                  />
                </div>
                <h3 className="text-sm font-semibold text-[var(--color-platinum)] mb-3 tracking-wide">{item.label}</h3>
                <p className="text-[13px] text-[var(--color-steel)] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}