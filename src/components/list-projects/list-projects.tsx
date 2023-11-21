import { $, component$ } from "@builder.io/qwik";
import type { AllProjectsData } from "~/models/project.model";
import { ContainerAnimated } from "../container-animated/container-animated";
import ItemProject from "./item-project/item-project";
import Button from "../button/button";
import { useNavigate } from "@builder.io/qwik-city";

interface ListProjectsProps {
  projects: AllProjectsData;
  homepage: boolean;
}

export default component$(({ projects, homepage }: ListProjectsProps) => {
  const nav = useNavigate();

  const openProjects = $(async () => {
    await nav(`/projects`);
  });

  return (
    <>
      {homepage && (
        <ContainerAnimated client:visible>
          <div class="flex justify-between mb-6">
            <h4>LATEST PROJECTS</h4>
            <div class="hidden md:block">
              <Button
                type="outlined"
                value="View all"
                size="small"
                onClick={openProjects}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </ContainerAnimated>
      )}
      <div class="flex flex-col md:flex-row md:flex-wrap">
        {projects.data.allProjects.map((p) => (
          <div class="mb-8 md:odd:pr-5 md:even:pl-5 w-full md:w-1/2" key={p.id}>
            <ContainerAnimated client:visible>
              <ItemProject {...p} />
            </ContainerAnimated>
          </div>
        ))}
      </div>
      {homepage && (
        <ContainerAnimated client:visible>
          <div class="md:hidden flex justify-center">
            <Button type="outlined" value="View all" onClick={openProjects}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Button>
          </div>
        </ContainerAnimated>
      )}
    </>
  );
});
