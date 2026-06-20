"use client"
// components/Footer.tsx

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-16 py-12 flex flex-col md:flex-row justify-between items-center gap-5 relative z-10"
      style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
    >
      <div className="text-center md:text-left">
        <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-pink-light">
          DAVID.DEV
        </p>
        <p className="text-[13px] text-zinc-500 mt-1">
          © {new Date().getFullYear()} Bi David Weslé IRIÉ · Développeur Full-Stack Junior
        </p>
      </div>

      <div className="flex gap-8">
        {[
          { label: "GitHub",   href: "https://github.com" },
          { label: "LinkedIn", href: "https://linkedin.com" },
          { label: "Email",    href: "mailto:david.irie@email.com" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-[13px] text-zinc-500 hover:text-white transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
