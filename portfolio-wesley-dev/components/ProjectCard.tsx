"use client"
// components/ProjectCard.tsx
// Glassmorphic project card used inside ProjectsSection.
// Accepts a "reverse" prop to alternate left/right layout.

import RevealOnScroll from "./RevealOnScroll";
import Image from "next/image";

export interface Project {
  title:        string;
  description:  string;
  tags:         string[];
  primaryTag:   string;
  secondaryTag: string;
  codeLines:    { hl?: boolean; text: string }[];
  /**
   * Si défini, Thum.io génère automatiquement une capture d'écran de cette URL.
   * Priorité : image > screenshotUrl > codeLines
   */
  screenshotUrl?: string;
  image?:       { src: string; alt: string };
  href?:        string;
}

interface Props extends Project {
  reverse?: boolean;
}

/** Construit l'URL Thum.io pour capturer automatiquement un site web */
function buildThumioUrl(targetUrl: string): string {
  // Thum.io — API publique de screenshot (aucune clé requise pour l'usage basique)
  // Format : https://image.thum.io/get/width/1280/crop/720/{url}
  return `https://image.thum.io/get/width/1280/crop/720/${targetUrl}`;
}

export default function ProjectCard({
  title,
  description,
  tags,
  primaryTag,
  secondaryTag,
  codeLines,
  screenshotUrl,
  image,
  href = "#",
  reverse = false,
}: Props) {
  // Résolution de la source visuelle selon la priorité : image > screenshotUrl > codeLines
  const resolvedImage: { src: string; alt: string } | null =
    image
      ? image
      : screenshotUrl
      ? { src: buildThumioUrl(screenshotUrl), alt: `Capture du projet ${title}` }
      : null;
  return (
    <RevealOnScroll>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 rounded-[24px] overflow-hidden border border-white/10 transition-all duration-500 group`}
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
          backdropFilter: "blur(12px)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,20,147,0.30)";
          (e.currentTarget as HTMLElement).style.boxShadow   = "0 0 60px rgba(255,20,147,0.08)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
          (e.currentTarget as HTMLElement).style.boxShadow   = "none";
        }}
      >
        {/* Visual — image when available, code fallback otherwise */}
        <div
          className={`relative overflow-hidden min-h-[260px] ${
            reverse ? "md:order-last" : "md:order-first"
          }`}
          style={{ background: "var(--code-bg)" }}
        >
          {resolvedImage ? (
            /* ── Visuel : image locale OU screenshot Thum.io ── */
            <Image
              src={resolvedImage.src}
              alt={resolvedImage.alt}
              fill
              unoptimized={!!screenshotUrl && !image} // Thum.io renvoie déjà une image optimisée
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            /* ── Fallback : bloc de code ── */
            <div
              className="font-mono text-[11px] leading-[1.8] p-8 h-full w-full overflow-hidden transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ color: "var(--code-text)" }}
            >
              {codeLines.map((line, i) => (
                <div key={i}>
                  <span style={{ color: "var(--code-line)", userSelect: "none", marginRight: 16 }}>
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
          )}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "var(--code-fade)" }}
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
              style={{ 
                background: "var(--tag-bg)", 
                border: "1px solid var(--tag-border)", 
                color: "var(--tag-text)" 
              }}
            >
              {primaryTag}
            </span>
            <span
              className="font-mono text-[10px] tracking-[0.10em] uppercase px-3 py-1 rounded-full"
              style={{
                background: "var(--surface-strong)",
                border: "1px solid var(--border-soft)",
                color: "var(--subtle)",
              }}
            >
              {secondaryTag}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display font-black text-[22px] leading-[1.2] tracking-[-0.02em]">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[15px] leading-[1.75] font-light" style={{ color: "var(--muted)" }}>
            {description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] px-2.5 py-1 rounded-md"
                style={{
                  background: "var(--surface-strong)",
                  border: "1px solid var(--border-soft)",
                  color: "var(--subtle)",
                }}
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
