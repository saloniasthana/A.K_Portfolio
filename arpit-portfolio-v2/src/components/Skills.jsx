import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { skillGroups } from "../data/content.js";

const GROUP_ICONS = {
  "Software & Tools": (
    <path d="M14.7 6.3a1 1 0 0 0-1.4 0l-6 6a1 1 0 0 0 0 1.4l3 3a1 1 0 0 0 1.4 0l6-6a1 1 0 0 0 0-1.4l-3-3ZM5 19l2-5" />
  ),
  "Programming & Computation": <path d="M8 7 3 12l5 5M16 7l5 5-5 5M13 5l-2 14" />,
  "Laboratory & Field Testing": (
    <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" />
  ),
  "Engineering Concepts": <path d="M3 12h4l3-8 4 16 3-8h4" />,
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading title="Skills" />

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((g, gi) => (
          <motion.div
            key={g.group}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: gi * 0.08 }}
            className="card-hover rounded-2xl border border-line bg-surface/50 p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber/30 text-amber">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {GROUP_ICONS[g.group]}
                </svg>
              </span>
              <h3 className="font-display text-base font-semibold text-ink">{g.group}</h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {g.items.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  whileHover={{ y: -3 }}
                  className="mono-tag cursor-default rounded-full border border-line bg-bg-soft px-3.5 py-2 text-[11px] text-ink-muted transition-colors hover:border-amber/50 hover:text-amber"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
