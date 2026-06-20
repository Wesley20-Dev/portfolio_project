"use client"
// components/ProjectCard.tsx
// Glassmorphic project card used inside ProjectsSection.
// Accepts a "reverse" prop to alternate left/right layout.

import RevealOnScroll from "./RevealOnScroll";

export interface Project {
  title:       string;
  description: string;
  tags:        string[];
  primaryTag:  string;
  secondaryTag:string;
  codeLines:   { hl?: boolean; text: string }[];
  href?:       string;
}

interface Props extends Project {
  reverse?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  primaryTag,
  secondaryTag,
  codeLines,
  href = "#",
  reverse = false,
}: Props) {
  return (
    <RevealOnScroll>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 rounded-[24px] overflow-hidden border border-white/10 transition-all duration-500 group`}
        style={{ background: "rgba(255,255,255,0.025)", backdropFilter: "blur(12px)" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,20,147,0.30)";
          (e.currentTarget as HTMLElement).style.boxShadow   = "0 0 60px rgba(255,20,147,0.08)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.10)";
          (e.currentTarget as HTMLElement).style.boxShadow   = "none";
        }}
      >
        {/* Code visual — order changes for reverse */}
        <div
          className={`relative overflow-hidden min-h-[260px] ${
            reverse ? "md:order-last" : "md:order-first"
          }`}
          style={{ background: "#0a0a0a" }}
        >
          <div
            className="font-mono text-[11px] leading-[1.8] p-8 h-full w-full overflow-hidden text-pink-light/50 transition-transform duration-700 group-hover:scale-[1.03]"
          >
            {codeLines.map((line, i) => (
              <div key={i}>
                <span style={{ color: "rgba(255,255,255,0.12)", userSelect: "none", marginRight: 16 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {line.hl ? (
                  <span style={{ color: "#ffb0ca" }}>{line.text}</span>
                ) : (
                  <span>{line.text}</span>
                )}
              </div>
            ))}
          </div>
          {/* fade overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(135deg, transparent 55%, rgba(0,0,0,0.55))" }}
          />
        </div>

        {/* Content */}
        <div
          className={`p-10 md:p-12 flex flex-col justify-center gap-5 ${
            reverse ? "md:order-first" : "md:order-last"
          }`}
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span
              className="font-mono text-[10px] tracking-[0.10em] uppercase px-3 py-1 rounded-full"
              style={{ background: "rgba(255,20,147,0.12)", border: "1px solid rgba(255,20,147,0.20)", color: "#ffb0ca" }}
            >
              {primaryTag}
            </span>
            <span
              className="font-mono text-[10px] tracking-[0.10em] uppercase px-3 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.50)" }}
            >
              {secondaryTag}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display font-black text-[22px] leading-[1.2] tracking-[-0.02em]">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[15px] text-zinc-400 leading-[1.75] font-light">
            {description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] px-2.5 py-1 rounded-md text-zinc-500"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <a
            href={href}
            className="inline-flex items-center gap-2 text-pink-light text-[13px] font-semibold w-fit transition-all duration-200 hover:gap-3"
          >
            Explorer le projet
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </RevealOnScroll>
  );
}
