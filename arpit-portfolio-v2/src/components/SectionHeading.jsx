import { motion } from "framer-motion";

export default function SectionHeading({ title }) {
  return (
    <div className="mb-14 border-b border-line pb-5">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}
