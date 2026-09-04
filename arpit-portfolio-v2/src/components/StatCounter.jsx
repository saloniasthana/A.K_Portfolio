import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export default function StatCounter({ value, prefix = "", suffix = "", decimals = 0, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 22, stiffness: 90 });
  const displayRef = useRef(null);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
      }
    });
  }, [spring, prefix, suffix, decimals]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.55 }}
      className="rounded-xl border border-line bg-surface/60 p-6 text-center card-hover"
    >
      <div ref={displayRef} className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
        {prefix}0{suffix}
      </div>
      <div className="mono-tag mt-2 text-[11px] text-ink-muted">{label}</div>
    </motion.div>
  );
}
