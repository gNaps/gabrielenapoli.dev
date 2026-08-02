"use client";

import { useLang } from "@/components/providers/language-provider";
import { Project } from "@/models/project.model";
import Image from "next/image";
import Link from "next/link";

/* Display labels for the skill names stored in cms/projects.ts */
const SKILL_LABELS: Record<string, string> = {
  MSSQLS: "SQL Server",
  NextJS: "Next.js",
  NodeJS: "Node.js",
  NuxtJS: "Nuxt",
};

const SPANS = [7, 5, 5, 7];
const IMG_HEIGHTS = [320, 240, 240, 320];

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const { lang, t } = useLang();

  return (
    <div className="work-grid">
      {projects.map((project, i) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className={`work-card sh-9 press ${
            SPANS[i % 4] === 7 ? "span-7" : "span-5"
          }`}
        >
          <div
            className="work-card__img"
            style={{ height: IMG_HEIGHTS[i % 4] }}
          >
            <Image
              src={project.preview.url}
              alt={project.preview.alt}
              fill
              sizes="(max-width: 820px) 100vw, 620px"
              style={{ objectFit: "cover" }}
            />
            {project.sfx && <div className="sfx sfx--card">{project.sfx}</div>}
          </div>
          <div className="work-card__body">
            <div className="work-card__head">
              <h3 className="work-card__title">{project.title}</h3>
              <span className="work-card__open">{t.openCase}</span>
            </div>
            <p className="work-card__desc">
              {project.description?.[lang] ?? project.subtitle}
            </p>
            <div className="tag-row work-card__tags">
              {project.skill.map((skill) => (
                <span key={skill} className="tag">
                  {SKILL_LABELS[skill] ?? skill}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
