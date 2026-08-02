import { allStories } from "@/cms/stories";
import StoryPost, { CourseNav } from "@/components/detail/story-post";
import {
  courseForStoryApi,
  getStoriesBySlug,
  storyDetailApi,
} from "@/utils/api.utils";
import fs from "fs";
import { Metadata } from "next";
import path from "path";

const postsDirectory = path.join(process.cwd(), "cms/contents/stories");

// Recursively collect every .mdx, including nested folders (e.g. multi-step
// guides), returning each as an array of path segments for the catch-all route.
function collectSlugs(dir: string, base: string[] = []): { slug: string[] }[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    if (entry.isDirectory()) {
      return collectSlugs(path.join(dir, entry.name), [...base, entry.name]);
    }
    if (entry.name.endsWith(".mdx")) {
      return [{ slug: [...base, entry.name.replace(/\.mdx$/, "")] }];
    }
    return [];
  });
}

export async function generateStaticParams() {
  return collectSlugs(postsDirectory);
}

export const dynamicParams = false;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const param = await params;
  const slug = param.slug.join("/");
  const story = await storyDetailApi(slug, "");

  return {
    title: `${story.title} | Gabriele Napoli`,
    description: `${story.title}: notes from the desk of Gabriele Napoli, fullstack developer in Milan.`,
    openGraph: {
      title: `${story.title} | Gabriele Napoli`,
      images: [{ url: `https://gabrielenapoli.dev${story.preview.url}` }],
    },
  };
}

const StoryDetailPage = async ({ params }: any) => {
  const param = await params;
  const slug = param.slug.join("/");
  const story = await storyDetailApi(slug, "");
  const content = await getStoriesBySlug(slug);

  const membership = courseForStoryApi(slug);
  let courseNav: CourseNav | undefined;
  if (membership) {
    const { course, index } = membership;
    const chapterStory = (i: number) => {
      const s = allStories.find(
        (candidate) => candidate.slug === course.chapterSlugs[i]
      );
      return s ? { slug: s.slug, title: s.title } : undefined;
    };
    courseNav = {
      courseSlug: course.slug,
      courseTitle: course.title,
      kana: course.kana,
      index,
      total: course.chapterSlugs.length,
      prev: index > 0 ? chapterStory(index - 1) : undefined,
      next:
        index < course.chapterSlugs.length - 1
          ? chapterStory(index + 1)
          : undefined,
    };
  }

  const others = membership
    ? []
    : allStories.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <StoryPost
      story={story}
      content={content}
      others={others}
      courseNav={courseNav}
    />
  );
};

export default StoryDetailPage;
