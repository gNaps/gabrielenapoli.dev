import { getSiteCopy } from "@/cms/site-copy";
import { Project } from "@/models/project.model";
import Image from "next/image";
import Link from "next/link";
import { skillLabel } from "@/utils/project.utils";
export default function WorkGrid({ projects }: { projects: Project[] }) {
  const { lang, t } = getSiteCopy();
  return (
    <div className="work-grid">
      {projects.map((project, i) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          data-skills={project.skill.map(skillLabel).join(" ")}
          className={`work-card ${i === 0 ? "work-card--featured" : ""}`}
        >
          <div className="work-card__img">
            <Image
              src={project.preview.url}
              alt={project.preview.alt}
              fill
              sizes={
                i === 0
                  ? "(max-width: 767px) 100vw, 580px"
                  : "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 380px"
              }
              className="cover"
            />
          </div>
          <div className="work-card__body">
            {i === 0 && (
              <span className="eyebrow accent">
                {lang === "en" ? "Featured" : "In evidenza"}
              </span>
            )}
            <div className="work-card__head">
              <h2 className="work-card__title">{project.title}</h2>
              <span className="work-card__open">{t.openCase}</span>
            </div>
            <p className="work-card__desc">
              {project.description?.[lang] ??
                project.subtitle.replace(
                  /^\p{Extended_Pictographic}[^\w]*/u,
                  "",
                )}
            </p>
            <div className="tag-row work-card__tags">
              {project.skill.map((skill) => (
                <span key={skill} className="tag">
                  {skillLabel(skill)}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
