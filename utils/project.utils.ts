export const skillLabel = (skill: string) =>
  ({
    MSSQLS: "SQL Server",
    NextJS: "Next.js",
    NodeJS: "Node.js",
    NuxtJS: "Nuxt",
  })[skill] ?? skill;

export function projectAccess(project: {
  urlPreview: string;
  urlGithub: string;
  urlDownload?: string;
}) {
  const access = [];
  if (project.urlDownload) access.push("Public download");
  if (project.urlPreview)
    access.push(
      project.urlPreview.includes("t.me/")
        ? "Public Telegram bot"
        : "Public demo",
    );
  if (project.urlGithub) access.push("Source code");
  return access.length ? access.join(" · ") : "Case study";
}
