"use client";

import IllustrationSlot from "@/components/layout/illustration-slot";
import { useLang } from "@/components/providers/language-provider";
import { ProjectDetails } from "@/cms/project-details";
import { Project } from "@/models/project.model";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const SKILL_LABELS: Record<string, string> = {
  MSSQLS: "SQL Server",
  NextJS: "Next.js",
  NodeJS: "Node.js",
  NuxtJS: "Nuxt",
};

export default function ProjectCase({
  project,
  detail,
  content,
  others,
}: {
  project: Project;
  detail?: ProjectDetails;
  content: ReactNode;
  others: { title: string; slug: string }[];
}) {
  const { lang, t } = useLang();

  return (
    <div className="gn-page gn-page--detail">
      <div className="detail-top">
        <Link href="/#work" className="btn btn--back">
          ← {t.backToWork}
        </Link>
        {detail && <span className="eyebrow">{detail.chapter[lang]}</span>}
      </div>

      <div className="detail-hero-grid">
        <div className="panel sh-10 detail-head">
          <div className="eyebrow eyebrow--accent">
            {detail
              ? `${detail.role} · ${detail.year[lang]}`
              : project.skill
                  .map((skill) => SKILL_LABELS[skill] ?? skill)
                  .join(" · ")}
          </div>
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-tagline">
            {detail ? detail.tagline[lang] : project.subtitle}
          </p>
          <div className="tag-row detail-tags">
            {project.skill.map((skill) => (
              <span key={skill} className="tag">
                {SKILL_LABELS[skill] ?? skill}
              </span>
            ))}
          </div>
          {(project.urlPreview || project.urlGithub) && (
            <div className="hero-ctas" style={{ marginTop: 24 }}>
              {project.urlPreview && (
                <a
                  href={
                    project.urlPreview.startsWith("http")
                      ? project.urlPreview
                      : `https://${project.urlPreview}`
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary"
                >
                  Try it ↗
                </a>
              )}
              {project.urlGithub && (
                <a
                  href={project.urlGithub}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          )}
        </div>
        <div className="panel panel--img sh-10" style={{ minHeight: 320 }}>
          <Image
            src={project.preview.url}
            alt={project.preview.alt}
            fill
            priority
            sizes="(max-width: 820px) 100vw, 540px"
            style={{ objectFit: "cover" }}
          />
          {(detail?.sfx ?? project.sfx) && (
            <div className="sfx sfx--detail">{detail?.sfx ?? project.sfx}</div>
          )}
        </div>
      </div>

      {detail && (
        <>
          <div className="blocks-grid">
            {detail.blocks.map((block) => (
              <div key={block.label.en} className="panel sh-8 block-card">
                <div className="eyebrow eyebrow--accent">
                  {block.label[lang]}
                </div>
                <p className="block-card__body">{block.body[lang]}</p>
              </div>
            ))}
          </div>

          <div className="shots-grid">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="panel panel--img sh-8"
                style={{ minHeight: 260 }}
              >
                {project.gallery?.[i] ? (
                  <Image
                    src={project.gallery[i].url}
                    alt={project.gallery[i].alt}
                    fill
                    sizes="(max-width: 820px) 100vw, 540px"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <IllustrationSlot label="SCREENSHOT · 画面" />
                )}
              </div>
            ))}
          </div>

          <div className="results-grid">
            <div className="panel panel--ink sh-8 sh-accent result-card">
              <div
                className="eyebrow"
                style={{ color: "inherit", letterSpacing: "0.26em" }}
              >
                {t.resultLabel}
              </div>
              <div className="result-rows">
                {detail.results.map((result) => (
                  <div key={result.big} className="result-row">
                    <span className="result-row__big">{result.big}</span>
                    <span className="result-row__label">
                      {result.label[lang]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="panel sh-8 next-card">
              <div className="eyebrow">{t.nextLabel}</div>
              {others.map((other) => (
                <Link key={other.slug} href={`/projects/${other.slug}`}>
                  {other.title}
                  <span>→</span>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Projects with a structured case study show only the new copy;
          the MDX body remains the content for the others. */}
      {!detail && content && (
        <div className="story-wrapper">{content}</div>
      )}

      {!detail && others.length > 0 && (
        <div className="related-grid">
          {others.map((other) => (
            <Link
              key={other.slug}
              href={`/projects/${other.slug}`}
              className="panel sh-8 press press--sm related-card"
            >
              <strong className="related-card__title">{other.title}</strong>
              <span className="related-card__read">{t.readMore}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
