import { NextResponse } from "next/server";

export async function GET() {
  const content = `
    User-agent: *
    Allow: /
    Sitemap: https://gabrielenapoli.dev/sitemap.xml
  `;

  return new NextResponse(content.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
