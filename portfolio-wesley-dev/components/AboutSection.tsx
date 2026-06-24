"use client"
// components/AboutSection.tsx
// About section: stats cards + bio text + experience block.

import RevealOnScroll from "./RevealOnScroll";

const STATS = [
  { num: "BTS",    label: "Informatique IDA" },
  { num: "Epitech",label: "WeCode Academy" },
  { num: "4+",     label: "Projets livrés" },
  { num: "Full",   label: "Stack Developer" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-36 px-6 md:px-16 max-w-[1280px] mx-auto">
      {/* Header */}
      <RevealOnScroll>
        <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-pink-light mb-3">
          01 / À propos
        </p>
        <h2
          className="font-display font-black tracking-[-0.03em] leading-[1.1] mb-16"
          style={{ fontSize: "clamp(32px,5vw,52px)" }}
        >
          Ingénieur de l'intérieur,{" "}
          <span className="gradient-text">artisan du digital.</span>
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 md:gap-20 items-start">

        {/* Left — stats + experience */}
        <div>
          <RevealOnScroll delay={0.1}>
            <div className="grid grid-cols-2 gap-5">
              {STATS.map(({ num, label }) => (
                <div
                  key={label}
                  className="p-7 rounded-[16px] border border-white/10"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <p
                    className="font-display font-black text-3xl"
                    style={{
                      background: "linear-gradient(135deg,#ffb0ca,#ff1493)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {num}
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-zinc-500 mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Experience block */}
          <RevealOnScroll delay={0.2}>
            <div
              className="mt-7 p-7 rounded-[16px] border border-white/10 flex gap-5 items-start"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border"
                style={{
                  background: "rgba(255,20,147,0.08)",
                  borderColor: "rgba(255,20,147,0.2)",
                  color: "#ffb0ca",
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                  business_center
                </span>
              </div>
              <div>
                <p className="font-semibold text-[15px] mb-1">Stage · EISIEM SARL</p>
                <p className="font-mono text-[11px] tracking-[0.08em] text-pink-light">
                  WinDev25 · Merise
                </p>
                <p className="text-[14px] text-zinc-400 leading-[1.7] mt-2">
                  Recueil de besoins, modélisation fonctionnelle et conception
                  d'une application complexe de gestion des admissions.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right — bio */}
        <div className="space-y-5 text-[17px] font-light text-zinc-400 leading-[1.9]">
          <RevealOnScroll>
            <p>
              Titulaire d'un{" "}
              <strong className="text-white font-medium">
                BTS Informatique option IDA
              </strong>{" "}
              obtenu à l'Institut Supérieur Jean-Paul II, j'ai consolidé mes
              bases académiques par un cursus intensif chez{" "}
              <strong className="text-white font-medium">Epitech</strong>. Mon
              autonomie et ma curiosité naturelle me poussent à explorer les
              coulisses des technologies modernes.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p>
              Mon expérience inclut un stage marquant chez{" "}
              <strong className="text-white font-medium">EISIEM SARL</strong>,
              où j'ai géré le recueil de besoins, la modélisation fonctionnelle
              avec{" "}
              <span className="font-mono text-pink-light text-[15px]">MERISE</span>,
              et conçu une application de gestion des admissions sous WinDev25.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p>
              Je suis passionné par l'architecture logicielle propre, les API
              robustes, et les interfaces qui respirent, convaincu que le code
              de qualité est la forme la plus durable d'artisanat numérique.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
