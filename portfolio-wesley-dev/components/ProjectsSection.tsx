"use client"
// components/ProjectsSection.tsx
// Lists all projects using the ProjectCard component.

import { useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";
import RevealOnScroll from "./RevealOnScroll";

// ─── Configuration des projets ────────────────────────────────────────────────
// Pour activer la capture Thum.io sur un projet, ajoutez le champ :
//   screenshotUrl: "https://url-du-projet.com"
// Laissez ce champ absent pour afficher le bloc de code à la place.
// ──────────────────────────────────────────────────────────────────────────────

const PROJECTS: (Project & { reverse?: boolean })[] = [
  {
    // ✅ Image locale — screenshot Thum.io désactivé
    title: "Application de gestion de films",
    description: "Plateforme de streaming et consultation intégrant l'API TMDB, authentification Google OAuth et dashboard admin complet pour la gestion du catalogue.",
    tags: ["Next.js", "NestJS", "Tailwind CSS", "OAuth"],
    primaryTag: "Streaming",
    secondaryTag: "Web App",
    codeLines: [
      { hl: true, text: "import { tmdb } from '@/lib/api'" },
      { hl: true, text: "import { OAuth } from 'next-auth'" },
      { text: "" },
      { hl: true, text: "export async function getMovies(" },
      { text: "  query: string," },
      { text: "  page: number = 1" },
      { text: ") {" },
      { text: "  const data = await tmdb.search(query)" },
      { text: "  return data.results" },
      { text: "}" },
      { text: "" },
      { hl: true, text: "// Dashboard Admin" },
      { text: "const stats = await getStreamStats()" },
    ],
    screenshotUrl: "https://my-rotten-tomatoes-five.vercel.app/",
    href: "https://my-rotten-tomatoes-five.vercel.app/",
    reverse: false,
  },
  {
    // 🖥️  Pas de screenshot — le bloc de code reste affiché (APK, pas de web URL)
    title: "Application mobile de gestion de workspace Trello",
    description: "Application de productivité mobile connectée nativement à l'API officielle Trello, gérant l'état complexe et la navigation multi-écrans.",
    tags: ["React Native", "Trello API", "OAuth", "State Management"],
    primaryTag: "Mobile",
    secondaryTag: "Productivité",
    codeLines: [
      { hl: true, text: "import Trello from 'trello-client'" },
      { text: "" },
      { hl: true, text: "const board = await Trello" },
      { text: "  .getBoard(boardId)" },
      { text: "" },
      { hl: true, text: "// Native Mobile Sync" },
      { text: "useEffect(() => {" },
      { text: "  syncCards(board.cards)" },
      { text: "}, [board])" },
      { text: "" },
      { hl: true, text: "// State Management" },
      { text: "dispatch(updateCards(cards))" },
    ],
    // screenshotUrl absent → affiche le codeLines
    href: "https://expo.dev/artifacts/eas/bGbn2At4ZJ4ox7PuF2aE1j.apk",
    reverse: true,
  },
  {
    // 📸 Screenshot Thum.io activé — remplace le codeLines automatiquement
    title: "Réseau Social & Capture Automatisée",
    description: "Plateforme communautaire complète avec gestion des commentaires et un service automatisé de captures d'écran des posts via job queue.",
    tags: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS"],
    primaryTag: "Social",
    secondaryTag: "Full-Stack",
    codeLines: [
      { hl: true, text: "// Réseau Social Full-Stack" },
      { text: "Route::resource('posts'," },
      { text: "  PostController::class)" },
      { text: "" },
      { hl: true, text: "// Screenshot Service" },
      { text: "class ScreenshotJob extends Job {" },
      { text: "  handle() {" },
      { text: "    puppeteer.capture(this.url)" },
      { text: "  }" },
      { text: "}" },
      { text: "" },
      { hl: true, text: "// Commentaires" },
      { text: "$post->comments()->create($data)" },
    ],
    href: "https://github.com/Wesley20-Dev",
    reverse: false,
  },
  {
    // 📸 Screenshot Thum.io activé — affiche une preview live du site
    title: "Application de Gestion de Notes",
    description: "Application de gestion de notes personnelles avec création, modification, suppression et consultation de notes, connectée à une API REST pour la persistance des données.",
    tags: ["Vue.js", "API REST", "JavaScript"],
    primaryTag: "Notes App",
    secondaryTag: "API REST",
    codeLines: [
      { hl: true, text: "// Gestion de notes — Vue.js" },
      { text: "const notes = ref([])" },
      { text: "" },
      { hl: true, text: "async function fetchNotes() {" },
      { text: "  const res = await api.get('/notes')" },
      { text: "  notes.value = res.data" },
      { text: "}" },
      { text: "" },
      { hl: true, text: "// CRUD operations" },
      { text: "await api.post('/notes', newNote)" },
      { text: "await api.put('/notes/:id', edits)" },
      { text: "await api.delete('/notes/:id')" },
    ],
    screenshotUrl: "https://post-it-wesley-dev.vercel.app/", // capture live Thum.io
    href: "https://post-it-wesley-dev.vercel.app/",
    reverse: false,
  },
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToProject = (index: number) => {
    setActiveIndex((index + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <section id="projects" className="py-36 px-6 md:px-16 max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-14">
        <div>
          <RevealOnScroll>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-pink-light mb-3">
              03 / Selected Works
            </p>
            <h2
              className="font-display font-black tracking-[-0.03em] leading-[1.1]"
              style={{ fontSize: "clamp(32px,5vw,52px)" }}
            >
              Projets Concrets.
            </h2>
          </RevealOnScroll>
        </div>
        <RevealOnScroll delay={0.2}>
          <div className="flex flex-col items-start md:items-end gap-5">
            <p className="text-[15px] leading-[1.7] max-w-xs md:text-right" style={{ color: "var(--muted)" }}>
              Chaque projet représente un défi unique résolu par une architecture
              technique réfléchie et du code propre.
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => goToProject(activeIndex - 1)}
                aria-label="Projet précédent"
                className="grid h-11 w-11 place-items-center rounded-full transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                  arrow_back
                </span>
              </button>
              <button
                type="button"
                onClick={() => goToProject(activeIndex + 1)}
                aria-label="Projet suivant"
                className="grid h-11 w-11 place-items-center rounded-full transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: "linear-gradient(135deg,#ff479c,#ff1493)",
                  boxShadow: "0 4px 24px rgba(255,20,147,0.25)",
                  color: "#fff",
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {PROJECTS.map((project) => (
            <div key={project.title} className="min-w-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 flex justify-center gap-2">
        {PROJECTS.map((project, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={project.title}
              type="button"
              onClick={() => goToProject(index)}
              aria-label={`Afficher le projet ${index + 1}`}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: isActive ? 28 : 10,
                background: isActive ? "#ff1493" : "var(--border)",
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
