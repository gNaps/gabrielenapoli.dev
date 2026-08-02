"use client";

import { useEffect, useRef } from "react";

/* One-shot reveal-on-scroll: pair with className="reveal": when the
   element enters the viewport the hook adds "in", which triggers the
   gnRise animation from globals.css. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}
