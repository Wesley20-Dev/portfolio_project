"use client";
// components/HeroSection.tsx
// Hero 2-col: texte à gauche, carte photo glassmorphique à droite (style Stitch Luminous Noir)

import { useEffect, useRef, useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import Image from "next/image";


/* ── Floating badge (réutilisé dans la carte) ─── */
function FloatingBadge({
  icon, label, sub, style,
}: {
  icon: string; label: string; sub: string; style?: React.CSSProperties;
}) {
  return (
    <div
      className="absolute flex items-center gap-3 px-4 py-3 rounded-2xl z-20 animate-float"
      style={{
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        ...style,
      }}
    >
      <span className="material-symbols-outlined text-pink-light" style={{ fontSize: 18 }}>
        {icon}
      </span>
      <div>
        <p className="text-white text-[12px] font-semibold leading-tight">{label}</p>
        <p className="text-zinc-500 text-[10px] font-mono">{sub}</p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [ma_pp, setMapp] = useState<string|null>("/pro_photo1.png")
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 72, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-16 max-w-[1280px] mx-auto pt-[72px]"
    >
      {/* ── 2-col grid ─────────────────────────────────── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 xl:gap-24 items-center">

        {/* ── LEFT: texte ───────────────────────────────── */}
        <div>
          {/* Status badge */}
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-7">
              <span
                className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse-dot"
                style={{ boxShadow: "0 0 10px rgba(34,197,94,0.6)" }}
              />
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-pink-light">
                Disponible · Stage / Opportunité
              </span>
            </div>
          </RevealOnScroll>

          {/* Nom */}
          <RevealOnScroll delay={0.1}>
            <h1
              className="font-display font-black leading-[1.0] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(44px, 6.5vw, 80px)" }}
            >
              Bi David<br />
              Weslé{" "}
              <span className="gradient-text">IRIÉ</span>
            </h1>
          </RevealOnScroll>

          {/* Titre */}
          <RevealOnScroll delay={0.2}>
            <p
              className="font-display font-bold text-zinc-400 tracking-[-0.02em] mb-6"
              style={{ fontSize: "clamp(18px, 3.2vw, 30px)" }}
            >
              Développeur Full-Stack Junior
            </p>
          </RevealOnScroll>

          {/* Description */}
          <RevealOnScroll delay={0.3}>
            <p className="text-[17px] font-light text-zinc-400 leading-[1.8] max-w-[540px] mb-10">
              Formé à{" "}
              <strong className="text-white font-medium">
                WeCode (Coding Academy by Epitech)
              </strong>
              . Conçoit des architectures web et mobiles scalables, robustes et
              hautement interactives — avec une passion pour l'ingénierie logicielle soignée.
            </p>
          </RevealOnScroll>

          {/* CTAs */}
          <RevealOnScroll delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#projects")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-[14px] text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: "linear-gradient(135deg,#ff479c,#ff1493)",
                  boxShadow: "0 4px 24px rgba(255,20,147,0.28)",
                }}
              >
                Voir les projets
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  arrow_forward
                </span>
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-[14px] text-white border border-white/10 transition-all duration-200 hover:bg-white/5 hover:border-white/20"
              >
                Discutons
              </button>
            </div>
          </RevealOnScroll>
        </div>

        {/* ── RIGHT: Photo card ──────────────────────────── */}
        <RevealOnScroll delay={0.3} className="hidden lg:block">
          <div className="relative">

            {/* Glow ring animé (Stitch pattern: gradient border + blur) */}
            <div
              className="absolute -inset-[3px] rounded-[28px] opacity-60 transition-opacity duration-700 group-hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #ff1493, #ff479c, transparent, #ff1493)",
                filter: "blur(8px)",
                animation: "spin-glow 6s linear infinite",
              }}
            />
            <style>{`
              @keyframes spin-glow {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}</style>

            {/* Carte principale */}
            <div
              className="relative rounded-[26px] overflow-hidden"
              style={{
                border: "1px solid rgba(255,20,147,0.25)",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* Zone photo — placeholder élégant jusqu'à ajout de la vraie photo */}
              <div
                className="w-full aspect-[3/4] relative flex items-end"
                style={{
                  background: "linear-gradient(160deg, #130009 0%, #0a0a0a 50%, #1a0010 100%)",
                  minHeight: 400,
                }}
              >
                {/* Silhouette placeholder */}
                { ma_pp? 
                  <Image 
                    src={ma_pp} 
                    alt="Bi David Weslé IRIÉ"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                :
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Glow de fond */}
                    <div
                      className="absolute w-48 h-48 rounded-full"
                      style={{
                        background: "radial-gradient(circle, rgba(255,20,147,0.18) 0%, transparent 70%)",
                        top: "30%", left: "50%", transform: "translate(-50%,-50%)",
                      }}
                    />
                    {/* Icône avatar */}
                    <div
                      className="relative flex flex-col items-center gap-4"
                      style={{ marginBottom: 80 }}
                    >
                      <div
                        className="w-32 h-32 rounded-full flex items-center justify-center"
                        style={{
                          background: "rgba(255,20,147,0.10)",
                          border: "2px dashed rgba(255,20,147,0.25)",
                        }}
                      >
                        <span className="material-symbols-outlined text-pink-light" style={{ fontSize: 56 }}>
                          person
                        </span>
                      </div>
                      <p className="font-mono text-[9px] tracking-[0.12em] text-zinc-700">
                      </p>
                    </div>
                  </div>  
                }

                {/* Overlay dégradé bas */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-40"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }}
                />

                {/* Nom en bas de la carte */}
                <div className="relative z-10 w-full px-6 pb-6">
                  <p className="font-display font-black text-[18px] tracking-tight text-white">
                    Bi David Weslé IRIÉ
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-pink-light mt-1">
                    Full-Stack Developer · Abidjan 🇨🇮
                  </p>
                </div>
              </div>
            </div>

            {/* Badge flottant haut-gauche */}
            <FloatingBadge
              icon="school"
              label="WeCode Epitech"
              sub="Coding Academy"
              style={{ top: -16, left: -20, animationDelay: "0s" }}
            />

            {/* Badge flottant bas-droite */}
            <FloatingBadge
              icon="code"
              label="Full-Stack"
              sub="Next.js · NestJS · Laravel"
              style={{ bottom: 40, right: -24, animationDelay: "0.8s" }}
            />

            {/* Dot décoratif coin */}
            <div
              className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full"
              style={{ background: "linear-gradient(135deg,#ff479c,#ff1493)", opacity: 0.7 }}
            />
          </div>
        </RevealOnScroll>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-fade"
        style={{ opacity: 0.35 }}
      >
        <span className="font-mono text-[10px] tracking-[0.1em] text-zinc-500 uppercase">Scroll</span>
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, transparent, #ffb0ca)" }} />
      </div>
    </section>
  );
}
