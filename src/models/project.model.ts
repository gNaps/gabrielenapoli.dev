import type { Image } from "./image.model";
import type { Skill } from "./skill.model";

export interface Project {
  id: string;
  homepage: boolean;
  title: string;
  slug: string;
  preview: Image;
  skill: Skill[];
}

export interface AllProjectsData {
  data: {
    allProjects: Project[];
  };
}
