import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import SmartImage from "./SmartImage.jsx";
import profilePic from "../assets/profilepic.jpeg";
import { positions, profile } from "../data/content.js";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading title="About" />

      <div className="grid gap-12 md:grid-cols-[320px_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line"
        >
          <SmartImage
            src={profilePic}
            alt="Arpit Kumar Yadav"
            label="Add: images/headshot.jpg"
            className="h-full w-full"
            imgClassName="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent p-4">
            <p className="mono-tag text-[10px] text-ink-muted">{profile.location}</p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-lg leading-relaxed text-ink-muted"
          >
            I'm a Master's student in Geotechnical Engineering at IIT (ISM) Dhanbad, currently researching
            bio-cementation (MICP) for sustainable ground improvement of overburden-derived sand. Earlier, as a
            research intern at IIT Mandi, I worked on landslide hazard assessment in the Kamand–Mandi region —
            combining field geotechnics with GIS-based terrain analysis. I care about applying rigorous soil
            mechanics to real, sustainability-driven problems: ground improvement, slope stability, and
            low-water-demand construction materials.
          </motion.p>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mono-tag mb-5 text-xs text-amber"
            >
              Positions of Responsibility
            </motion.h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {positions.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card-hover rounded-xl border border-line bg-surface/50 p-5"
                >
                  <p className="font-display text-sm font-semibold text-ink">{p.title}</p>
                  <p className="mono-tag mt-1 text-[10px] text-teal">{p.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
