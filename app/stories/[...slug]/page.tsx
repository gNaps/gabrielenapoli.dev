import StoryDetail from "@/components/story-detail/story-detail";
import { getStoriesBySlug, storyDetailApi } from "@/utils/api.utils";
import fs from "fs";
import { Metadata } from "next";
import path from "path";

const useStory = async (slug: string) => {
  const token = process.env.AUTH_TOKEN;
  return await storyDetailApi(slug, token ?? "");
};

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

const StoryDetailPage = async ({ params }: any) => {
  const param = await params;
  const story = await useStory(param.slug.join("/"));
  const content = await getStoriesBySlug(param.slug.join("/"));
  story.content = content;

  return (
    <>
      <div className="gn-page">
        <StoryDetail {...story} />
      </div>
    </>
  );
};

export default StoryDetailPage;

export const metadata: Metadata = {
  title: "Gabriele Napoli | Fullstack Developer",
  description: `I’m a senior Angular and React developer. For backend, I like to use Node.js and, in
            particular, Fastify with Prisma.`,
  keywords: [
    "Gabriele",
    "Napoli",
    "Developer",
    "Angular",
    "React",
    "Node",
    "About",
  ],
};
