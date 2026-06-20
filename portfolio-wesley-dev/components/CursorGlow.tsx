"use client";
// components/CursorGlow.tsx
// Smooth pink halo that lazily follows the cursor.

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let curX = 0, curY = 0, glowX = 0, glowY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => { curX = e.clientX; curY = e.clientY; };
    window.addEventListener("mousemove", onMove);

    function animate() {
      glowX += (curX - glowX) * 0.08;
      glowY += (curY - glowY) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.left = `${glowX}px`;
        glowRef.current.style.top  = `${glowY}px`;
      }
      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-0"
      style={{
        width:  400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,20,147,0.06) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
