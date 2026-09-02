"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Database, ShieldCheck, Code, TrendUp } from "@phosphor-icons/react";

const highlights = [
  {
    icon: Database,
    label: "Scalable Systems",
    description: "Architecting foundations that grow with business demands",
  },
  {
    icon: ShieldCheck,
    label: "Secure Payments",
    description: "International payment gateway security for 100% of transactions",
  },
  {
    icon: Code,
    label: "Quality Engineering",
    description: "Design review systems reducing defects across teams",
  },
  {
    icon: TrendUp,
    label: "Revenue Growth",
    description: "Upsell features boosting subscription revenue 15-20%",
  },
];

const clientLogos = [
  {
    name: "L'Occitane Japan",
    icon: (
      <svg viewBox="0 0 80 20" fill="currentColor" className="h-5 w-auto">
        <text x="0" y="15" fontFamily="var(--font-display)" fontSize="14" fontWeight="600" letterSpacing="-0.02em">L&apos;Occitane</text>
      </svg>
    ),
  },
  {
    name: "GAP Japan",
    icon: (
      <svg viewBox="0 0 40 20" fill="currentColor" className="h-5 w-auto">
        <text x="0" y="15" fontFamily="var(--font-display)" fontSize="16" fontWeight="700" letterSpacing="0.15em">GAP</text>
      </svg>
    ),
  },
  {
    name: "PLDT Philippines",
    icon: (
      <svg viewBox="0 0 50 20" fill="currentColor" className="h-5 w-auto">
        <text x="0" y="15" fontFamily="var(--font-display)" fontSize="14" fontWeight="700" letterSpacing="0.05em">PLDT</text>
      </svg>
    ),
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
              I spent four years as a <strong>Backend Developer at OSF Digital</strong>, building and securing Salesforce Commerce Cloud platforms for global brands including <strong>L&apos;Occitane Japan, GAP Japan, and PLDT Philippines</strong>. Along the way, I stopped seeing my work as just code. I started seeing it as <strong>business decisions with a technical solution attached</strong>: a payment gateway wasn&apos;t just an integration, it was trust at scale; an upsell feature wasn&apos;t just a build, it was <strong>15-20% more revenue per customer</strong>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="body-copy"
            >
              That shift in how I thought about my own work is why I&apos;m now pursuing a <strong>PGPM at Great Lakes Institute of Management</strong>, and why I&apos;m aiming for <strong>tech and strategy consulting</strong> roles. I want to keep solving the business problem, just further upstream, and for more than one company at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="logo-strip mt-10"
              role="list"
              aria-label="Clients worked with"
            >
              {clientLogos.map((client, i) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2"
                  role="listitem"
                >
                  <motion.div
                    className="text-[var(--color-steel-dim)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-[var(--color-copper)] group-hover:-translate-y-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    {client.icon}
                  </motion.div>
                  <span className="text-xs text-[var(--color-steel-dim)] hidden sm:inline">{client.name}</span>
                </motion.div>
              ))}
            </motion.div>
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