import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { profile } from "../data/content.js";

const FIELDS = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired yet — falls back to opening the user's mail client.
    // Swap this for an EmailJS / Formspree call once you have API keys.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading title="Get in Touch" />

      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <p className="max-w-md text-lg leading-relaxed text-ink-muted">
            Open to research collaborations, internships, and geotechnical engineering opportunities.
            Reach out directly or drop a message.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${profile.email}`}
              aria-label={`Email Arpit at ${profile.email}`}
              className="group flex items-center gap-3 text-ink transition-colors hover:text-amber"
            >
              <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full border border-line group-hover:border-amber/50">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 6h18v12H3zM3 6l9 7 9-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="mono-tag text-xs">{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone}`}
              aria-label={`Call Arpit at ${profile.phone}`}
              className="group flex items-center gap-3 text-ink transition-colors hover:text-amber"
            >
              <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full border border-line group-hover:border-amber/50">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 3a2 2 0 0 1-.5 2L8 10a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2-.5c1 .3 2 .5 3 .6a2 2 0 0 1 1.7 2Z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="mono-tag text-xs">{profile.phone}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Arpit's LinkedIn profile (opens in a new tab)"
              className="group flex items-center gap-3 text-ink transition-colors hover:text-amber"
            >
              <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full border border-line group-hover:border-amber/50">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z"/></svg>
              </span>
              <span className="mono-tag text-xs">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-line bg-surface/50 p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {FIELDS.map((f) => (
              <div key={f.name} className="flex flex-col gap-2">
                <label htmlFor={`contact-${f.name}`} className="mono-tag text-[10px] text-ink-muted">
                  {f.label}
                </label>
                <input
                  id={`contact-${f.name}`}
                  name={f.name}
                  required
                  type={f.type}
                  value={form[f.name]}
                  onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                  className="rounded-lg border border-line bg-bg-soft px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-amber"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-message" className="mono-tag text-[10px] text-ink-muted">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="resize-none rounded-lg border border-line bg-bg-soft px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-amber"
            />
          </div>
          <button
            type="submit"
            aria-live="polite"
            className="mt-2 self-start rounded-full bg-amber px-7 py-3 text-sm font-medium text-bg transition-transform hover:scale-105"
          >
            {sent ? "Opening mail client…" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
