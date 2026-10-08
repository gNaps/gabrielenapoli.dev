import { allCourses } from "@/cms/courses";
import { allProjects } from "@/cms/projects";
import { allStories } from "@/cms/stories";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://gabrielenapoli.dev";

  const staticPages = ["", "projects", "stories"].map(
    (page) => `${baseUrl}/${page}`,
  );
  const projectPages = allProjects.map(
    (project) => `${baseUrl}/projects/${project.slug}`,
  );
  const storyPages = allStories.flatMap((story) => [
    `${baseUrl}/stories/${story.slug}`,
    `${baseUrl}/stories/en/${story.slug}`,
  ]);
  const coursePages = allCourses.flatMap((course) => [
    `${baseUrl}/series/${course.slug}`,
    `${baseUrl}/series/en/${course.slug}`,
  ]);

  const urls = [...staticPages, ...projectPages, ...storyPages, ...coursePages];
  const modified = new Map<string, string | undefined>(
    allStories
      .filter((story) => story.updatedAt)
      .flatMap((story) => [
        [`${baseUrl}/stories/${story.slug}`, story.updatedAt] as const,
        [`${baseUrl}/stories/en/${story.slug}`, story.updatedAt] as const,
      ]),
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
            <url>
              <loc>${url}</loc>
              ${modified.has(url) ? `<lastmod>${modified.get(url)}</lastmod>` : ""}
            </url>
          `,
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
