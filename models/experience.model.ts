import type { Skill } from "./skill.model";

export interface Experience {
  id: string;
  company: string;
  description: any;
  jobTitle: string;
  order: number;
  skill: Skill[];
  yearEnd: number;
  yearStart: number;
}

export interface AllExperiencesData {
  data: {
    allExperiences: Experience[];
  };
}
