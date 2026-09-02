"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(reduceMotion ? 100 : 0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (reduceMotion) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 200);
      }, 100);
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800);
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete, reduceMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--color-anthracite)]"
        >
          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[120px] md:text-[200px] font-light tracking-tighter text-[var(--color-platinum)]/10"
            >
              {count.toString().padStart(3, "0")}
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              transition={{ duration: 0.1 }}
              className="w-[200px] h-[1px] bg-[var(--color-copper)] origin-left"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xs tracking-[0.3em] uppercase text-[var(--color-steel-dim)]"
            >
              Loading Experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}