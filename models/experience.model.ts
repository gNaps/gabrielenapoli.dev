import type { LocalizedText } from "@/cms/copy";
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
  /* Manga timeline fields: the home "story arc" section renders
     chapters chronologically (CH.01 first), so sort by chapter,
     not by `order` (which is reverse-chronological). The body text
     is the experience MDX (cms/contents/experiences), injected
     into `description` at page level. */
  chapter?: LocalizedText;
  chapterYear?: LocalizedText;
  tags?: string[];
}

export interface AllExperiencesData {
  data: {
    allExperiences: Experience[];
  };
}
