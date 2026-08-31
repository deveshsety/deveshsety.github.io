"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { GithubLogo, ArrowUpRight } from "@phosphor-icons/react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics: string[];
}

export default function Projects({ username }: { username: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) return;
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data.filter((r: Repo) => !r.name.startsWith(".")));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [username]);

  return (
    <section id="projects" className="relative py-32 md:py-40 bg-[#0f0f0f]">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-[#c8ff00]" />
          <span className="text-xs tracking-[0.3em] uppercase text-white/40">Projects</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-3xl md:text-5xl font-light tracking-tight text-white mb-16"
        >
          Featured Work
        </motion.h2>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-[280px] bg-[#141414] border border-[#222] animate-pulse"
              />
            ))}
          </div>
        ) : repos.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-white/40 text-lg"
          >
            No public repositories found. Add your GitHub username to display projects.
          </motion.p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.homepage || repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="group relative p-8 bg-[#141414] border border-[#222] hover:border-[#c8ff00]/30 transition-all duration-500 flex flex-col"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <GithubLogo
                    size={24}
                    className="text-white/20 group-hover:text-[#c8ff00] transition-colors"
                  />
                  <ArrowUpRight
                    size={16}
                    className="text-white/20 group-hover:text-[#c8ff00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-medium text-white mb-3 group-hover:text-[#c8ff00] transition-colors">
                  {repo.name}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed mb-6 flex-1 line-clamp-3">
                  {repo.description || "No description provided."}
                </p>

                {/* Footer */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#222]">
                  {repo.language && (
                    <span className="text-xs text-white/30 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#c8ff00]" />
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="text-xs text-white/30">
                      {repo.stargazers_count} stars
                    </span>
                  )}
                </div>

                {/* Topics */}
                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="text-[10px] px-2 py-1 bg-[#c8ff00]/10 text-[#c8ff00]/70 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
