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
    <footer className="relative py-12 border-t border-[#222]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="text-lg font-medium tracking-tight text-white hover:text-[#c8ff00] transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            DS<span className="text-[#c8ff00]">.</span>
          </motion.a>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-[#c8ff00] transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubLogo size={20} />
            </motion.a>
            <motion.a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-[#c8ff00] transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedinLogo size={20} />
            </motion.a>
            <motion.a
              href={`mailto:${email}`}
              className="text-white/30 hover:text-[#c8ff00] transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <EnvelopeSimple size={20} />
            </motion.a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Devesh Sety. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-[#141414] border border-[#222] text-white/40 hover:text-[#c8ff00] hover:border-[#c8ff00]/30 transition-all z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <ArrowUp size={16} />
      </motion.button>
    </footer>
  );
}
