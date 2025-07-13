import type { Image } from "./image.model";
import type { Skill } from "./skill.model";

export interface Project {
  id: string;
  homepage: boolean;
  title: string;
  slug: string;
  preview: Image;
  skill: Skill[];
  subtitle: string;
  urlGithub: string;
  urlPreview: string;
  gallery: Image[];
  content: any;
}

export interface AllProjectsData {
  data: {
    allProjects: Project[];
  };
}

export interface ProjectData {
  data: {
    project: Project;
  };
}
