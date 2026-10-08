import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from "./social-links.utils";

export const SITE_URL = "https://gabrielenapoli.dev";
export const PERSON_ID = `${SITE_URL}/#gabriele-napoli`;

/** A stable identity shared by the portfolio, author pages and articles. */
export const personStructuredData = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Gabriele Napoli",
  givenName: "Gabriele",
  familyName: "Napoli",
  alternateName: ["gNaps", "napsryu"],
  jobTitle: "Full Stack Developer",
  description:
    "Full stack developer in Milan, working with Angular, React, Next.js and Node.js since 2018.",
  url: SITE_URL,
  image: `${SITE_URL}/cms/about_me.webp`,
  homeLocation: { "@type": "Place", name: "Milan, Italy" },
  knowsAbout: [
    "Angular",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web development",
  ],
  sameAs: [GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL],
};

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
