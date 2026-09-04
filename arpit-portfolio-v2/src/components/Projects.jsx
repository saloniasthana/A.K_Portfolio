import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import SmartImage from "./SmartImage.jsx";
import TiltCard from "./TiltCard.jsx";
import { projects } from "../data/content.js";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading title="Projects & Research" />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <TiltCard className="group overflow-hidden rounded-2xl border border-line bg-surface/50">
              <div className="relative aspect-video overflow-hidden">
                <SmartImage
                  src={p.image}
                  alt={p.title}
                  label="add project image"
                  className="h-full w-full"
                  imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span
                  className={`mono-tag absolute right-3 top-3 rounded-full border px-3 py-1 text-[10px] backdrop-blur-md ${
                    p.status === "Ongoing"
                      ? "border-teal/50 bg-bg/60 text-teal"
                      : "border-amber/50 bg-bg/60 text-amber"
                  }`}
                >
                  {p.status}
                </span>
              </div>

              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="mono-tag rounded-full border border-line px-2.5 py-1 text-[9px] text-ink-muted">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.summary}</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
