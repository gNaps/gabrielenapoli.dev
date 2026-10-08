import WorkGrid from "@/components/sections/work-grid";
import { skillLabel } from "@/utils/project.utils";
import WorkArchive from "@/components/sections/work-archive";
import { projectsListApi } from "@/utils/api.utils";
import { Metadata } from "next";

const ProjectsPage = async () => {
  const projects = await projectsListApi();
  return (
    <div className="gn-page">
      <WorkArchive
        counts={Object.fromEntries(
          ["All", "React", "Next.js", "Angular", "Node.js"].map((filter) => [
            filter,
            projects.filter(
              (project) =>
                filter === "All" ||
                project.skill.some((skill) => skillLabel(skill) === filter),
            ).length,
          ]),
        )}
      >
        <WorkGrid projects={projects} />
      </WorkArchive>
    </div>
  );
};

export default ProjectsPage;

export const metadata: Metadata = {
  openGraph: {
    url: "/projects",
    title: "Projects by Gabriele Napoli",
    description:
      "SQL tools, web apps and side projects built with React, Next.js, Angular and Node.js. Explore the work and case studies.",
    images: [{ url: "/projects/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects by Gabriele Napoli",
    description:
      "SQL tools, web apps and side projects built with React, Next.js, Angular and Node.js. Explore the work and case studies.",
    images: ["/projects/opengraph-image"],
  },
  alternates: { canonical: "/projects" },
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
