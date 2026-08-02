"use client";

import { useReveal } from "@/components/layout/use-reveal";
import { useLang } from "@/components/providers/language-provider";
import { Project } from "@/models/project.model";
import Link from "next/link";
import WorkGrid from "./work-grid";

export default function WorkSection({
  projects,
  viewAllHref,
}: {
  projects: Project[];
  viewAllHref?: string;
}) {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();

  return (
    <section id="work" ref={ref} className="reveal mt-section">
      <div className="section-head">
        <h2 className="section-title">{t.workTitle}</h2>
        <span className="eyebrow">
          {t.evWork}
          {viewAllHref && (
            <>
              {"  ·  "}
              <Link href={viewAllHref}>{t.viewAll}</Link>
            </>
          )}
        </span>
      </div>
      <WorkGrid projects={projects} />
    </section>
  );
}
