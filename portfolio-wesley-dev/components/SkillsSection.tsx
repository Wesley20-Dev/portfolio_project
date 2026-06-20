"use client";
// components/SkillsSection.tsx
// Skills avec vrais logos SVG inline + animations stagger au scroll.

import RevealOnScroll from "./RevealOnScroll";

/* SVG LOGOS — inline, coloriables via fill/color CSS*/
const LOGOS: Record<string, JSX.Element> = {
  JavaScript: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
      <path d="M9 25.8l2.33-1.41c.45.8.86 1.47 1.83 1.47.93 0 1.52-.36 1.52-1.78V15.5h2.87v8.63c0 2.93-1.72 4.27-4.23 4.27-2.27 0-3.58-1.18-4.32-2.6zM19.4 25.5l2.33-1.35c.61 1 1.41 1.74 2.82 1.74 1.18 0 1.94-.59 1.94-1.41 0-.98-.78-1.32-2.08-1.89l-.71-.31c-2.06-.88-3.43-1.98-3.43-4.31 0-2.15 1.63-3.78 4.19-3.78 1.82 0 3.12.63 4.06 2.29l-2.23 1.43c-.49-.88-1.02-1.22-1.84-1.22-.84 0-1.37.53-1.37 1.22 0 .86.53 1.2 1.76 1.73l.71.31c2.43 1.04 3.8 2.1 3.8 4.48 0 2.57-2.02 3.99-4.73 3.99-2.65 0-4.36-1.26-5.22-2.92z" fill="#000"/>
    </svg>
  ),
  PHP: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#777BB3"/>
      <path d="M16 9.5c-6.35 0-11.5 2.91-11.5 6.5S9.65 22.5 16 22.5s11.5-2.91 11.5-6.5S22.35 9.5 16 9.5zM10.4 18.1H9.1l.28-1.6H8.3l-.28 1.6H6.8l.85-4.8h1.22l-.3 1.7h1.08l.3-1.7h1.22l-.77 4.8zm5.1 0h-1.15l.12-.68c-.38.51-.86.77-1.43.77-.9 0-1.35-.5-1.35-1.5a3.3 3.3 0 01.84-2.22c.5-.53 1.1-.8 1.8-.8.52 0 .88.2 1.06.6l.3-1.77h1.2l-.8 4.6h-.59zm5.8-1.5c-.15.88-.42 1.5-.8 1.86-.38.36-.9.54-1.58.54-.47 0-.83-.1-1.08-.31-.24-.2-.36-.5-.36-.88 0-.1.01-.2.03-.32l.42-2.39h1.18l-.4 2.25c-.02.1-.03.19-.03.25 0 .28.14.42.42.42.28 0 .5-.13.65-.4.16-.26.28-.64.34-1.13l.3-1.4h1.18l-.27 1.51z" fill="white"/>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#1e1e2e"/>
      <path d="M16 4c-2.88 0-4.8.61-4.8 1.6v1.6h4.8v.8H9.6C8.16 8 7.2 9.4 7.2 12s.96 4 2.4 4H11v-2c0-1.76 1.5-2.4 5-2.4h6c1.32 0 2-.88 2-2V5.6C24 4.61 22.08 4 16 4zm-1.6 1.6a.8.8 0 110 1.6.8.8 0 010-1.6z" fill="#3776AB"/>
      <path d="M16 28c2.88 0 4.8-.61 4.8-1.6v-1.6h-4.8v-.8h6.4c1.44 0 2.4-1.4 2.4-4s-.96-4-2.4-4H21v2c0 1.76-1.5 2.4-5 2.4h-6c-1.32 0-2 .88-2 2v3.6C8 27.39 9.92 28 16 28zm1.6-1.6a.8.8 0 110-1.6.8.8 0 010 1.6z" fill="#FFD43B"/>
    </svg>
  ),
  C: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#A8B9CC"/>
      <text x="16" y="22" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="18" fill="#003569">C</text>
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#000"/>
      <path d="M16 4a12 12 0 100 24A12 12 0 0016 4zm5.6 20.27L11.2 10.4H9.6v11.2h1.6v-8.8l9.6 12.2a12.04 12.04 0 01-4.8 1.27zm3.2-1.07h-1.6V10.4h1.6v12.8z" fill="white"/>
    </svg>
  ),
  "React.js": (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#20232a"/>
      <ellipse cx="16" cy="16" rx="3" ry="3" fill="#61DAFB"/>
      <ellipse cx="16" cy="16" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
      <ellipse cx="16" cy="16" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
    </svg>
  ),
  "React Native": (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#20232a"/>
      <ellipse cx="16" cy="16" rx="3" ry="3" fill="#61DAFB"/>
      <ellipse cx="16" cy="16" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
      <ellipse cx="16" cy="16" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
      <rect x="13" y="4" width="6" height="2" rx="1" fill="#444"/>
    </svg>
  ),
  "Vue.js": (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#1a1a2e"/>
      <path d="M16 26L4 8h5.33L16 19.2 22.67 8H28L16 26z" fill="#42B883"/>
      <path d="M16 26l-6.67-10.8H13L16 19.2l3-3.8h3.67L16 26z" fill="#35495E"/>
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#0f172a"/>
      <path d="M10 13.6c.8-3.2 2.8-4.8 6-4.8 4.8 0 5.4 3.6 7.8 4.2 1.6.4 3-.2 4.2-1.8-.8 3.2-2.8 4.8-6 4.8-4.8 0-5.4-3.6-7.8-4.2-1.6-.4-3 .2-4.2 1.8zm-6 7.2C4.8 17.6 6.8 16 10 16c4.8 0 5.4 3.6 7.8 4.2 1.6.4 3-.2 4.2-1.8-.8 3.2-2.8 4.8-6 4.8-4.8 0-5.4-3.6-7.8-4.2-1.6-.4-3 .2-4.2 1.8z" fill="#38BDF8"/>
    </svg>
  ),
  Bootstrap: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#563D7C"/>
      <path d="M10 8h7.5a4.5 4.5 0 012.83 7.97A4.5 4.5 0 0117 24H10V8zm3 3v4h4a2 2 0 000-4h-4zm0 7v4h4.5a2 2 0 000-4H13z" fill="white"/>
    </svg>
  ),
  HTML5: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#E34F26"/>
      <path d="M7 4l2 22.5L16 29l7-2.5L25 4H7zm15.3 6H9.7l.3 3h12l-.9 9.8L16 24.4l-5.1-1.6-.4-4h2.9l.2 2 2.4.6 2.4-.6.3-3.2H9.6L9 9h14l-.7 1z" fill="white"/>
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#1572B6"/>
      <path d="M7 4l2 22.5L16 29l7-2.5L25 4H7zm13.8 8H11.5l.3 3.3h8.7l-.9 8.7L16 25.3l-3.6-1.3-.3-3h2.9l.1 1.5L16 23l.9-.5.4-4H11.3L10.6 10h10.8l-.6 2z" fill="white"/>
    </svg>
  ),
  NestJS: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#1a1a2e"/>
      <path d="M19.6 7c-.4 0-.7.1-1 .3a3.2 3.2 0 00-3-.3C12.8 5.6 9.5 7 8 10.2c-1.7 4 .4 8.7 4.5 10.5l.1-.3c-3.4-1.6-5.3-5.4-3.9-9 1.2-3 4.3-4.3 7-3.5-.8.7-1.2 1.8-.8 2.9.5 1.3 1.9 1.9 3.2 1.4.4-.2.8-.5 1-.9 1.5 2.2 1.3 5.2-.7 7a6 6 0 01-8.3-.9l-.3.2a6.5 6.5 0 009 1 7 7 0 001.1-8.7c.5-.1 1-.5 1.2-1 .4-1.1-.2-2.4-1.5-2.9zm-.3 3.5c-.8.3-1.7-.1-2-.9-.3-.8.1-1.7.9-2 .8-.3 1.7.1 2 .9.3.8-.1 1.7-.9 2z" fill="#E0234E"/>
      <path d="M12.4 25c.4 0 .7-.1 1-.3.8.5 1.8.6 2.8.3 2.8-1.4 3.9-4.9 2.5-7.8l-.2.2c1.2 2.6.2 5.7-2.3 7-.8.4-1.7.4-2.5.1.8-.7 1.2-1.8.8-2.9-.5-1.3-1.9-1.9-3.2-1.4-.4.2-.8.5-1 .9-1.5-2.2-1.3-5.2.7-7 2.1-1.8 5.2-1.6 7.1.5l.3-.2c-2.1-2.4-5.7-2.7-8.1-.6a7 7 0 00-1.1 8.7c-.5.1-1 .5-1.2 1-.4 1.1.2 2.4 1.5 2.9.6.2 1.2.1 1.9-.4zm.3-3.5c.8-.3 1.7.1 2 .9.3.8-.1 1.7-.9 2-.8.3-1.7-.1-2-.9-.3-.8.1-1.7.9-2z" fill="#E0234E" opacity="0.7"/>
    </svg>
  ),
  Laravel: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#1a1a2e"/>
      <path d="M28 9.8c0 .1 0 .2-.1.3l-4.2 7.5v.1l-2.5 4.4c0 .1-.1.1-.2.1h-1.6c-.1 0-.2-.1-.2-.1L17 18.7v-.1l-1.4-2.4-.7 1.3v.1l-1.9 3.4c0 .1-.1.1-.2.1h-1.6c-.1 0-.2 0-.2-.1L7 14.3l-2.8-5c0-.1 0-.3.1-.3l1.4-.8c.1-.1.2 0 .3.1l3.5 6.3 2-3.6v-.1l1.1-2c.1-.1.2-.1.3 0l1.5.9c.1.1.1.2.1.3l-1 1.8 1 1.8 2-3.6v-.1l1.1-2c.1-.1.2-.1.3 0l1.5.9c.1.1.1.2.1.3l-1 1.8 3 5.4 1.8-3.2-4.4-7.8c0-.1 0-.3.1-.3l1.4-.8c.1-.1.2 0 .3.1l4.4 7.8 1-1.8c0-.1.2-.1.3 0l1.4.8c0 .1.1.2 0 .3z" fill="#FF2D20"/>
    </svg>
  ),
  Flask: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#1a1a2e"/>
      <path d="M13 5v9.5L7.2 23a5 5 0 004.2 7.5h9.2a5 5 0 004.2-7.5L19 14.5V5h-6zm3 1.5h2v8.7l5.4 9.5a3.5 3.5 0 01-3 5.3H12a3.5 3.5 0 01-3-5.3L14.5 15l.5-.8V6.5h1z" fill="white"/>
      <circle cx="20" cy="24" r="1.5" fill="#38BDF8"/>
      <circle cx="14" cy="26" r="1" fill="#38BDF8"/>
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#336791"/>
      <path d="M21.5 8.3c-1.1-.3-2.3-.4-3.5-.3-.8-.9-1.8-1.5-2.8-1.8-2-.6-3.9.1-5 1.7-2.6 3.6-1.5 9.8 1.5 12.7.7.6 1.5 1 2.3.9l.3 1.4c.1.5.6.8 1.1.7.5-.1.8-.6.7-1.1l-.2-1.2c1 0 2-.4 2.8-1.3 3-3 4.1-9.1 2.8-12.7zm-7.8.6c.6-.8 1.6-1.2 2.7-.9.5.1 1 .4 1.4.8-1.5.1-3 .7-4.1 1.7-.4-.4-.5-1-.4-1.6h.4zm-1.2 2.5c1.3-1.3 3-2 4.8-1.9-1.3 1.6-2.1 3.6-2.3 5.7-.1.6-.1 1.2 0 1.8-1.5-1.6-2.8-3.7-2.5-5.6zm6.3 7.2c-.5.5-1.2.9-1.9.9l-.2-1.2c.1-.5-.3-1-.8-1.1-.5-.1-1 .3-1.1.8l-.3 1.4c-.4-.1-.8-.4-1.2-.7-2.3-2.3-3.3-7.3-1.2-10.1l.2-.3c-.3 1.3.1 2.8 1 3.9-.3.9-.3 1.9.1 2.8.6 1.3 2 2 3.4 1.7.6-.1 1.1-.5 1.5-.9l.5.5c-.5.8-1.2 1.4-2 1.7l.2.9c1.7-.3 3.1-1.4 3.9-3 .8-1.6.8-3.5.1-5.1-.4-.9-1-1.6-1.7-2.1 1.6.3 3 1.3 3.6 2.9 1 2.5 0 7.2-2.1 9.7z" fill="white"/>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#1a1a2e"/>
      <path d="M16.1 4c-.1 0-.1.1-.2.2-1.5 1.8-5 6.4-5.1 10.5-.1 3 1.5 5.5 3.6 7.2v.1l.5 5.8c0 .1.1.2.2.2h1.8c.1 0 .2-.1.2-.2l.5-5.8v-.1C19.8 20 21.4 17.5 21.3 14.7c-.1-4.1-3.6-8.7-5.1-10.5-.1-.1-.1-.2-.1-.2z" fill="#4DB33D"/>
      <path d="M16.1 4c-.1 0-.1.1-.1.2-.7.9-2.3 3.2-3.4 5.7 1 1.4 2.2 3.6 2.9 6.2.4 1.5.5 3 .3 4.5l-.1.8v.1l.2 6.3c0 .1.1.2.2.2h1.8c.1 0 .2-.1.2-.2l.5-5.8v-.1C20 20 21.4 17.5 21.3 14.7c-.1-4.1-3.6-8.7-5.2-10.7z" fill="#3D9B35" opacity="0.5"/>
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#1a1a2e"/>
      <path d="M5 18.3c1.7.2 2.7-.1 3.6-.9l1.4 1.1c-1.2.9-2.9 1.4-5 1.1V18.3zM5 15.9c2.4.2 4.3-.3 5.8-1.3l1.4 1.1c-1.8 1.3-4 2-7.2 1.8V15.9zM5 13.5c2.7.1 5.2-.8 6.8-2.2l1.5 1.1C11.4 14 8.3 15 5 14.8v-1.3zM18.5 8c2.3 0 4.3.4 5.8 1.3v1.8c-1.5-1-3.5-1.5-5.8-1.5s-4.3.5-5.8 1.5V9.3C14.2 8.4 16.2 8 18.5 8zm0 4c2.2 0 4.1.4 5.5 1.1v1.7c-1.4-.8-3.3-1.2-5.5-1.2s-4.1.4-5.5 1.2v-1.7c1.4-.7 3.3-1.1 5.5-1.1zm0 3.8c2.2 0 4 .4 5.4 1v1.6c-1.4-.7-3.2-1-5.4-1s-4 .4-5.4 1v-1.6c1.4-.6 3.2-1 5.4-1zm0 3.6c2 0 3.7.3 5 .8v1.5c-1.3-.6-3-.9-5-.9s-3.7.3-5 .9v-1.5c1.3-.5 3-.8 5-.8z" fill="#00758F"/>
      <path d="M24 9.3v11.1c0 1.5-2.5 2.8-5.5 2.8s-5.5-1.3-5.5-2.8V9.3" stroke="#F29111" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  SQLite: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#1a1a2e"/>
      <path d="M22 6c0 0-2.7 1.4-5.3 5.1-1.7 2.5-2.6 4.8-3 6.4-.4 1.7-.3 3-.3 3s.8-1.3 2.6-2.4c2.9-1.8 5.4-1.7 5.4-1.7S19.7 18.5 18 21c-1.7 2.4-4.1 4-4.1 4L12 26.5c0 0 2.2.5 4.2-.9 1.6-1.1 2.3-3 2.3-3s1.4 1 1.5 3.4c.1 2 0 0 0 0S23.5 24 23.5 20c0-2.1-.6-3.2-.6-3.2s2.4-.5 4.1-3.6C28.2 10.5 22 6 22 6z" fill="#0F80CC"/>
      <path d="M10 18s-.8 2.3-.8 5c0 2.3.8 3.9.8 3.9" stroke="#0F80CC" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#F05032"/>
      <path d="M28.2 14.8l-11-11a2 2 0 00-2.8 0l-2.4 2.4 3 3a2.4 2.4 0 013 3l2.9 2.9a2.4 2.4 0 11-1.4 1.4l-2.7-2.7v7a2.4 2.4 0 11-2 0V14l-3.6-3.6a2 2 0 000 2.8l11 11a2 2 0 002.8 0l5-5a2 2 0 000-2.8l-1.8-1.4z" fill="white"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#24292E"/>
      <path d="M16 5C10 5 5 10 5 16.2c0 4.9 3.2 9.1 7.6 10.6.6.1.8-.2.8-.5v-1.9c-3.2.7-3.8-1.5-3.8-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5C23.8 25.3 27 21.1 27 16.2 27 10 22 5 16 5z" fill="white"/>
    </svg>
  ),
  Postman: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#1a1a2e"/>
      <circle cx="16" cy="16" r="10" fill="#FF6C37"/>
      <path d="M20.3 11.7l-5.6 5.6-2.1-2.1-1.4 1.4 3.5 3.5 7-7-1.4-1.4z" fill="white"/>
    </svg>
  ),
  "VS Code": (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#007ACC"/>
      <path d="M24 6l-9.5 9 4 3.8-4 3.8 9.5 9V6zM8 16l5.5-5.2-1.3-1.3L6 16l6.2 6.5 1.3-1.3L8 16z" fill="white" opacity="0.5"/>
      <path d="M6 9.5L14.2 16 6 22.5V9.5zM24 6l-9.5 9.5L24 6zm0 20l-9.5-9.5L24 26z" fill="white"/>
    </svg>
  ),
};

