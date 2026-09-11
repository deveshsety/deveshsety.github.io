"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Sun, Moon } from "@phosphor-icons/react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const initial = saved || "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggle}
      className="relative w-9 h-9 flex items-center justify-center border border-[var(--color-slate-border)] bg-[var(--color-slate)] hover:border-[var(--color-copper)] hover:bg-[rgba(193,124,90,0.08)] transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
      >
        {theme === "dark" ? (
          <Sun size={15} className="text-[var(--color-copper)]" />
        ) : (
          <Moon size={15} className="text-[var(--color-copper)]" />
        )}
      </motion.div>
    </motion.button>
  );
}
