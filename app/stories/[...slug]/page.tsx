import { PageProps } from "@/.next/types/app/page";
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

async function generateStaticParams() {
  const slugs = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(/\.mdx$/, "") }));

  return slugs;
}

const ProjectDetailPage = async ({ params }: PageProps) => {
  const param = await params;
  const story = await useStory(param.slug.join("/"));
  const content = await getStoriesBySlug(param.slug.join("/"));
  story.content = content;

  return (
    <>
      <div className="py-8 px-6 lg:px-36 lg:py-24 xl:px-100">
        <StoryDetail {...story} />
      </div>
    </>
  );
};

export default ProjectDetailPage;

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
