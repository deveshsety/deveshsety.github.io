"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowClockwise } from "@phosphor-icons/react";

interface Question {
  id: string;
  text: string;
  options: { label: string; value: number }[];
  dimension: string;
}

const questions: Question[] = [
  {
    id: "process",
    text: "How mature are your current business processes?",
    dimension: "Process Maturity",
    options: [
      { label: "Ad-hoc / Undocumented", value: 1 },
      { label: "Partially documented", value: 2 },
      { label: "Standardized across units", value: 3 },
      { label: "Optimized & continuously improved", value: 4 },
    ],
  },
  {
    id: "data",
    text: "What is the state of your core data quality?",
    dimension: "Data Quality",
    options: [
      { label: "Fragmented, inconsistent, siloed", value: 1 },
      { label: "Centralized but with gaps", value: 2 },
      { label: "Governed with quality metrics", value: 3 },
      { label: "Single source of truth, high fidelity", value: 4 },
    ],
  },
  {
    id: "change",
    text: "How does your organization handle change?",
    dimension: "Change Management",
    options: [
      { label: "Resistant, no formal approach", value: 1 },
      { label: "Reactive, case-by-case", value: 2 },
      { label: "Structured methodology exists", value: 3 },
      { label: "Embedded culture, agile adoption", value: 4 },
    ],
  },
  {
    id: "leadership",
    text: "Is leadership aligned on ERP objectives?",
    dimension: "Leadership Alignment",
    options: [
      { label: "No consensus, competing priorities", value: 1 },
      { label: "General agreement, no roadmap", value: 2 },
      { label: "Aligned with documented vision", value: 3 },
      { label: "Unified sponsorship, clear mandate", value: 4 },
    ],
  },
  {
    id: "budget",
    text: "What is your budget readiness?",
    dimension: "Budget & Resources",
    options: [
      { label: "No allocation, exploratory only", value: 1 },
      { label: "Preliminary estimate, unapproved", value: 2 },
      { label: "Approved budget, vendor shortlist", value: 3 },
      { label: "Funded program, team in place", value: 4 },
    ],
  },
];

export default function ERPDiagnostic() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [completed, setCompleted] = useState(false);
  const [scores, setScores] = useState<Record<string, number>>({});

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep) / questions.length) * 100;

  const handleAnswer = (value: number) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep((c) => c + 1), 300);
    } else {
      setCompleted(true);
      calculateScores();
    }
  };

  const calculateScores = () => {
    const dimScores: Record<string, number> = {};
    questions.forEach((q) => {
      dimScores[q.dimension] = answers[q.id] || 0;
    });
    setScores(dimScores);
  };

  const restart = () => {
    setCurrentStep(0);
    setAnswers({});
    setCompleted(false);
    setScores({});
  };

  const overallScore = completed
    ? Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / questions.length * 25)
    : 0;

  const getReadinessLabel = (score: number) => {
    if (score >= 75) return { label: "Ready", color: "var(--color-copper)" };
    if (score >= 50) return { label: "Conditional", color: "var(--color-steel)" };
    return { label: "Not Ready", color: "var(--color-steel-dim)" };
  };

  return (
    <div className="relative h-full min-h-[300px] flex flex-col">
      {!completed ? (
        <>
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-[var(--color-steel-dim)]">Question {currentStep + 1} of {questions.length}</span>
              <span className="text-[var(--color-copper)] font-mono">{Math.round(progress)}%</span>
            </div>
            <motion.div
              className="h-1 bg-[var(--color-slate-border)] rounded-full overflow-hidden"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              style={{ transformOrigin: "left" }}
            >
              <motion.div
                className="h-full bg-[var(--color-copper)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
              className="flex-1 flex flex-col"
            >
              <span className="tag tag-copper mb-3 w-fit">{currentQuestion.dimension}</span>
              <h4 className="text-lg font-medium text-[var(--color-platinum)] mb-6 leading-snug">
                {currentQuestion.text}
              </h4>
              <div className="flex-1 flex flex-col gap-3">
                {currentQuestion.options.map((option, i) => (
                  <motion.button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`text-left p-4 rounded-none border transition-all duration-300 ${
                      answers[currentQuestion.id] === option.value
                        ? "bg-[var(--color-copper)]/10 border-[var(--color-copper)] text-[var(--color-platinum)]"
                        : "bg-[var(--color-anthracite-deep)] border-[var(--color-slate-border)] text-[var(--color-steel)] hover:border-[var(--color-copper)]/50 hover:text-[var(--color-platinum)]"
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option.label}</span>
                      {answers[currentQuestion.id] === option.value && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        >
                          <Check size={20} className="text-[var(--color-copper)]" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="flex-1 flex flex-col items-center justify-center text-center p-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="relative mb-6"
            >
              <svg width={120} height={120} viewBox="0 0 120 120">
                <circle
                  cx={60}
                  cy={60}
                  r={54}
                  stroke="var(--color-slate-border)"
                  strokeWidth={8}
                  fill="none"
                />
                <motion.circle
                  cx={60}
                  cy={60}
                  r={54}
                  stroke="var(--color-copper)"
                  strokeWidth={8}
                  fill="none"
                  strokeDasharray={339}
                  strokeDashoffset={339 - (overallScore / 100) * 339}
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                  style={{ filter: "drop-shadow(0 0 8px rgba(193,124,90,0.4))" }}
                  initial={{ strokeDashoffset: 339 }}
                  animate={{ strokeDashoffset: 339 - (overallScore / 100) * 339 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="metric-large font-bold"
                >
                  {overallScore}%
                </motion.span>
                <span className="text-xs text-[var(--color-steel-dim)] tracking-wider uppercase">Readiness Score</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full max-w-xs"
            >
              {Object.entries(scores).map(([dimension, score], i) => (
                <motion.div
                  key={dimension}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="mb-3"
                >
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[var(--color-steel)]">{dimension}</span>
                    <span className="text-[var(--color-copper)] font-mono">{score}/4</span>
                  </div>
                  <motion.div
                    className="h-1.5 bg-[var(--color-slate-border)] rounded-full overflow-hidden"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: score / 4 }}
                    transition={{ duration: 0.6, delay: 0.7 + i * 0.1, ease: [0.76, 0, 0.24, 1] }}
                    style={{ transformOrigin: "left" }}
                  >
                    <div className="h-full bg-[var(--color-copper)] rounded-full" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-6 w-full max-w-xs"
            >
              <div
                className={`px-4 py-3 rounded-none text-sm font-medium ${getReadinessLabel(overallScore).color}`}
                style={{ background: `${getReadinessLabel(overallScore).color}15`, border: `1px solid ${getReadinessLabel(overallScore).color}40` }}
              >
                {getReadinessLabel(overallScore).label} for ERP Transformation
              </div>
            </motion.div>

            <motion.button
              onClick={restart}
              className="btn btn-outline mt-6 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <ArrowClockwise size={16} className="group-hover:rotate-90 transition-transform" />
              Run Diagnostic Again
            </motion.button>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}