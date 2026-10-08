"use client";

import { useEffect, useRef, useState } from "react";

export default function ProjectControls({ total }: { total: number }) {
  const [current, setCurrent] = useState(0);
  const selected = useRef(0);

  useEffect(() => {
    const track = document.getElementById("project-track");
    const section = document.getElementById("work");
    if (!track || !section) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const cards = Array.from(
        track.querySelectorAll<HTMLElement>(".scroll-project"),
      );
      const edge = innerWidth >= 768 ? innerWidth * 0.08 : 20;
      const next = cards.reduce(
        (closest, card, index) =>
          Math.abs(card.getBoundingClientRect().left - edge) <
          Math.abs(cards[closest].getBoundingClientRect().left - edge)
            ? index
            : closest,
        0,
      );
      if (next !== selected.current) {
        selected.current = next;
        setCurrent(next);
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    track.addEventListener("scroll", schedule, { passive: true });
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      track.removeEventListener("scroll", schedule);
    };
  }, []);

  const move = (direction: number) => {
    const section = document.getElementById("work");
    const track = document.getElementById("project-track");
    if (!section || !track) return;
    const index = Math.max(
      0,
      Math.min(total - 1, selected.current + direction),
    );
    const card = track.querySelectorAll<HTMLElement>(".scroll-project")[index];
    if (!card) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior = reduced ? "instant" : "smooth";
    if (innerWidth < 768 || reduced) {
      track.scrollTo({
        left: card.offsetLeft - (innerWidth < 768 ? 20 : innerWidth * 0.08),
        behavior,
      });
    } else {
      const distance = Math.max(1, track.scrollWidth - innerWidth);
      const progress = Math.min(
        1,
        Math.max(0, (card.offsetLeft - innerWidth * 0.08) / distance),
      );
      const rect = section.getBoundingClientRect();
      window.scrollTo({
        top: scrollY + rect.top + progress * (rect.height - innerHeight),
        behavior,
      });
    }
  };

  return (
    <div className="project-controls" aria-label="Project navigation">
      <span className="project-counter" aria-live="polite" aria-atomic="true">
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(total).padStart(2, "0")}
      </span>
      <button
        type="button"
        aria-label="Previous project"
        aria-controls="project-track"
        disabled={current === 0}
        onClick={() => move(-1)}
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Next project"
        aria-controls="project-track"
        disabled={current === total - 1}
        onClick={() => move(1)}
      >
        →
      </button>
    </div>
  );
}
