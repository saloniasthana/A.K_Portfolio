import { useState } from "react";

/**
 * Renders an <img> if it loads; otherwise falls back to a labeled
 * gradient placeholder so missing photos never show a broken-image icon.
 * Drop real files into /public/images using the same filename to replace.
 */
export default function SmartImage({ src, alt, label, className = "", imgClassName = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-surface-2 to-bg-soft ${className}`}
        style={{ background: "linear-gradient(135deg, var(--color-surface-2), var(--color-bg-soft))" }}
      >
        <div className="contour-bg absolute inset-0 opacity-60" />
        <div className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-ink-muted/60">
            <path d="M3 16.5L8 10l4 4.5 3-3.5L21 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="8" cy="7" r="1.6" stroke="currentColor" strokeWidth="1.4" />
            <rect x="2.5" y="3.5" width="19" height="17" rx="2" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
          </svg>
          <span className="mono-tag text-[10px] text-ink-muted/70">{label || alt || "add image"}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`${className} ${imgClassName}`}
      loading="lazy"
    />
  );
}
