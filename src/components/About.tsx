"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Code, Database, ShieldCheck, TrendUp } from "@phosphor-icons/react";

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

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="relative py-32 md:py-40">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-[#c8ff00]" />
          <span className="text-xs tracking-[0.3em] uppercase text-white/40">About</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-3xl md:text-5xl font-light tracking-tight leading-tight text-white mb-8"
            >
              Crafting digital experiences through{" "}
              <span className="text-[#c8ff00]">clean code</span> and thoughtful architecture
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="text-base text-white/50 leading-relaxed mb-6"
            >
              Backend Developer with 5 years of experience at OSF Digital, specializing in
              payment security, scalable inventory systems, and revenue optimization. I build
              systems that handle real transactions for real brands.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="text-base text-white/50 leading-relaxed"
            >
              From cutting fraudulent account creation by 70-80% to designing adaptive
              tech-ed platforms with gamification, I focus on solutions that deliver
              measurable impact.
            </motion.p>
          </div>

          {/* Right: highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                className="group p-6 bg-[#141414] border border-[#222] hover:border-[#c8ff00]/30 transition-all duration-500"
              >
                <item.icon
                  size={24}
                  className="text-[#c8ff00] mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-sm font-medium text-white mb-2">{item.label}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
