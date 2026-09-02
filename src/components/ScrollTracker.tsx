"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface ScrollTrackerProps {
  sections: string[];
}

export default function ScrollTracker({ sections }: ScrollTrackerProps) {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, [sections]);

  return (
    <nav className="scroll-tracker" aria-label="Page sections">
      <div className="scroll-tracker-track">
        {sections.map((section, i) => (
          <motion.button
            key={section}
            className={`scroll-tracker-dot ${activeSection === section ? "active" : ""}`}
            onClick={() => {
              document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
            }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
            aria-label={`Go to ${section}`}
          >
            <span className="scroll-tracker-label">{section}</span>
          </motion.button>
        ))}
      </div>
    </nav>
  );
}