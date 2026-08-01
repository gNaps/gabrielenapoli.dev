"use client";

import { Project } from "@/models/project.model";
import { useRouter } from "next/navigation";
import ContainerAnimated from "../container-animated/container-animated";
import ItemProject from "./item-project/item-project";

interface ListProjectsProps {
  projects: Project[];
  homepage: boolean;
}

const ListProjects = ({ projects, homepage }: ListProjectsProps) => {
  const router = useRouter();

  return (
    <>
      {homepage && (
        <ContainerAnimated>
          <div className="section-head">
            <div>
              <div className="eyebrow">制作 · Selected work</div>
              <h2 style={{ marginTop: 14 }}>
                Things I&apos;ve <span className="grad-violet">shipped</span>.
              </h2>
            </div>
            <button className="pill" onClick={() => router.push("/projects")}>
              <span className="kana" aria-hidden style={{ fontSize: 11 }}>
                一覧
              </span>
              View all
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
          </div>
        </ContainerAnimated>
      )}
      <div className="grid-2">
        {projects.map((p) => (
          <ContainerAnimated key={p.id}>
            <ItemProject {...p} />
          </ContainerAnimated>
        ))}
      </div>
    </>
  );
};

export default ListProjects;
