import { articleOutline } from "@/utils/article.utils";
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
import { notFound } from "next/navigation";
import {
  localizeCourse,
  localizeStory,
  originalStorySlug,
  storyLanguages,
} from "@/utils/content-language.utils";
import {
  breadcrumbs,
  personStructuredData,
  PERSON_ID,
  SITE_URL,
} from "@/utils/seo.utils";

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
  const story = await storyDetailApi(slug);
  if (!story) notFound();

  return {
    alternates: {
      canonical: `/stories/${slug}`,
      languages: storyLanguages(slug),
    },
    title: `${story.title} | Gabriele Napoli`,
    description: story.description,
    twitter: {
      card: "summary_large_image",
      title: story.title,
      description: story.description,
      images: [story.preview.url || "/opengraph-image"],
    },
    openGraph: {
      url: `/stories/${slug}`,
      type: "article",
      publishedTime: story.writtenAt,
      title: `${story.title} | Gabriele Napoli`,
      description: story.description,
      locale: story.language === "it" ? "it_IT" : "en_US",
      alternateLocale: story.language === "it" ? "en_US" : "it_IT",
      modifiedTime: story.updatedAt,
      authors: ["https://gabrielenapoli.dev"],
      images: [{ url: story.preview.url || "/opengraph-image" }],
    },
  };
}

const StoryDetailPage = async ({ params }: any) => {
  const param = await params;
  const slug = param.slug.join("/");
  const story = await storyDetailApi(slug);
  if (!story) notFound();
  const content = await getStoriesBySlug(slug);
  const outline = articleOutline(slug);

  const membership = courseForStoryApi(slug);
  let courseNav: CourseNav | undefined;
  if (membership) {
    const { index } = membership;
    const course = localizeCourse(membership.course, story.language);
    const chapterStory = (i: number) => {
      const s = allStories.find(
        (candidate) => candidate.slug === course.chapterSlugs[i],
      );
      if (!s) return undefined;
      const localized = localizeStory(s, story.language);
      return { slug: localized.slug, title: localized.title };
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
    : allStories
        .filter(
          (s) =>
            s.slug !== originalStorySlug(slug) && !courseForStoryApi(s.slug),
        )
        .slice(0, 3)
        .map((s) => localizeStory(s, story.language));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${SITE_URL}/stories/${slug}#article`,
        url: `${SITE_URL}/stories/${slug}`,
        headline: story.title,
        description: story.description,
        inLanguage: story.language,
        dateModified: story.updatedAt,
        datePublished: story.writtenAt,
        author: {
          "@type": "Person",
          "@id": PERSON_ID,
          name: "Gabriele Napoli",
          url: "https://gabrielenapoli.dev",
        },
        image: `https://gabrielenapoli.dev${story.preview.url || "/opengraph-image"}`,
        mainEntityOfPage: `https://gabrielenapoli.dev/stories/${slug}`,
      },
      personStructuredData,
      breadcrumbs([
        { name: "Gabriele Napoli", path: "/" },
        { name: "Stories", path: "/stories" },
        ...(courseNav
          ? [
              {
                name: courseNav.courseTitle,
                path: `${story.language === "en" ? "/series/en/" : "/series/"}${courseNav.courseSlug}`,
              },
            ]
          : []),
        { name: story.title, path: `/stories/${slug}` },
      ]),
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <StoryPost
        story={story}
        content={content}
        others={others}
        courseNav={courseNav}
        headings={outline.headings}
        readingMinutes={outline.readingMinutes}
      />
    </>
  );
};

export default StoryDetailPage;
