"use client";
// components/RevealOnScroll.tsx
// Wrap any element to get a smooth fade+slide reveal when it enters the viewport.
//
// Usage:
//   <RevealOnScroll delay={0.2}>
//     <YourComponent />
//   </RevealOnScroll>

import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;   // seconds, e.g. 0.1 / 0.2 / 0.3
  className?: string;
}

export default function RevealOnScroll({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  );
}