/* DATA*/
const CATEGORIES = [
  {
    title: "Languages",
    color: "#a78bfa",
    skills: ["JavaScript", "PHP", "Python", "C"],
  },
  {
    title: "Backend",
    color: "#f87171",
    skills: ["NestJS", "Laravel", "Flask"],
  },
  {
    title: "Frontend & Mobile",
    color: "#38bdf8",
    skills: ["Next.js", "React.js", "Vue.js", "React Native", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
  },
  {
    title: "Bases de données & Outils",
    color: "#34d399",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Git", "GitHub", "Postman", "VS Code"],
  },
];

/* ────────────────────────────────────────────────────────────
   SKILL CHIP COMPONENT
──────────────────────────────────────────────────────────── */
function SkillChip({ name, index }: { name: string; index: number }) {
  const logo = LOGOS[name];

  return (
    <div
      className="group flex flex-col items-center gap-3 p-5 rounded-2xl cursor-default select-none transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        animationDelay: `${index * 60}ms`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.border = "1px solid rgba(255,20,147,0.35)";
        el.style.background = "rgba(255,20,147,0.06)";
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 8px 32px rgba(255,20,147,0.15)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.border = "1px solid rgba(255,255,255,0.08)";
        el.style.background = "rgba(255,255,255,0.03)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Logo */}
      <div className="w-10 h-10 flex items-center justify-center rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-110">
        {logo ?? (
          <span className="material-symbols-outlined text-pink-light" style={{ fontSize: 28 }}>
            code
          </span>
        )}
      </div>
      {/* Label */}
      <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-zinc-400 text-center transition-colors duration-200 group-hover:text-white leading-tight">
        {name}
      </span>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   MAIN SECTION
──────────────────────────────────────────────────────────── */
export default function SkillsSection() {
  return (
    <section id="skills" className="py-36 px-6 md:px-16 max-w-[1280px] mx-auto">

      {/* Header */}
      <RevealOnScroll>
        <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-pink-light mb-3">
          02 / Tech Stack
        </p>
        <h2
          className="font-display font-black tracking-[-0.03em] leading-[1.1] mb-4"
          style={{ fontSize: "clamp(32px,5vw,52px)" }}
        >
          Mon Écosystème.
        </h2>
        <p className="text-zinc-500 text-[15px] mb-16 max-w-md">
          Technologies maîtrisées du frontend au backend, du mobile au cloud.
        </p>
      </RevealOnScroll>

      {/* Catégories */}
      <div className="space-y-14">
        {CATEGORIES.map(({ title, color, skills }, catIdx) => (
          <RevealOnScroll key={title} delay={catIdx * 0.08}>
            {/* Category header */}
            <div className="flex items-center gap-4 mb-6">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: color, boxShadow: `0 0 8px ${color}` }}
              />
              <p
                className="font-mono text-[11px] tracking-[0.15em] uppercase"
                style={{ color }}
              >
                {title}
              </p>
              <div
                className="flex-1 h-px"
                style={{ background: `linear-gradient(to right, ${color}30, transparent)` }}
              />
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {skills.map((skill, i) => (
                <SkillChip key={skill} name={skill} index={i + catIdx * 4} />
              ))}
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Bottom glow decoration */}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-96 h-24 -mt-8 blur-[80px] opacity-20"
        style={{ background: "radial-gradient(ellipse, #ff1493, transparent)" }}
      />
    </section>
  );
}
