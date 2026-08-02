import type { LocalizedText } from "@/cms/copy";
import type { Image } from "./image.model";

export interface Project {
  id: string;
  homepage: boolean;
  title: string;
  slug: string;
  preview: Image;
  skill: string[];
  subtitle: string;
  urlGithub: string;
  urlPreview: string;
  gallery?: Image[];
  content?: any;
  /* Manga card extras: cards without them fall back to `subtitle`
     and render without a sound-effect overlay. */
  sfx?: string;
  description?: LocalizedText;
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
