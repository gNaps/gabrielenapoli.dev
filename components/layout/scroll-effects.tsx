"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

/** A single event-driven frame, with layout reads before style writes.
 * No React renders on scroll and no perpetual animation loop. */
export default function ScrollEffects() {
  const pathname = usePathname();
  const glow = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let dispose = () => {};
    const setup = () => {
      dispose();
      if (motion.matches) return;
      const root = document.documentElement;
      root.dataset.motion = "on";
      let frame = 0,
        pointerFrame = 0;
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-sticky]"),
      );
      const items = sections.map((el) => ({
        el,
        kind: el.dataset.sticky,
        title: el.querySelector<HTMLElement>("[data-hero-title]"),
        media: el.querySelector<HTMLElement>("[data-hero-media]"),
        image: el.querySelector<HTMLElement>("[data-hero-img]"),
        caption: el.querySelector<HTMLElement>("[data-hero-cap]"),
        words: Array.from(el.querySelectorAll<HTMLElement>("[data-word]")),
        track: el.querySelector<HTMLElement>("[data-track]"),
        bar: el.querySelector<HTMLElement>("[data-bar]"),
      }));
      const parallaxes = Array.from(
        document.querySelectorAll<HTMLElement>("[data-parallax]"),
      );
      const timeline = document.querySelector<HTMLElement>("[data-timeline]");
      const line = timeline?.querySelector<HTMLElement>("[data-line]");
      const dots = Array.from(
        timeline?.querySelectorAll<HTMLElement>("[data-dot]") ?? [],
      );
      const progress = document.querySelector<HTMLElement>(
        "[data-reading-progress]",
      );
      const article = document.querySelector<HTMLElement>("[data-article]");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.removeAttribute("data-pending");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
      );
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (el.getBoundingClientRect().top > innerHeight) {
          el.dataset.pending = "";
          observer.observe(el);
        }
      });
      const update = () => {
        frame = 0;
        const vh = innerHeight,
          vw = innerWidth;
        const measurements = items.map((item) => ({
          item,
          rect: item.el.getBoundingClientRect(),
          width: item.track?.scrollWidth ?? 0,
        }));
        const photos = parallaxes.map((el) => ({
          el,
          rect: el.parentElement!.getBoundingClientRect(),
        }));
        const tlRect = timeline?.getBoundingClientRect();
        const dotTops = dots.map((dot) => dot.getBoundingClientRect().top);
        const articleRect = article?.getBoundingClientRect();
        for (const { item, rect, width } of measurements) {
          if (rect.bottom < 0 || rect.top > vh) continue;
          const p = clamp(-rect.top / Math.max(1, rect.height - vh));
          if (item.kind === "hero") {
            const e = 1 - Math.pow(1 - clamp(p / 0.7), 3);
            if (item.title) {
              item.title.style.transform = `translate3d(0,${-p * 160}px,0) scale(${1 - p * 0.16})`;
              item.title.style.opacity = String(clamp(1 - p * 2.2));
              item.title.style.visibility = p > 0.46 ? "hidden" : "visible";
            }
            if (item.media) {
              item.media.style.transform = `translate3d(0,${(1 - e) * 52}vh,0) scale(${0.42 + 0.58 * e})`;
              item.media.style.borderRadius = `${(1 - e) * 36}px`;
            }
            if (item.image)
              item.image.style.transform = `scale(${1.25 - 0.25 * e})`;
            if (item.caption) {
              const q = clamp((p - 0.68) / 0.2);
              item.caption.style.opacity = String(q);
              item.caption.style.visibility = q > 0 ? "visible" : "hidden";
              item.caption.style.transform = `translate3d(0,${(1 - q) * 28}px,0)`;
            }
          } else if (item.kind === "about") {
            item.words.forEach((word, i) => {
              word.style.opacity = String(
                0.16 + 0.84 * clamp((p * 1.15 - i / item.words.length) * 10),
              );
            });
          } else if (item.kind === "projects" && vw >= 768) {
            if (item.track)
              item.track.style.transform = `translate3d(${-p * Math.max(0, width - vw)}px,0,0)`;
            if (item.bar) item.bar.style.transform = `scaleX(${p})`;
          } else if (item.track) item.track.style.removeProperty("transform");
        }
        photos.forEach(({ el, rect }) => {
          if (rect.bottom < 0 || rect.top > vh) return;
          el.style.transform = `translate3d(0,${clamp((rect.top + rect.height / 2 - vh / 2) / vh, -1, 1) * rect.height * 0.1}px,0)`;
        });
        if (line && tlRect)
          line.style.transform = `scaleY(${clamp((vh * 0.55 - tlRect.top) / tlRect.height)})`;
        dots.forEach((dot, i) => {
          dot.dataset.active = String(dotTops[i] < vh * 0.55);
        });
        if (progress && articleRect)
          progress.style.transform = `scaleX(${clamp((vh * 0.2 - articleRect.top) / Math.max(1, articleRect.height - vh * 0.8))})`;
      };
      const schedule = () => {
        if (!frame) frame = requestAnimationFrame(update);
      };
      const focus = (event: FocusEvent) => {
        const card = (event.target as HTMLElement).closest<HTMLElement>(
          ".scroll-project",
        );
        const work = items.find((item) => item.kind === "projects");
        if (!card || !work?.track || innerWidth < 768) return;
        const p = clamp(
          (card.offsetLeft - innerWidth * 0.08) /
            Math.max(1, work.track.scrollWidth - innerWidth),
        );
        const rect = work.el.getBoundingClientRect();
        window.scrollTo({
          top: scrollY + rect.top + p * (rect.height - innerHeight),
          behavior: "instant",
        });
      };
      const pointer = (event: PointerEvent) => {
        if (
          document.hidden ||
          !glow.current ||
          !matchMedia("(pointer: fine)").matches
        )
          return;
        cancelAnimationFrame(pointerFrame);
        pointerFrame = requestAnimationFrame(() => {
          if (glow.current) {
            glow.current.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`;
            glow.current.style.opacity = "1";
          }
        });
      };
      const leave = () => {
        if (glow.current) glow.current.style.opacity = "0";
      };
      const resized = new ResizeObserver(schedule);
      sections.forEach((el) => resized.observe(el));
      if (timeline) resized.observe(timeline);
      if (article) resized.observe(article);
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule, { passive: true });
      window.addEventListener("pointermove", pointer, { passive: true });
      root.addEventListener("pointerleave", leave);
      document.addEventListener("focusin", focus);
      schedule();
      dispose = () => {
        cancelAnimationFrame(frame);
        cancelAnimationFrame(pointerFrame);
        observer.disconnect();
        resized.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        window.removeEventListener("pointermove", pointer);
        root.removeEventListener("pointerleave", leave);
        document.removeEventListener("focusin", focus);
        delete root.dataset.motion;
        document
          .querySelectorAll<HTMLElement>("[data-pending]")
          .forEach((el) => el.removeAttribute("data-pending"));
        items.forEach((item) =>
          [
            item.title,
            item.media,
            item.image,
            item.caption,
            item.track,
            item.bar,
            ...item.words,
          ].forEach((el) => el?.removeAttribute("style")),
        );
        parallaxes.forEach((el) => el.style.removeProperty("transform"));
        leave();
      };
    };
    setup();
    motion.addEventListener("change", setup);
    return () => {
      dispose();
      motion.removeEventListener("change", setup);
    };
  }, [pathname]);
  return <div ref={glow} className="pointer-glow" aria-hidden="true" />;
}
