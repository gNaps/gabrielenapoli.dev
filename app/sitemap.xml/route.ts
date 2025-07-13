import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://gabrielenapoli.dev";

  const staticPages = ["", "about", "projects", "stories"].map(
    (page) => `${baseUrl}/${page}`
  );

  // Puoi aggiungere anche le rotte dinamiche da DB o API
  // const projects = await getProjectsFromApi();
  // const dynamicPages = projects.map(p => `${baseUrl}/projects/${p.slug}`);

  const urls = [...staticPages];

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
