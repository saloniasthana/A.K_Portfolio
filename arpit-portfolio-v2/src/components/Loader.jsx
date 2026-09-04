import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-5 bg-bg"
    >
      <motion.div
        initial={{ scaleY: 0.2 }}
        animate={{ scaleY: [0.2, 1, 0.2] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-12 items-end gap-1.5"
        style={{ transformOrigin: "bottom" }}
      >
        {["#3a2b1f", "#7a4b23", "#c85a34", "#d78a3f", "#52b8ab"].map((c, i) => (
          <motion.span
            key={c}
            animate={{ height: ["30%", "100%", "30%"] }}
            transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
            className="w-2.5 rounded-sm"
            style={{ background: c }}
          />
        ))}
      </motion.div>
      <p className="mono-tag text-xs text-ink-muted">Loading Strata…</p>
    </motion.div>
  );
}
