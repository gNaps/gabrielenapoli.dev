import Projects from "@/components/projects/projects";
import { projectsListApi } from "@/utils/api.utils";
import { Metadata } from "next";

export const useProjects = async () => {
  const token = process.env.AUTH_TOKEN;
  return await projectsListApi(token ?? "");
};

const ProjectsPage = async () => {
  const projects = await useProjects();
  return (
    <>
      <div className="py-8 px-6 lg:px-36 lg:py-24 xl:px-100">
        <Projects projects={projects} />
      </div>
    </>
  );
};

export default ProjectsPage;

export const metadata: Metadata = {
  title: "Projects by Gabriele Napoli | Web Apps & Fullstack Solutions",
  description: `Explore the projects developed by Gabriele Napoli, from Angular dashboards to Node.js microservices, showcasing expertise in fullstack JavaScript.`,
  keywords: [
    "Gabriele Napoli",
    "Fullstack Developer",
    "Javascript Developer",
    "React Developer Milan",
    "Angular Developer Milan",
    "Node.js Developer",
    "Sviluppatore Web Milano",
    "Frontend Backend Developer",
  ],
};
