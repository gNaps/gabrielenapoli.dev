import WorkArchive from "@/components/sections/work-archive";
import { projectsListApi } from "@/utils/api.utils";
import { Metadata } from "next";

const ProjectsPage = async () => {
  const projects = await projectsListApi(process.env.AUTH_TOKEN ?? "");
  return (
    <div className="gn-page">
      <WorkArchive projects={projects} />
    </div>
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
