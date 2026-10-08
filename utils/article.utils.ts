import fs from "node:fs";
import path from "node:path";
import { headingId, type ArticleHeading } from "./heading.utils";

/** Read headings once during prerendering, so the index needs no DOM discovery. */
export function articleOutline(slug: string) {
  const source = fs.readFileSync(
    path.join(process.cwd(), "cms/contents/stories", `${slug}.mdx`),
    "utf8",
  );
  const headings: ArticleHeading[] = [];
  let fence: string | undefined;
  for (const line of source.split("\n")) {
    const code = /^\s*(`{3,}|~{3,})/.exec(line);
    if (code) {
      fence = fence === code[1][0] ? undefined : code[1][0];
      continue;
    }
    if (fence) continue;
    const match = /^(#{2,3})\s+(.+?)\s*#*$/.exec(line);
    if (!match) continue;
    const text = match[2]
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[*_`]/g, "");
    headings.push({ id: headingId(text), text, level: match[1].length });
  }
  const prose = source
    .replace(/```[\s\S]*?```|~~~[\s\S]*?~~~/g, "")
    .replace(/<[^>]+>/g, "");
  return {
    headings,
    readingMinutes: Math.max(
      1,
      Math.ceil(prose.trim().split(/\s+/).length / 200),
    ),
  };
}
