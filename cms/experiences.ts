import { Experience } from "@/models/experience.model";

export const allExperiences: Experience[] = [
  {
    id: 1,
    slug: "kalpa",
    jobTitle: "Frontend",
    order: 4,
    yearEnd: 2022,
    yearStart: 2021,
    skills: [
      {
        id: 13,
      },
    ],
    company: "Kalpa",
    logo: "/cms/logo_kalpa.webp",
    chapter: { en: "CH.02", it: "CAP.02" },
    chapterYear: { en: "2021 - 2022", it: "2021 - 2022" },
    tags: ["Angular", "React", "Docker", "AWS"],
  },
  {
    id: 2,
    slug: "sbi-2",
    jobTitle: "Fullstack",
    order: 1,
    yearStart: 2024,
    skills: [
      {
        id: 13,
      },
      {
        id: 5,
      },
      {
        id: 4,
      },
    ],
    company: "SB Italia",
    logo: "/cms/logo_sbi.webp",
    chapter: { en: "CH.05", it: "CAP.05" },
    chapterYear: { en: "2024 - Present", it: "2024 - Oggi" },
    tags: ["Angular 20+", ".NET Core", "Microservices", "PWA"],
  },
  {
    id: 3,
    slug: "sbi",
    jobTitle: "Fullstack",
    order: 5,
    yearEnd: 2021,
    yearStart: 2018,
    skills: [
      {
        id: 13,
      },
      {
        id: 6,
      },
      {
        id: 5,
      },
      {
        id: 4,
      },
    ],
    company: "SB Italia",
    logo: "/cms/logo_sbi.webp",
    chapter: { en: "CH.01", it: "CAP.01" },
    chapterYear: { en: "2018 - 2021", it: "2018 - 2021" },
    tags: ["C#", "SQL Server", "AngularJS", "Ionic"],
  },
  {
    id: 4,
    slug: "scuolazoo",
    jobTitle: "Fullstack",
    order: 3,
    yearEnd: 2024,
    yearStart: 2022,
    skills: [
      {
        id: 13,
      },
      {
        id: 8,
      },
      {
        id: 3,
      },
      {
        id: 7,
      },
      {
        id: 16,
      },
    ],
    company: "Scuolazoo",
    logo: "/cms/logo_scuolazoo.webp",
    chapter: { en: "CH.03", it: "CAP.03" },
    chapterYear: { en: "2022 - 2024", it: "2022 - 2024" },
    tags: ["Angular", "Nuxt", "NestJS", "MongoDB", "Kubernetes"],
  },
  {
    id: 5,
    slug: "claranet",
    jobTitle: "Frontend",
    order: 2,
    yearEnd: 2024,
    yearStart: 2024,
    skills: [
      {
        id: 15,
      },
    ],
    company: "Claranet",
    logo: "/cms/logo_claranet.webp",
    chapter: { en: "CH.04", it: "CAP.04" },
    chapterYear: { en: "2024", it: "2024" },
    tags: ["Next.js", "TDD", "SSR / SSG"],
  },
];
