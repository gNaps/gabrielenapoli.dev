import { projectDetails } from "@/cms/project-details";
import { allProjects } from "@/cms/projects";
import ProjectCase from "@/components/detail/project-case";
import { getPostBySlug, projectDetailApi } from "@/utils/api.utils";
import fs from "fs";
import { Metadata } from "next";
import path from "path";
import { notFound } from "next/navigation";

const postsDirectory = path.join(process.cwd(), "cms/contents/projects");

export async function generateStaticParams() {
  const slugs = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: [file.replace(/\.mdx$/, "")] }));

  return slugs;
}

export const dynamicParams = false;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const param = await params;
  const slug = param.slug.join("/");
  const project = await projectDetailApi(slug);
  if (!project) notFound();

  return {
    alternates: { canonical: `/projects/${slug}` },
    title: `${project.title} | Gabriele Napoli`,
    description: project.description?.en ?? project.subtitle,
    openGraph: {
      url: `/projects/${slug}`,
      title: `${project.title} | Gabriele Napoli`,
      description: project.description?.en ?? project.subtitle,
      images: [{ url: `https://gabrielenapoli.dev${project.preview.url}` }],
    },
  };
}

const ProjectDetailPage = async ({ params }: any) => {
  const param = await params;
  const slug = param.slug.join("/");
  const project = await projectDetailApi(slug);
  if (!project) notFound();
  const detail = projectDetails[slug];
  const content = detail ? null : await getPostBySlug(slug);

  const others = allProjects
    .filter((p) => p.slug !== slug && p.homepage)
    .slice(0, 3)
    .map((p) => ({ title: p.title, slug: p.slug }));

  return (
    <ProjectCase
      project={project}
      detail={detail}
      content={content}
      others={others}
    />
  );
};

export default ProjectDetailPage;
