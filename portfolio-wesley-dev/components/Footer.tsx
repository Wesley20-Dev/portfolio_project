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
          WESLEY.DEV
        </p>
        <p className="text-[13px] text-zinc-500 mt-1">
          © {new Date().getFullYear()} Bi David Weslé IRIÉ · Développeur Full-Stack Junior
        </p>
      </div>

      <div className="flex gap-8">
        {[
          { label: "GitHub",   href: "https://github.com/Wesley20-Dev" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/david-wesley-irié-bi-363663298" },
          { label: "Email",    href: "mailto:wesley.irie@epitech.com" },
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
