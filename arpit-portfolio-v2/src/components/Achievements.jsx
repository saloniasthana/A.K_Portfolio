import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { achievements } from "../data/content.js";

const ICONS = {
  trophy: (
    <path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4ZM7 5H4a3 3 0 0 0 3 4M17 5h3a3 3 0 0 1-3 4" />
  ),
  medal: <path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM9 14l-2.5 7L12 18l5.5 3L15 14" />,
  star: <path d="M12 3l2.6 5.8 6.4.6-4.8 4.3 1.4 6.3L12 16.9 6.4 20l1.4-6.3L3 9.4l6.4-.6L12 3Z" />,
  bulb: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6V16h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3Z" />,
};

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading title="Achievements" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="card-hover flex flex-col items-start gap-4 rounded-2xl border border-line bg-surface/50 p-6"
          >
            <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full border border-amber/40 bg-amber/10 text-amber">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {ICONS[a.icon]}
              </svg>
            </span>
            <div>
              <h3 className="font-display text-base font-semibold leading-snug text-ink">{a.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{a.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
