"use client";

import SkillIcon from "@/components/skill-icon/skill-icon";
import { Project } from "@/models/project.model";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ItemProject = ({ preview, title, skill, slug }: Project) => {
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
      </div>
      <div className="project-body">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
          }}
        >
          <h3 style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
          <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
            {skill.slice(0, 3).map((s, index) => (
              <SkillIcon name={s} key={index} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ItemProject;
