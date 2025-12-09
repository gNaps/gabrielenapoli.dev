import type { Skill } from "./skill.model";

export interface Experience {
  id: number;
  slug: string;
  company: string;
  description?: any;
  jobTitle: string;
  order: number;
  skills: Partial<Skill>[];
  yearEnd?: number;
  yearStart: number;
  logo: string;
}

export interface AllExperiencesData {
  data: {
    allExperiences: Experience[];
  };
}
