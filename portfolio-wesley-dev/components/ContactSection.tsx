"use client";
// components/ContactSection.tsx
// Contact section: info + glassmorphic form.

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

const INFO = [
  { icon: "mail",        label: "david.irie@email.com",       href: "mailto:david.irie@email.com" },
  { icon: "code",        label: "github.com/david-irie",      href: "https://github.com" },
  { icon: "work",        label: "linkedin.com/in/david-irie", href: "https://linkedin.com" },
  { icon: "location_on", label: "Abidjan, Côte d'Ivoire · Remote OK", href: undefined },
];

export default function ContactSection() {
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <section id="contact" className="py-36 px-6 md:px-16 max-w-[1280px] mx-auto">
      <div
        className="relative grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 md:gap-20 items-start"
      >
        {/* Decorative glow */}
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 w-72 h-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,20,147,0.12) 0%, transparent 70%)" }}
        />

        {/* Info column */}
        <div>
          <RevealOnScroll>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-pink-light mb-4">
              04 / Connection
            </p>
            <h2
              className="font-display font-black tracking-[-0.03em] leading-[1.15] mb-6"
              style={{ fontSize: "clamp(28px,4vw,44px)" }}
            >
              Discutons de{" "}
              <span className="gradient-text">votre projet.</span>
            </h2>
            <p className="text-[16px] font-light text-zinc-400 leading-[1.8] mb-10">
              Ouvert aux opportunités de stage, aux collaborations techniques,
              et aux projets ambitieux. N'hésitez pas à me contacter.
            </p>
          </RevealOnScroll>

          <div className="flex flex-col gap-4">
            {INFO.map(({ icon, label, href }, i) => {
              const Tag = href ? "a" : "div";
              return (
                <RevealOnScroll key={label} delay={(i + 1) * 0.1}>
                  <Tag
                    {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
                    className="flex items-center gap-4 text-zinc-400 text-[14px] transition-colors duration-200 hover:text-white"
                    style={{ textDecoration: "none" }}
                  >
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                      style={{
                        background: "rgba(255,20,147,0.08)",
                        borderColor: "rgba(255,20,147,0.15)",
                        color: "#ffb0ca",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                        {icon}
                      </span>
                    </span>
                    {label}
                  </Tag>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        {/* Form column */}
        <RevealOnScroll delay={0.2}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {[
              { id: "name",    label: "Nom Complet",   type: "text",  placeholder: "John Doe" },
              { id: "email",   label: "Adresse Email",  type: "email", placeholder: "john@example.com" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id} className="flex flex-col gap-2">
                <label
                  htmlFor={id}
                  className="font-mono text-[10px] tracking-[0.12em] uppercase"
                  style={{ color: "rgba(255,255,255,0.40)" }}
                >
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  required
                  className="w-full rounded-[14px] px-5 py-4 text-[15px] text-white outline-none transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#ffb0ca";
                    e.currentTarget.style.boxShadow   = "0 0 0 3px rgba(255,20,147,0.08)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                    e.currentTarget.style.boxShadow   = "none";
                  }}
                />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-mono text-[10px] tracking-[0.12em] uppercase"
                style={{ color: "rgba(255,255,255,0.40)" }}
              >
                Votre Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Parlez-moi de vos besoins ou de votre offre de stage..."
                required
                className="w-full rounded-[14px] px-5 py-4 text-[15px] text-white outline-none transition-all duration-300 resize-none"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#ffb0ca";
                  e.currentTarget.style.boxShadow   = "0 0 0 3px rgba(255,20,147,0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                  e.currentTarget.style.boxShadow   = "none";
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 rounded-[14px] font-mono text-[12px] tracking-[0.15em] uppercase font-bold text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-70"
              style={{
                background: sent
                  ? "linear-gradient(135deg,#22c55e,#16a34a)"
                  : "linear-gradient(135deg,#ff479c,#ff1493)",
                boxShadow: "0 4px 24px rgba(255,20,147,0.25)",
              }}
            >
              {loading ? "Envoi en cours…" : sent ? "✓ Message envoyé !" : "Envoyer le message"}
            </button>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
