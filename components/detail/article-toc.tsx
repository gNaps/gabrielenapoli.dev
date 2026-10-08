"use client";

import { useEffect, useState } from "react";
import type { ArticleHeading } from "@/utils/heading.utils";

export default function ArticleToc({
  headings,
  language,
}: {
  headings: ArticleHeading[];
  language: string;
}) {
  const [active, setActive] = useState(headings[0]?.id ?? "");
  useEffect(() => {
    const nodes = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((node): node is HTMLElement => !!node);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -65% 0px", threshold: 0 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [headings]);
  if (!headings.length) return null;
  const label = language === "it" ? "Indice" : "Contents";
  const ariaLabel =
    language === "it" ? "Indice dell’articolo" : "Table of contents";
  const links = headings.map((heading) => (
    <a
      key={heading.id}
      lang={language}
      href={`#${heading.id}`}
      data-level={heading.level}
      aria-current={active === heading.id ? "location" : undefined}
    >
      {heading.text}
    </a>
  ));
  return (
    <aside className="article-toc">
      <nav className="toc-desktop" aria-label={ariaLabel}>
        <p className="eyebrow">{label}</p>
        {links}
      </nav>
      <details className="toc-mobile">
        <summary>
          {label} <span aria-hidden="true">↓</span>
        </summary>
        <nav aria-label={ariaLabel}>{links}</nav>
      </details>
    </aside>
  );
}
