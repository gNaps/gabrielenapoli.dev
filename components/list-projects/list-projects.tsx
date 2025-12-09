"use client";

import { Project } from "@/models/project.model";
import { useRouter } from "next/navigation";
import Button from "../button/button";
import ContainerAnimated from "../container-animated/container-animated";
import ItemProject from "./item-project/item-project";

interface ListProjectsProps {
  projects: Project[];
  homepage: boolean;
}

const ListProjects = ({ projects, homepage }: ListProjectsProps) => {
  const router = useRouter();

  const openProjects = () => {
    router.push(`/projects`);
  };

  return (
    <>
      {homepage && (
        <ContainerAnimated>
          <div className="flex justify-between mb-6">
            <p className="h4">LATEST PROJECTS</p>
            <div className="hidden md:block">
              <Button
                type="outlined"
                value="View all"
                size="small"
                onClick={openProjects}
                id={"button-view-all-projects"}
                name={"button-view-all-projects"}
              />
            </div>
          </div>
        </ContainerAnimated>
      )}
      <div className="flex flex-col md:flex-row md:flex-wrap">
        {projects.map((p) => (
          <div
            className="mb-8 md:odd:pr-5 md:even:pl-5 w-full md:w-1/2"
            key={p.id}
          >
            <ContainerAnimated>
              <ItemProject {...p} />
            </ContainerAnimated>
          </div>
        ))}
      </div>
      {homepage && (
        <ContainerAnimated>
          <div className="md:hidden flex justify-center">
            <Button type="outlined" value="View all" onClick={openProjects} />
          </div>
        </ContainerAnimated>
      )}
    </>
  );
};

export default ListProjects;
