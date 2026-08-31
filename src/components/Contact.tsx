"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { EnvelopeSimple, Phone, MapPin, PaperPlaneRight } from "@phosphor-icons/react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-32 md:py-40 bg-[#0f0f0f]">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-[#c8ff00]" />
          <span className="text-xs tracking-[0.3em] uppercase text-white/40">Contact</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-3xl md:text-5xl font-light tracking-tight text-white mb-8"
            >
              Let&apos;s work{" "}
              <span className="text-[#c8ff00]">together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="text-base text-white/50 leading-relaxed mb-12"
            >
              Have a project in mind or just want to chat? Feel free to reach out.
              I&apos;m always open to new opportunities and interesting conversations.
            </motion.p>

            <div className="space-y-6">
              <motion.a
                href={`mailto:${info.email}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-4 text-white/60 hover:text-[#c8ff00] transition-colors group"
              >
                <div className="p-3 bg-[#141414] border border-[#222] group-hover:border-[#c8ff00]/30 transition-colors">
                  <EnvelopeSimple size={18} />
                </div>
                <span className="text-sm">{info.email}</span>
              </motion.a>

              <motion.a
                href={`tel:${info.phone}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-4 text-white/60 hover:text-[#c8ff00] transition-colors group"
              >
                <div className="p-3 bg-[#141414] border border-[#222] group-hover:border-[#c8ff00]/30 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-sm">{info.phone}</span>
              </motion.a>

              <motion.a
                href={info.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-4 text-white/60 hover:text-[#c8ff00] transition-colors group"
              >
                <div className="p-3 bg-[#141414] border border-[#222] group-hover:border-[#c8ff00]/30 transition-colors">
                  <MapPin size={18} />
                </div>
                <span className="text-sm">LinkedIn Profile</span>
              </motion.a>
            </div>
          </div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label className="text-xs text-white/40 tracking-wider uppercase">Name</label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
                className="w-full px-4 py-4 bg-[#141414] border border-[#222] text-white text-sm focus:outline-none focus:border-[#c8ff00]/50 transition-colors placeholder:text-white/20"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-white/40 tracking-wider uppercase">Email</label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
                className="w-full px-4 py-4 bg-[#141414] border border-[#222] text-white text-sm focus:outline-none focus:border-[#c8ff00]/50 transition-colors placeholder:text-white/20"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-white/40 tracking-wider uppercase">Message</label>
              <textarea
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-4 bg-[#141414] border border-[#222] text-white text-sm focus:outline-none focus:border-[#c8ff00]/50 transition-colors resize-none placeholder:text-white/20"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              className="group flex items-center gap-3 px-8 py-4 bg-[#c8ff00] text-[#0a0a0a] text-sm font-medium tracking-wide hover:bg-[#b8f000] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
