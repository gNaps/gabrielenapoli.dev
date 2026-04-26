"use client";

import { Project } from "@/models/project.model";
import ContainerAnimated from "../container-animated/container-animated";
import ListProjects from "../list-projects/list-projects";

interface ProjectProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectProps) => {
  return (
    <>
      <ContainerAnimated>
        {/* <div className="eyebrow" style={{ marginBottom: 18 }}>
          Projects
        </div> */}
        <h1 className="glow-wrap" style={{ maxWidth: 900 }}>
          Things I&apos;ve{" "}
          <span className="grad">designed &amp; shipped.</span>
        </h1>
        <p style={{ marginTop: 28, maxWidth: 620, fontSize: 16 }}>
          A mix of client work, internal tools and passion projects. Each one
          taught me something I still use today.
        </p>
      </ContainerAnimated>

      <div className="mt-xl">
        <ListProjects projects={projects} homepage={false} />
      </div>
    </>
  );
};

export default Projects;
