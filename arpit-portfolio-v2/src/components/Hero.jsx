import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile, stats } from "../data/content.js";
import StatCounter from "./StatCounter.jsx";

const StrataCanvas = lazy(() => import("../three/CrystalCanvas.jsx"));

function Typewriter({ words, className }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 40 : 70;
    const pause = 1400;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), pause);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse text-amber">_</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="contour-bg relative flex min-h-screen flex-col overflow-hidden pt-28">
      <div className="absolute inset-0 -z-0">
        <Suspense fallback={null}>
          <StrataCanvas />
        </Suspense>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/10 via-bg/40 to-bg" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mono-tag mb-5 text-xs text-amber"
        >
          Adm. No. {profile.admNo} — {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <div className="mt-5 h-10">
          <Typewriter words={profile.tagline} className="font-mono text-lg text-teal sm:text-xl" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          {profile.blurb}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-amber px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-amber hover:text-amber"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-2 text-ink-muted"
      >
        <span className="mono-tag text-[10px]">Scroll</span>
        <svg aria-hidden="true" width="14" height="20" viewBox="0 0 14 20" fill="none">
          <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1" />
          <circle cx="7" cy="6" r="1.6" fill="currentColor" />
        </svg>
      </motion.div>
    </section>
  );
}
