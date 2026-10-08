"use client";
import { getSiteCopy } from "@/cms/site-copy";
import { useState } from "react";
import { ReactNode } from "react";
const filters = ["All", "React", "Next.js", "Angular", "Node.js"];
export default function WorkArchive({
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
        <p className="eyebrow accent">
          Work · {counts.All} {lang === "en" ? "projects" : "progetti"}
        </p>
        <h1>{t.workTitle}</h1>
        <p>
          {lang === "en"
            ? "Products, side projects and tools. Some pay the bills, some exist because I wanted them to."
            : "Prodotti, progetti personali e strumenti. Alcuni pagano le bollette, altri esistono perché volevo usarli."}
        </p>
      </header>
      <div className="filter-bar">
        <div
          className="filter-group"
          aria-label={lang === "en" ? "Filter projects" : "Filtra progetti"}
        >
          {filters.map((f) => (
            <button
              key={f}
              aria-pressed={f === filter}
              onClick={() => setFilter(f)}
            >
              {f === "All" && lang === "it" ? "Tutti" : f}
            </button>
          ))}
        </div>
      </div>
      <div className="work-results" data-filter={filter}>
        {children}
      </div>
      <span className="sr-only" role="status">
        {counts[filter]} {lang === "en" ? "projects" : "progetti"}
      </span>
    </section>
  );
}
