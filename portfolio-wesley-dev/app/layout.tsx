// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bi David Weslé IRIÉ | Développeur Full-Stack Junior",
  description:
    "Portfolio de Bi David Weslé IRIÉ — Développeur Full-Stack Junior formé à WeCode (Coding Academy by Epitech). Architectures web et mobiles scalables.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Google Fonts — Luminous Noir typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Material Symbols (icons used in components) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#000000" }}>{children}</body>
    </html>
  );
}
