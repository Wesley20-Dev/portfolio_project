"use client"
// app/page.tsx
// Portfolio — Bi David Weslé IRIÉ
// Assembles all Luminous Noir components.

import WebGLBackground  from "@/components/WebGLBackground";
import CursorGlow       from "@/components/CursorGlow";
import Navbar           from "@/components/Navbar";
import HeroSection      from "@/components/HeroSection";
import AboutSection     from "@/components/AboutSection";
import SkillsSection    from "@/components/SkillsSection";
import ProjectsSection  from "@/components/ProjectsSection";
import ContactSection   from "@/components/ContactSection";
import Footer           from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* ── Layer 0: animated WebGL dot-grid ── */}
      <WebGLBackground />

      {/* ── Layer 0: cursor pink halo ────────── */}
      <CursorGlow />

      {/* ── Layer 1: page content ─────────────── */}
      <div className="relative z-10 min-h-screen text-white selection:bg-pink-light/20">

        <Navbar />

        <main>
          <HeroSection />

          <div className="section-divider" />
          <AboutSection />

          <div className="section-divider" />
          <SkillsSection />

          <div className="section-divider" />
          <ProjectsSection />

          <div className="section-divider" />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
