"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { EnvelopeSimple, Phone, LinkedinLogo, PaperPlaneRight } from "@phosphor-icons/react";

interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  location: string;
}

export default function Contact({ info }: { info: ContactInfo }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) newErrors.email = "Invalid email format";
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative section bg-[var(--color-anthracite-deep)]">
      <div ref={ref} className="container-main">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="headline-section mb-6"
            >
              Let&apos;s turn{" "}
              <span className="headline-accent">execution</span> into strategy
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="body-copy mb-10"
            >
              Four years shipping enterprise software taught me how to solve the technical problem.
              Now I want to solve the business one, for your team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="space-y-5"
            >
              <motion.a
                href={`mailto:${info.email}`}
                className="flex items-center gap-4 text-[var(--color-steel)] hover:text-[var(--color-copper)] transition-colors group"
                whileHover={{ x: 4 }}
              >
                <div className="p-3 card-surface group-hover:border-[var(--color-copper)]/30 transition-colors">
                  <EnvelopeSimple size={18} className="text-[var(--color-copper)]" />
                </div>
                <span className="text-sm">{info.email}</span>
              </motion.a>

              <motion.a
                href={`tel:${info.phone}`}
                className="flex items-center gap-4 text-[var(--color-steel)] hover:text-[var(--color-copper)] transition-colors group"
                whileHover={{ x: 4 }}
              >
                <div className="p-3 card-surface group-hover:border-[var(--color-copper)]/30 transition-colors">
                  <Phone size={18} className="text-[var(--color-copper)]" />
                </div>
                <span className="text-sm">{info.phone}</span>
              </motion.a>

              <motion.a
                href={info.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[var(--color-steel)] hover:text-[var(--color-copper)] transition-colors group"
                whileHover={{ x: 4 }}
              >
                <div className="p-3 card-surface group-hover:border-[var(--color-copper)]/30 transition-colors">
                  <LinkedinLogo size={18} className="text-[var(--color-copper)]" />
                </div>
                <span className="text-sm">LinkedIn Profile</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="mt-10 p-6 card-surface border-[var(--color-copper)]/30"
            >
              <p className="body-copy-sm text-center">
                <strong className="text-[var(--color-platinum)]">100% secure transactions. 80% faster reporting.</strong> That&apos;s the kind of execution I bring to the table.
              </p>
            </motion.div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="space-y-6"
            noValidate
          >
            <div>
              <label htmlFor="name" className="label-field">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
                className="input-field"
                placeholder="Your name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <motion.p
                  id="name-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-[var(--color-copper)] mt-1"
                  role="alert"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="label-field">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
                className="input-field"
                placeholder="your@email.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <motion.p
                  id="email-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-[var(--color-copper)] mt-1"
                  role="alert"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="label-field">
                Message
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
                rows={5}
                className="input-field resize-none"
                placeholder="Tell me about your project..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <motion.p
                  id="message-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-[var(--color-copper)] mt-1"
                  role="alert"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary w-full sm:w-auto group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={submitted}
            >
              {submitted ? "Message Sent!" : "Send Message"}
              <PaperPlaneRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}