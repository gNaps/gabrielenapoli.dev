import type { LocalizedText } from "@/cms/copy";
import type { Image } from "./image.model";

export interface CourseSection {
  title: LocalizedText;
  chapterSlugs: string[];
}

export interface Course {
  language?: "en" | "it";
  id: number;
  slug: string;
  title: string;
  kana: string;
  description: LocalizedText;
  preview: Image;
  /* Ordered story slugs: the chapters, first to last. Canonical
     order, used for numbering and prev/next navigation. */
  chapterSlugs: string[];
  /* Optional grouping for the course index page. The slugs here
     must match chapterSlugs (same entries, same order). */
  sections?: CourseSection[];
}
