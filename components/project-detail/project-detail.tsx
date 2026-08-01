"use client";

import ContainerAnimated from "@/components/container-animated/container-animated";
import { Project } from "@/models/project.model";
import Image from "next/image";
import Link from "next/link";
import SkillIcon from "../skill-icon/skill-icon";

const ProjectDetail = ({
  title,
  subtitle,
  preview,
  skill,
  urlGithub,
  urlPreview,
  gallery,
  content,
}: Project) => {
  const hasStack = skill && skill.length > 0;
  const hasActions = Boolean(urlPreview || urlGithub);

  return (
    <article className="detail">
      <ContainerAnimated>
        <Link href="/projects" className="back-link">
          <svg
            width={15}
            height={15}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ fill: "none" }}
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to projects
        </Link>

        <h1>{title}</h1>
        {subtitle && <p className="detail-lead">{subtitle}</p>}

        {(hasStack || hasActions) && (
          <div className="detail-meta">
            {hasStack && (
              <div className="detail-stack">
                <span className="kicker">道具 · Built with</span>
                <div className="stack">
                  {skill.map((s, index) => (
                    <SkillIcon name={s} key={index} />
                  ))}
                </div>
              </div>
            )}

            {hasActions && (
              <div className="detail-actions">
                {urlPreview && (
                  <Link href={urlPreview} target="_blank">
                    <button className="pill pill-primary">
                      Try it
                      <svg
                        width={13}
                        height={13}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ fill: "none" }}
                      >
                        <path d="M7 17 17 7M8 7h9v9" />
                      </svg>
                    </button>
                  </Link>
                )}
                {urlGithub && (
                  <Link href={urlGithub} target="_blank">
                    <button className="pill">
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 24 24"
                        style={{ fill: "currentColor" }}
                        aria-hidden
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      GitHub
                    </button>
                  </Link>
                )}
              </div>
            )}
          </div>
        )}
      </ContainerAnimated>

      <ContainerAnimated>
        <div className="detail-hero">
          <Image
            src={preview.url ?? ""}
            alt={preview.alt ?? ""}
            width={1200}
            height={675}
            priority
          />
        </div>
      </ContainerAnimated>

      <div className="story-wrapper detail-content">
        <ContainerAnimated>{content}</ContainerAnimated>
      </div>

      {gallery && gallery.length > 0 && (
        <div className="detail-gallery">
          <ContainerAnimated>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              画集 · Gallery
            </div>
          </ContainerAnimated>
          <div className="grid-2">
            {gallery.map((g, index) => (
              <ContainerAnimated key={index}>
                <div className="card" style={{ overflow: "hidden" }}>
                  <Image
                    src={g.url}
                    alt={g.alt}
                    width={800}
                    height={400}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </ContainerAnimated>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default ProjectDetail;
