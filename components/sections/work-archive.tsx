"use client";

import { useLang } from "@/components/providers/language-provider";
import { Project } from "@/models/project.model";
import WorkGrid from "./work-grid";

export default function WorkArchive({ projects }: { projects: Project[] }) {
  const { t } = useLang();

  return (
    <section style={{ paddingTop: 52 }}>
      <div className="section-head">
        <h2 className="section-title">{t.workTitle}</h2>
        <span className="eyebrow">{t.evWork}</span>
      </div>
      <WorkGrid projects={projects} />
    </section>
  );
}
