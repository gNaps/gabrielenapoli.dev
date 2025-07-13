import ProjectDetail from "@/components/project-detail/project-detail";
import { projectDetailApi } from "@/utils/api.utils";
import { Metadata } from "next";

export const getProject = async (slug: string) => {
  const token = process.env.AUTH_TOKEN;
  return await projectDetailApi(slug, token ?? "");
};

type ProjectDetailPageProps = {
  params: { slug: string };
};

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const param = await params;
  const project = await getProject(param.slug);

  return (
    <>
      <div className="py-8 px-6 lg:px-36 lg:py-24 xl:px-100">
        <ProjectDetail {...project.data.project} />
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
