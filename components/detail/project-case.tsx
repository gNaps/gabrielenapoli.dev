import { getSiteCopy } from "@/cms/site-copy";
import { ProjectDetails } from "@/cms/project-details";
import { Project } from "@/models/project.model";
import { skillLabel, projectAccess } from "@/utils/project.utils";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
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
  const { lang, t } = getSiteCopy();
  return (
    <div className="gn-page gn-page--detail">
      <div className="detail-top">
        <Link href="/projects" className="btn btn--back">
          ← {t.backToWork}
        </Link>
        {detail && <span className="eyebrow">{detail.chapter[lang]}</span>}
      </div>
      <header className="detail-head">
        <p className="eyebrow accent">
          {detail
            ? `${detail.role} · ${detail.year[lang]}`
            : project.skill.map(skillLabel).join(" · ")}
        </p>
        <h1 className="detail-title">{project.title}</h1>
        <p className="detail-tagline">
          {detail?.tagline[lang] ??
            project.description?.[lang] ??
            project.subtitle}
        </p>
        <div className="tag-row detail-tags">
          {project.skill.map((skill) => (
            <span key={skill} className="tag">
              {skillLabel(skill)}
            </span>
          ))}
        </div>
        {(project.urlPreview || project.urlGithub || project.urlDownload) && (
          <div className="hero-ctas">
            {project.urlDownload && <a href={project.urlDownload} target="_blank" rel="noreferrer" className="btn btn--primary">Download ↗</a>}
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
                {lang === "en" ? "Try it ↗" : "Provalo ↗"}
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
        <dl className="project-facts">
          {detail && (
            <>
              <div>
                <dt>Role</dt>
                <dd>{detail.role}</dd>
              </div>
              <div>
                <dt>Platform</dt>
                <dd>{detail.platform}</dd>
              </div>
            </>
          )}
          {detail?.status && (
            <div>
              <dt>Status</dt>
              <dd>{detail.status}</dd>
            </div>
          )}
          <div>
            <dt>Access</dt>
            <dd>{projectAccess(project)}</dd>
          </div>
        </dl>
      </header>
      <div className="detail-cover">
        <div className="parallax-photo" data-parallax>
          <Image
            src={project.preview.url}
            alt={project.preview.alt}
            fill
            preload
            sizes="(max-width: 767px) 100vw, 1120px"
            className="cover"
          />
        </div>
      </div>
      {detail && (
        <>
          <div className="blocks-grid">
            {detail.blocks.map((block) => (
              <section key={block.label.en} className="block-card" data-reveal>
                <h2 className="eyebrow">{block.label[lang]}</h2>
                <p className="block-card__body">{block.body[lang]}</p>
              </section>
            ))}
          </div>
          {!!project.gallery?.length && (
            <div className="shots-grid">
              {project.gallery.map((shot) => (
                <div key={shot.url} className="shot" data-reveal>
                  <Image
                    src={shot.url}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 540px"
                    className="cover"
                  />
                </div>
              ))}
            </div>
          )}
          <section className="results-panel" data-reveal>
            <h2 className="eyebrow accent">Product highlights</h2>
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
          </section>
        </>
      )}
      {!detail && content && (
        <article className="story-wrapper">{content}</article>
      )}
      {!!others.length && (
        <section>
          <h2 className="next-heading">
            {lang === "en" ? "Next chapters." : "Altri progetti."}
          </h2>
          <div className="related-grid">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/projects/${other.slug}`}
                className="related-card"
              >
                <strong className="related-card__title">{other.title}</strong>
                <span className="related-card__read">{t.openCase}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
