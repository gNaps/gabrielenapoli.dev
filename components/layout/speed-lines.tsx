"use client";

import { useEffect, useRef } from "react";

/* Fixed screentone overlay whose opacity tracks scroll velocity:
   the manga speed-line effect from the design. */
export default function SpeedLines() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollPos = () =>
      Math.max(
        window.scrollY || 0,
        document.body.scrollTop || 0,
        document.documentElement.scrollTop || 0
      );

    let last = scrollPos();
    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = scrollPos();
        const velocity = Math.min(Math.abs(y - last) / 26, 1);
        last = y;
        if (ref.current) {
          ref.current.style.opacity = String(velocity * 0.85);
        }
      });
    };

    document.addEventListener("scroll", onScroll, {
      passive: true,
      capture: true,
    });
    return () => {
      document.removeEventListener("scroll", onScroll, true);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="speedlines" aria-hidden />;
}
