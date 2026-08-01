"use client";

import SkillIcon from "@/components/skill-icon/skill-icon";
import { Project } from "@/models/project.model";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ItemProject = ({ preview, title, subtitle, skill, slug }: Project) => {
  const router = useRouter();

  const openDetailProject = () => {
    try {
      (window as any).goatcounter?.count?.({
        path: "click-project",
        title: slug,
        event: true,
      });
    } catch {}
    router.push(`/projects/${slug}`);
  };

  return (
    <article
      className="card project-card"
      onClick={openDetailProject}
      style={{ cursor: "pointer" }}
    >
      <div className="project-thumb">
        <Image
          src={preview.url}
          alt={preview.alt ?? ""}
          width={800}
          height={400}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <span className="speed-lines" aria-hidden />
      </div>
      <div className="project-body">
        <div className="project-head">
          <h3>{title}</h3>
          <span className="card-arrow" aria-hidden>
            <svg
              width={14}
              height={14}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ fill: "none" }}
            >
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </span>
        </div>
        {subtitle && <p className="project-sub">{subtitle}</p>}
        <div className="project-foot">
          <div className="stack">
            {skill.slice(0, 4).map((s, index) => (
              <SkillIcon name={s} key={index} />
            ))}
          </div>
          {skill.length > 4 && (
            <span className="kicker">+{skill.length - 4}</span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ItemProject;
