import { getSiteCopy } from "@/cms/site-copy";
import { Project } from "@/models/project.model";
import Image from "next/image";
import Link from "next/link";
import { skillLabel } from "@/utils/project.utils";
import ProjectControls from "./project-controls";
export default function WorkSection({
  projects,
  viewAllHref = "/projects",
}: {
  projects: Project[];
  viewAllHref?: string;
}) {
  const { lang, t } = getSiteCopy();
  return (
    <section
      id="work"
      className="work-scroll section-dark"
      data-sticky="projects"
    >
      <div className="work-stage">
        <div className="work-heading">
          <div>
            <p className="eyebrow accent">{t.evWork}</p>
            <h2 className="section-title">{t.workTitle}</h2>
          </div>
          <div className="work-heading-aside">
            <Link href={viewAllHref} className="text-link">
              {lang === "en" ? "View all projects →" : "Tutti i progetti →"}
            </Link>
            <ProjectControls total={projects.length} />
            <div className="work-progress" aria-hidden="true">
              <div data-bar />
            </div>
          </div>
        </div>
        <div className="project-track" id="project-track" data-track>
          {projects.map((project, i) => (
            <article
              key={project.slug}
              className="scroll-project"
              aria-label={`${i + 1} of ${projects.length}: ${project.title}`}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="scroll-project-image"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image
                  src={project.preview.url}
                  alt={project.preview.alt}
                  fill
                  sizes="(max-width: 767px) 85vw, 880px"
                  className="cover"
                />
              </Link>
              <div className="scroll-project-body">
                <div>
                  <div className="project-name">
                    <span className="eyebrow">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description?.[lang] ?? project.subtitle}</p>
                </div>
                <div className="project-links">
                  <span>{project.skill.map(skillLabel).join(" · ")}</span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-link"
                    aria-label={`${t.openCase} ${project.title}`}
                  >
                    {t.openCase}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
