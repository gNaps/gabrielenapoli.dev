import type { Lang } from "@/cms/copy";
import { storyTranslations } from "@/cms/story-translations";
import type { Story } from "@/models/story.model";
import type { Course } from "@/models/course.model";

export function originalStorySlug(slug: string) {
  return slug.startsWith("en/") ? slug.slice(3) : slug;
}

export function storyLanguages(slug: string) {
  const original = originalStorySlug(slug);
  return { it: `/stories/${original}`, en: `/stories/en/${original}` };
}

export function localizeStory(story: Story, language: Lang): Story {
  if (language === "it") return story;
  const translation = storyTranslations[story.id];
  if (!translation)
    throw new Error(`Missing English metadata for ${story.slug}`);
  return {
    ...story,
    ...translation,
    slug: `en/${story.slug}`,
    language,
    preview: { ...story.preview, alt: translation.title },
  };
}

export function courseLanguages(slug: string) {
  return { it: `/series/${slug}`, en: `/series/en/${slug}` };
}

const courseTitles: Record<number, string> = {
  1: "The Galactic Guide to Angular",
  2: "Web Development from Scratch",
};

export function localizeCourse(course: Course, language: Lang): Course {
  const title = language === "en" ? courseTitles[course.id] : course.title;
  return {
    ...course,
    language,
    title,
    preview: { ...course.preview, alt: title },
  };
}
