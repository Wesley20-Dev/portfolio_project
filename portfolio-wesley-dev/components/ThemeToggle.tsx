"use client";
// components/ThemeToggle.tsx
// Toggles data-theme on <html> and persists the choice.

import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";
const THEME_EVENT = "portfolio-theme-change";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const syncTheme = () => {
      const saved = localStorage.getItem(STORAGE_KEY);
      const dark = saved ? saved === "dark" : true;

      setIsDark(dark);
      document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    };

    syncTheme();
    window.addEventListener(THEME_EVENT, syncTheme);
    window.addEventListener("storage", syncTheme);

    return () => {
      window.removeEventListener(THEME_EVENT, syncTheme);
      window.removeEventListener("storage", syncTheme);
    };
  }, []);

  const toggle = () => {
    const nextIsDark = !isDark;
    const nextTheme = nextIsDark ? "dark" : "light";

    setIsDark(nextIsDark);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
      className="relative inline-flex h-8 w-16 shrink-0 items-center rounded-full px-1 transition-all duration-300"
      style={{
        background: isDark ? "rgba(255,20,147,0.15)" : "rgba(255,255,255,0.86)",
        border: "1px solid rgba(255,20,147,0.28)",
        boxShadow: "0 8px 24px rgba(255,20,147,0.10)",
      }}
    >
      <span
        className="material-symbols-outlined absolute left-2 text-pink-light transition-opacity duration-200"
        style={{ fontSize: 16, opacity: isDark ? 1 : 0.45 }}
      >
        dark_mode
      </span>
      <span
        className="material-symbols-outlined absolute right-2 text-pink-light transition-opacity duration-200"
        style={{ fontSize: 16, opacity: isDark ? 0.45 : 1 }}
      >
        light_mode
      </span>
      <span
        className="relative z-10 h-6 w-6 rounded-full transition-transform duration-300"
        style={{
          background: "linear-gradient(135deg,#ff479c,#ff1493)",
          boxShadow: "0 2px 10px rgba(255,20,147,0.38)",
          transform: isDark ? "translateX(0)" : "translateX(32px)",
        }}
      />
    </button>
  );
}
