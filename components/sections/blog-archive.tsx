"use client";
import { getSiteCopy } from "@/cms/site-copy";
import { useState } from "react";
import { ReactNode } from "react";
export default function BlogArchive({
  children,
  counts,
}: {
  children: ReactNode;
  counts: Record<string, number>;
}) {
  const { t, lang } = getSiteCopy();
  const [filter, setFilter] = useState("All");
  return (
    <section>
      <header className="archive-head">
        <p className="eyebrow accent">Stories</p>
        <h1>{t.blogTitle}</h1>
        <p>
          {lang === "en"
            ? "What I learn, what I build, and how I think about it. Long-running series and one-off notes from the desk."
            : "Quello che imparo, quello che costruisco e come ci ragiono. Serie e appunti dalla scrivania."}
        </p>
      </header>
      <div className="filter-bar">
        <div
          className="filter-group"
          aria-label={lang === "en" ? "Filter stories" : "Filtra articoli"}
        >
          {["All", "Series", "Oneshots"].map((f) => (
            <button
              key={f}
              aria-pressed={f === filter}
              onClick={() => setFilter(f)}
            >
              {lang === "it"
                ? { All: "Tutti", Series: "Serie", Oneshots: "Articoli" }[f]
                : f}
            </button>
          ))}
        </div>
      </div>
      <div className="archive-stories" data-filter={filter}>
        {children}
      </div>
      <span className="sr-only" role="status">
        {counts[filter]} results
      </span>
    </section>
  );
}
