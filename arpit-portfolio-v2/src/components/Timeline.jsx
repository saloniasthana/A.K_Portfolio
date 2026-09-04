import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading.jsx";
import SmartImage from "./SmartImage.jsx";
import { education, experience } from "../data/content.js";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [...experience, ...education];

export default function Timeline() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.6,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading title="Journey" />

      <div className="relative pl-8 sm:pl-12">
        <div className="absolute left-2 top-0 h-full w-px bg-line sm:left-3" />
        <div
          ref={lineRef}
          className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-amber via-rust to-teal sm:left-3"
        />

        <div className="flex flex-col gap-14">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-8 top-1.5 h-3 w-3 rounded-full border-2 border-amber bg-bg sm:-left-12" />

              <div className="mb-2 flex flex-wrap items-center gap-3">
                <span
                  className={`mono-tag rounded-full border px-3 py-1 text-[10px] ${
                    item.type === "experience"
                      ? "border-teal/40 text-teal"
                      : "border-amber/40 text-amber"
                  }`}
                >
                  {item.type === "experience" ? "Experience" : "Education"}
                </span>
                <span className="mono-tag text-[11px] text-ink-muted">{item.date}</span>
              </div>

              <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{item.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">
                {item.org} — {item.place} {item.meta ? `· ${item.meta}` : ""}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">{item.detail}</p>

              {item.gallery && (
                <div className="mt-5 grid grid-cols-3 gap-3 sm:max-w-lg">
                  {item.gallery.map((src, gi) => (
                    <SmartImage
                      key={src}
                      src={src}
                      alt={`${item.title} photo ${gi + 1}`}
                      label="add photo"
                      className="aspect-square overflow-hidden rounded-lg border border-line"
                      imgClassName="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
