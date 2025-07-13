"use client";

import { AllProjectsData } from "@/models/project.model";
import { useRouter } from "next/navigation";
import Button from "../button/button";
import ContainerAnimated from "../container-animated/container-animated";
import ItemProject from "./item-project/item-project";

interface ListProjectsProps {
  projects: AllProjectsData;
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
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </ContainerAnimated>
      )}
      <div className="flex flex-col md:flex-row md:flex-wrap">
        {projects.data.allProjects.map((p) => (
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
            <Button type="outlined" value="View all" onClick={openProjects}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                id={"button-open-project"}
                name={"button-open-project"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Button>
          </div>
        </ContainerAnimated>
      )}
    </>
  );
};

export default ListProjects;
