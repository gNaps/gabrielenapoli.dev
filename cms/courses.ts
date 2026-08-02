import { Course } from "@/models/course.model";

const GUIDE_PREFIX = "galactic-guide-to-web-developing/angular-in-10-steps";
const WEB_ZERO_PREFIX = "galactic-guide-to-web-developing/sviluppo-web-da-zero";

const WEB_ZERO_INTRO = [
  `${WEB_ZERO_PREFIX}/introduzione-allo-sviluppo-web/step-1`,
  `${WEB_ZERO_PREFIX}/introduzione-allo-sviluppo-web/step-2`,
  `${WEB_ZERO_PREFIX}/introduzione-allo-sviluppo-web/step-3`,
];

const WEB_ZERO_FRONTEND = [
  `${WEB_ZERO_PREFIX}/il-frontend/step-1`,
  `${WEB_ZERO_PREFIX}/il-frontend/step-2`,
  `${WEB_ZERO_PREFIX}/il-frontend/step-3`,
  `${WEB_ZERO_PREFIX}/il-frontend/step-4`,
  `${WEB_ZERO_PREFIX}/il-frontend/step-5`,
  `${WEB_ZERO_PREFIX}/il-frontend/step-6`,
];

const WEB_ZERO_BACKEND = [
  `${WEB_ZERO_PREFIX}/il-backend/step-1`,
  `${WEB_ZERO_PREFIX}/il-backend/step-2`,
  `${WEB_ZERO_PREFIX}/il-backend/step-3`,
  `${WEB_ZERO_PREFIX}/il-backend/step-4`,
  `${WEB_ZERO_PREFIX}/il-backend/step-5`,
  `${WEB_ZERO_PREFIX}/il-backend/step-6`,
];

const WEB_ZERO_DATABASE = [
  `${WEB_ZERO_PREFIX}/i-database/step-1`,
  `${WEB_ZERO_PREFIX}/i-database/step-2`,
  `${WEB_ZERO_PREFIX}/i-database/step-3`,
  `${WEB_ZERO_PREFIX}/i-database/step-4`,
];

const WEB_ZERO_CICLO = [
  `${WEB_ZERO_PREFIX}/il-ciclo-completo/step-1`,
  `${WEB_ZERO_PREFIX}/il-ciclo-completo/step-2`,
];

const WEB_ZERO_BEST_PRACTICE = [
  `${WEB_ZERO_PREFIX}/best-practice/step-1`,
  `${WEB_ZERO_PREFIX}/best-practice/step-2`,
  `${WEB_ZERO_PREFIX}/best-practice/step-3`,
];

export const allCourses: Course[] = [
  {
    id: 1,
    slug: "guida-galattica-ad-angular",
    title: "Guida galattica ad Angular",
    kana: "銀河のガイド",
    description: {
      en: "From zero to a complete app in ten chapters: standalone components, signals, router, forms, HTTP and a real project to close the loop. Written for people who want to learn modern Angular without dragging a decade of habits along.",
      it: "Da zero a un'app completa in dieci capitoli: componenti standalone, signals, router, form, HTTP e un progetto vero per chiudere il cerchio. Scritta per chi vuole imparare l'Angular moderno senza trascinarsi dietro dieci anni di abitudini.",
    },
    preview: {
      url: "/cms/angular_in_10_steps.webp",
      title: "guida-galattica-ad-angular",
      alt: "Guida galattica ad Angular",
    },
    chapterSlugs: [
      `${GUIDE_PREFIX}/step-1`,
      `${GUIDE_PREFIX}/step-2`,
      `${GUIDE_PREFIX}/step-3`,
      `${GUIDE_PREFIX}/step-4`,
      `${GUIDE_PREFIX}/step-5`,
      `${GUIDE_PREFIX}/step-6`,
      `${GUIDE_PREFIX}/step-7`,
      `${GUIDE_PREFIX}/step-8`,
      `${GUIDE_PREFIX}/step-9`,
      `${GUIDE_PREFIX}/step-10`,
    ],
  },
  {
    id: 2,
    slug: "sviluppo-web-da-zero",
    title: "Sviluppo web da zero",
    kana: "ゼロからのウェブ開発",
    description: {
      en: "The series to start from: what web development actually is, how a modern web app works and the foundations (HTML, CSS, JavaScript) explained from scratch, no prior knowledge assumed.",
      it: "La serie da cui partire: cos'è davvero lo sviluppo web, come funziona una web app moderna e le fondamenta (HTML, CSS, JavaScript) spiegate da zero, senza dare nulla per scontato.",
    },
    preview: {
      url: "",
      title: "sviluppo-web-da-zero",
      alt: "Sviluppo web da zero",
    },
    chapterSlugs: [
      ...WEB_ZERO_INTRO,
      ...WEB_ZERO_FRONTEND,
      ...WEB_ZERO_BACKEND,
      ...WEB_ZERO_DATABASE,
      ...WEB_ZERO_CICLO,
      ...WEB_ZERO_BEST_PRACTICE,
    ],
    sections: [
      {
        title: {
          en: "Introduction to web development",
          it: "Introduzione allo sviluppo web",
        },
        chapterSlugs: WEB_ZERO_INTRO,
      },
      {
        title: {
          en: "The frontend",
          it: "Il frontend",
        },
        chapterSlugs: WEB_ZERO_FRONTEND,
      },
      {
        title: {
          en: "Backend: the heart of the app",
          it: "Backend: il cuore dell'app",
        },
        chapterSlugs: WEB_ZERO_BACKEND,
      },
      {
        title: {
          en: "Databases",
          it: "I database",
        },
        chapterSlugs: WEB_ZERO_DATABASE,
      },
      {
        title: {
          en: "Putting it all together: the full cycle",
          it: "Collegare il tutto: il ciclo completo",
        },
        chapterSlugs: WEB_ZERO_CICLO,
      },
      {
        title: {
          en: "Best practices and next steps",
          it: "Best practice e prossimi passi",
        },
        chapterSlugs: WEB_ZERO_BEST_PRACTICE,
      },
    ],
  },
];
