"use client";

import { useReveal } from "@/components/layout/use-reveal";
import { useLang } from "@/components/providers/language-provider";
import { Experience } from "@/models/experience.model";
import { ReactNode, useState } from "react";

function ChapterBody({
  children,
  showMore,
  showLess,
}: {
  children: ReactNode;
  showMore: string;
  showLess: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className={expanded ? "tl-body" : "tl-body tl-body--clamped"}>
        {children}
      </div>
      <button
        type="button"
        className="tl-more"
        aria-expanded={expanded}
        onClick={() => setExpanded((open) => !open)}
      >
        {expanded ? showLess : showMore}
      </button>
    </>
  );
}

export default function TimelineSection({
  experiences,
}: {
  experiences: Experience[];
}) {
  const { lang, t } = useLang();
  const ref = useReveal<HTMLElement>();

  /* Chapters read chronologically (CH.01 first); `order` is
     reverse-chronological, so sort on the chapter label instead. */
  const chapters = [...experiences]
    .filter((exp) => exp.chapter)
    .sort((a, b) => a.chapter!.en.localeCompare(b.chapter!.en));

  return (
    <section id="timeline" ref={ref} className="reveal mt-section">
      <div className="section-head">
        <h2 className="section-title">{t.timelineTitle}</h2>
        <span className="eyebrow">{t.evStory}</span>
      </div>
      <div className="panel sh-10 tl-panel">
        {chapters.map((exp) => (
          <div key={exp.slug} className="tl-row">
            <div className="tl-rail">
              <div className="tl-ch">{exp.chapter![lang]}</div>
              <div className="tl-year">{exp.chapterYear?.[lang]}</div>
              <span className="tag tag--role tl-role">{exp.jobTitle}</span>
            </div>
            <div style={{ minWidth: 0 }}>
              <div className="tl-head">
                <h3 className="tl-company">{exp.company}</h3>
              </div>
              <ChapterBody showMore={t.showMore} showLess={t.showLess}>
                {exp.description}
              </ChapterBody>
              {exp.tags && (
                <div className="tag-row tl-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
