"use client";

import { motion } from "motion/react";
import { GithubLogo, LinkedinLogo, EnvelopeSimple, ArrowUp } from "@phosphor-icons/react";

interface FooterProps {
  github: string;
  linkedin: string;
  email: string;
}

export default function Footer({ github, linkedin, email }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-8 border-t border-[var(--color-slate-border)]">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="text-lg font-medium tracking-tight text-[var(--color-platinum)] hover:text-[var(--color-copper)] transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            DS<span className="text-[var(--color-copper)]">.</span>
          </motion.a>

          <div className="flex items-center gap-6">
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-steel-dim)] hover:text-[var(--color-copper)] transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubLogo size={20} />
            </motion.a>
            <motion.a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-steel-dim)] hover:text-[var(--color-copper)] transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedinLogo size={20} />
            </motion.a>
            <motion.a
              href={`mailto:${email}`}
              className="text-[var(--color-steel-dim)] hover:text-[var(--color-copper)] transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <EnvelopeSimple size={20} />
            </motion.a>
          </div>

          <p className="text-xs text-[var(--color-steel-dim)]">
            &copy; {new Date().getFullYear()} Devesh Sety. All rights reserved.
          </p>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 card-surface text-[var(--color-steel-dim)] hover:text-[var(--color-copper)] hover:border-[var(--color-copper)]/30 transition-all z-[60]"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </motion.button>
    </footer>
  );
}