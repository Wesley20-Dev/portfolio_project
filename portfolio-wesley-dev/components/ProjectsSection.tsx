"use client"
// components/ProjectsSection.tsx
// Lists all projects using the ProjectCard component.

import ProjectCard, { Project } from "./ProjectCard";
import RevealOnScroll from "./RevealOnScroll";

const PROJECTS: (Project & { reverse?: boolean })[] = [
  {
    title:       "Application de gestion de films",
    description: "Plateforme de streaming et consultation intégrant l'API TMDB, authentification Google OAuth et dashboard admin complet pour la gestion du catalogue.",
    tags:        ["Next.js", "NestJS", "Tailwind CSS", "OAuth"],
    primaryTag:  "Streaming",
    secondaryTag:"Web App",
    codeLines: [
      { hl: true,  text: "import { tmdb } from '@/lib/api'" },
      { hl: true,  text: "import { OAuth } from 'next-auth'" },
      { text: "" },
      { hl: true,  text: "export async function getMovies(" },
      { text: "  query: string," },
      { text: "  page: number = 1" },
      { text: ") {" },
      { text: "  const data = await tmdb.search(query)" },
      { text: "  return data.results" },
      { text: "}" },
      { text: "" },
      { hl: true,  text: "// Dashboard Admin" },
      { text: "const stats = await getStreamStats()" },
    ],
    href: "https://my-rotten-tomatoes-five.vercel.app/",
    reverse: false,
  },
  {
    title:       "Application mobile de gestion de worksape Trello",
    description: "Application de productivité mobile connectée nativement à l'API officielle Trello, gérant l'état complexe et la navigation multi-écrans.",
    tags:        ["React Native", "Trello API", "OAuth", "State Management"],
    primaryTag:  "Mobile",
    secondaryTag:"Productivité",
    codeLines: [
      { hl: true,  text: "import Trello from 'trello-client'" },
      { text: "" },
      { hl: true,  text: "const board = await Trello" },
      { text: "  .getBoard(boardId)" },
      { text: "" },
      { hl: true,  text: "// Native Mobile Sync" },
      { text: "useEffect(() => {" },
      { text: "  syncCards(board.cards)" },
      { text: "}, [board])" },
      { text: "" },
      { hl: true,  text: "// State Management" },
      { text: "dispatch(updateCards(cards))" },
    ],
    href: "https://expo.dev/artifacts/eas/bGbn2At4ZJ4ox7PuF2aE1j.apk",
    reverse: true,
  },
  {
    title:       "Réseau Social & Capture Automatisée",
    description: "Plateforme communautaire complète avec gestion des commentaires et un service automatisé de captures d'écran des posts via job queue.",
    tags:        ["Laravel", "Vue.js", "MySQL", "Tailwind CSS"],
    primaryTag:  "Social",
    secondaryTag:"Full-Stack",
    codeLines: [
      { hl: true,  text: "// Réseau Social Full-Stack" },
      { text: "Route::resource('posts'," },
      { text: "  PostController::class)" },
      { text: "" },
      { hl: true,  text: "// Screenshot Service" },
      { text: "class ScreenshotJob extends Job {" },
      { text: "  handle() {" },
      { text: "    puppeteer.capture(this.url)" },
      { text: "  }" },
      { text: "}" },
      { text: "" },
      { hl: true,  text: "// Commentaires" },
      { text: "$post->comments()->create($data)" },
    ],
    reverse: false,
  },
  {
    title: "Application de Gestion de Notes",
    description: "Application de gestion de notes personnelles avec création, modification, suppression et consultation de notes, connectée à une API REST pour la persistance des données.",
    tags: ["Vue.js", "API REST", "JavaScript"],
    primaryTag: "Notes App",
    secondaryTag: "API REST",
    "codeLines": [
      { "hl": true,  "text": "// Gestion de notes — Vue.js" },
      { "text": "const notes = ref([])" },
      { "text": "" },
      { "hl": true,  "text": "async function fetchNotes() {" },
      { "text": "  const res = await api.get('/notes')" },
      { "text": "  notes.value = res.data" },
      { "text": "}" },
      { "text": "" },
      { "hl": true,  "text": "// CRUD operations" },
      { "text": "await api.post('/notes', newNote)" },
      { "text": "await api.put('/notes/:id', edits)" },
      { "text": "await api.delete('/notes/:id')" }
    ],
    href: "https://post-it-wesley-dev.vercel.app/",
    reverse: false
  }
];

export default function ProjectsSection() {
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
          <p className="text-zinc-400 text-[15px] leading-[1.7] max-w-xs">
            Chaque projet représente un défi unique résolu par une architecture
            technique réfléchie et du code propre.
          </p>
        </RevealOnScroll>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-7">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
