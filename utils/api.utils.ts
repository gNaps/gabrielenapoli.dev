import { allCourses } from "@/cms/courses";
import { allExperiences } from "@/cms/experiences";
import { allProjects } from "@/cms/projects";
import { allStacks } from "@/cms/stacks";
import { allStories } from "@/cms/stories";
import { Course } from "@/models/course.model";
import { Story } from "@/models/story.model";
import {
  localizeCourse,
  localizeStory,
  originalStorySlug,
} from "./content-language.utils";

export const projectsHomeApi = async () => {
  return allProjects.filter((p) => p.homepage).slice(0, 4);
};

export const storiesHomeApi = async () => {
  return allStories
    .filter((s) => s.homepage)
    .slice(0, 4)
    .map((s) => localizeStory(s, "en"));
};

export const projectsListApi = async () => {
  return allProjects;
};

export const storiesListApi = async () => {
  return allStories.map((s) => localizeStory(s, "en"));
};

export const projectDetailApi = async (slug: string) => {
  return allProjects.find((p) => p.slug === slug)!;
};

export const storyDetailApi = async (slug: string) => {
  const story = allStories.find((p) => p.slug === originalStorySlug(slug));
  return story
    ? localizeStory(story, slug.startsWith("en/") ? "en" : "it")
    : undefined;
};

export const experiencesApi = async () => {
  return [...allExperiences].sort((a, b) => a.order - b.order);
};

export const coursesApi = async () => {
  return allCourses.map((course) => localizeCourse(course, "en"));
};

export const courseDetailApi = async (slug: string) => {
  return allCourses.find((c) => c.slug === slug)!;
};

/* Chapters of a course, as Story entries in course order. */
export const courseChaptersApi = (course: Course): Story[] => {
  return course.chapterSlugs
    .map((slug) => allStories.find((s) => s.slug === slug))
    .filter((s): s is Story => !!s)
    .map((s) => localizeStory(s, course.language ?? "it"));
};

/* Course membership of a story, with its position, null if standalone. */
export const courseForStoryApi = (storySlug: string) => {
  for (const course of allCourses) {
    const index = course.chapterSlugs.indexOf(originalStorySlug(storySlug));
    if (index !== -1) return { course, index };
  }
  return null;
};

/* Stories that are not chapters of any course. */
export const standaloneStoriesApi = async () => {
  return allStories
    .filter((s) => !allCourses.some((c) => c.chapterSlugs.includes(s.slug)))
    .map((s) => localizeStory(s, "en"));
};

export const stacksApi = async () => {
  return allStacks;
};

export async function getPostBySlug(slug: string) {
  const { default: Content } = await import(
    `@/cms/contents/projects/${slug}.mdx`
  );

  return Content();
}

export async function getStoriesBySlug(slug: string) {
  const { default: Content } = await import(
    `@/cms/contents/stories/${slug}.mdx`
  );

  return Content();
}

export async function getExperienceBySlug(slug: string) {
  const { default: Content } = await import(
    `@/cms/contents/experiences/${slug}.mdx`
  );

  return Content();
}
