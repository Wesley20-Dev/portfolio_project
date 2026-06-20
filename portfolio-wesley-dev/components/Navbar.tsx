"use client";
// components/Navbar.tsx
// Glassmorphic floating nav with active-section tracking on scroll.

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#home",     label: "Home" },
  { href: "#about",    label: "À propos" },
  { href: "#skills",   label: "Stack" },
  { href: "#projects", label: "Projets" },
  { href: "#contact",  label: "Contact" },
];

export default function Navbar() {
  const [active, setActive]       = useState("home");
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  /* ── scroll: header opacity + active section ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.4 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  /* ── smooth scroll ──────────────────────────── */
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) window.scrollTo({ top: (target as HTMLElement).offsetTop - 72, behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(0,0,0,0.92)" : "rgba(0,0,0,0.70)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
        height: 72,
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex items-center justify-between h-full">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="flex items-center gap-2 font-display font-black text-lg tracking-tight text-pink-light"
          style={{ textShadow: "0 0 20px rgba(255,20,147,0.35)" }}
        >
          <span className="material-symbols-outlined text-pink-light" style={{ fontSize: 20 }}>terminal</span>
          WESLEY-DEV
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(({ href, label }) => {
            const isActive = active === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className={`text-[13px] font-medium transition-colors duration-200 relative pb-1 ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {label}
                <span
                  className="absolute bottom-0 left-0 right-0 h-px bg-pink-light transition-transform duration-300 origin-left"
                  style={{ transform: isActive ? "scaleX(1)" : "scaleX(0)" }}
                />
              </a>
            );
          })}
        </nav>

        {/* CTA button */}
        <a
          href="#contact"
          onClick={(e) => handleClick(e, "#contact")}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-bold text-white transition-all duration-200 hover:opacity-90 hover:shadow-[0_8px_32px_rgba(255,20,147,0.3)]"
          style={{ background: "linear-gradient(135deg,#ff479c,#ff1493)" }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>mail</span>
          Prendre contact
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 bg-white rounded-sm transition-all duration-300"
              style={{
                transform:
                  menuOpen && i === 0 ? "rotate(45deg) translateY(7px)"
                  : menuOpen && i === 2 ? "rotate(-45deg) translateY(-7px)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-white/10"
          style={{ background: "rgba(0,0,0,0.96)", backdropFilter: "blur(24px)" }}
        >
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className="block px-6 py-4 text-sm font-medium text-zinc-300 hover:text-white border-b border-white/5 transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="px-6 py-4">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="block text-center py-3 rounded-full text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg,#ff479c,#ff1493)" }}
            >
              Prendre contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
