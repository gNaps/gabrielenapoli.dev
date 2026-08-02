import { allCourses } from "@/cms/courses";
import { allProjects } from "@/cms/projects";
import { allStories } from "@/cms/stories";
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://gabrielenapoli.dev";

  const staticPages = ["", "projects", "stories"].map(
    (page) => `${baseUrl}/${page}`
  );
  const projectPages = allProjects.map(
    (project) => `${baseUrl}/projects/${project.slug}`
  );
  const storyPages = allStories.map(
    (story) => `${baseUrl}/stories/${story.slug}`
  );
  const coursePages = allCourses.map(
    (course) => `${baseUrl}/series/${course.slug}`
  );

  const urls = [...staticPages, ...projectPages, ...storyPages, ...coursePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `
        )
        .join("")}
    </urlset>
  `;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
