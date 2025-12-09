import ProjectDetail from "@/components/project-detail/project-detail";
import { getPostBySlug, projectDetailApi } from "@/utils/api.utils";
import fs from "fs";
import { Metadata } from "next";
import path from "path";

const useProject = async (slug: string) => {
  const token = process.env.AUTH_TOKEN;
  return await projectDetailApi(slug, token ?? "");
};

const postsDirectory = path.join(process.cwd(), "cms/contents/projects");

async function generateStaticParams() {
  const slugs = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(/\.mdx$/, "") }));

  return slugs;
}

export const dynamicParams = false;

const ProjectDetailPage = async ({ params }: any) => {
  const param = await params;
  const project = await useProject(param.slug.join("/"));
  const content = await getPostBySlug(param.slug);
  project.content = content;

  return (
    <>
      <div className="py-8 px-6 lg:px-36 lg:py-24 xl:px-100">
        <ProjectDetail {...project} />
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
