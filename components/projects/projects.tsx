"use client";

import { Project } from "@/models/project.model";
import ContainerAnimated from "../container-animated/container-animated";
import GradientText from "../gradient-text/gradient-text";
import ListProjects from "../list-projects/list-projects";

interface ProjectProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectProps) => {
  return (
    <>
      <ContainerAnimated>
        <p className="h4">My projects.</p>
        <h1 className="mt-3 lg:mt-7">
          Remember the words:{" "}
          <GradientText animationSpeed={3}>coding is coming.</GradientText>
        </h1>
        <p className="mt-4 lg:mt-6 subtitle">
          Here you can find some of my works, both personal of for work.
        </p>
      </ContainerAnimated>

      <div className="my-16">
        <ListProjects projects={projects} homepage={false} />
      </div>
    </>
  );
};

export default Projects;
