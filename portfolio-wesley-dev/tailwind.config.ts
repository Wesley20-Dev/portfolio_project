// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Luminous Noir palette ──────────────────
        background:    "#000000",
        surface:       "#0f0f0f",
        "surface-card": "rgba(255,255,255,0.03)",

        pink: {
          DEFAULT: "#ff1493",
          light:   "#ffb0ca",
          muted:   "rgba(255,20,147,0.10)",
          glow:    "rgba(255,20,147,0.25)",
        },
        gray: {
          DEFAULT: "#a1a1aa",
          dim:     "rgba(255,255,255,0.40)",
        },
        glass: {
          stroke:      "rgba(255,255,255,0.10)",
          "stroke-hover": "rgba(255,20,147,0.35)",
        },
      },

      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body:    ["Inter", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },

      fontSize: {
        "display-xl":     ["88px",  { lineHeight: "1.0",  letterSpacing: "-0.04em", fontWeight: "900" }],
        "display-lg":     ["64px",  { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-mobile": ["48px",  { lineHeight: "1.1",  letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline":       ["52px",  { lineHeight: "1.1",  letterSpacing: "-0.03em", fontWeight: "800" }],
        "headline-sm":    ["36px",  { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "800" }],
        "label-caps":     ["11px",  { lineHeight: "16px", letterSpacing: "0.15em",  fontWeight: "500" }],
      },

      borderRadius: {
        card: "24px",
        pill: "9999px",
        lg:   "16px",
        xl:   "20px",
      },

      boxShadow: {
        "pink-glow":   "0 0 40px rgba(255,20,147,0.25)",
        "pink-intense":"0 12px 40px rgba(255,20,147,0.35)",
        "card-hover":  "0 0 60px rgba(255,20,147,0.08)",
        glass:         "0 8px 32px rgba(0,0,0,0.5)",
      },

      backgroundImage: {
        "pink-gradient": "linear-gradient(135deg, #ff479c, #ff1493)",
        "pink-text":     "linear-gradient(135deg, #ffb0ca 0%, #ff1493 100%)",
        "surface-glow":  "radial-gradient(circle, rgba(255,20,147,0.12) 0%, transparent 70%)",
      },

      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1",   transform: "scale(1)" },
          "50%":       { opacity: "0.5", transform: "scale(1.25)" },
        },
        "bounce-fade": {
          "0%, 100%": { opacity: "0.3", transform: "translateY(0)" },
          "50%":       { opacity: "0.7", transform: "translateY(8px)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "pulse-dot":   "pulse-dot 2s ease-in-out infinite",
        "bounce-fade": "bounce-fade 2.5s ease-in-out infinite",
        "float":       "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
