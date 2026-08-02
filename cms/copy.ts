/* Bilingual UI copy, transcribed verbatim from the Claude Design
   project "Portfolio manga personale" (Portfolio.dc.html). MDX
   content stays English; this dictionary covers the chrome and the
   section shells only. */

export type Lang = "en" | "it";

export interface LocalizedText {
  en: string;
  it: string;
}

export interface Copy {
  nav: { href: string; label: string }[];
  ctaWork: string;
  ctaTalk: string;
  eyebrowVol: string;
  panelCaption: string;
  statusLabel: string;
  nowShipping: string;
  evAbout: string;
  evStory: string;
  evWork: string;
  evBlog: string;
  evCourse: string;
  chapterLabel: string;
  chaptersLabel: string;
  backToCourse: string;
  prevStep: string;
  nextStep: string;
  evNow: string;
  evUses: string;
  evContact: string;
  openCase: string;
  backToWork: string;
  resultLabel: string;
  nextLabel: string;
  backToBlog: string;
  readTime: string;
  readMore: string;
  showMore: string;
  showLess: string;
  viewAll: string;
  heroBlurb: string;
  aboutTitle: string;
  timelineTitle: string;
  workTitle: string;
  blogTitle: string;
  nowTitle: string;
  nowUpdated: string;
  usesTitle: string;
  contactTitle: string;
  contactBlurb: string;
  fieldName: string;
  fieldEmail: string;
  fieldMsg: string;
  fieldRequired: string;
  send: string;
  sending: string;
  sent: string;
  sendError: string;
  rights: string;
  builtIn: string;
  articleKind: string;
  bubbleLead: string;
  bubbleBody: string;
  shipDesc: string;
  facts: { big: string; label: string }[];
  stats: { label: string; width: number; value: string }[];
}

export const COPY: Record<Lang, Copy> = {
  en: {
    nav: [
      { href: "/#about", label: "About" },
      { href: "/#work", label: "Work" },
      { href: "/#timeline", label: "Story" },
      { href: "/#blog", label: "Blog" },
      { href: "/#now", label: "Now" },
      { href: "/#contact", label: "Contact" },
    ],
    ctaWork: "See the work →",
    ctaTalk: "Let's talk",
    eyebrowVol: "VOL. 01 · MILAN, ITALY",
    panelCaption: "CH.01 · NEW DEV HERO",
    statusLabel: "STATUS · 能力値",
    nowShipping: "NOW SHIPPING · 連載中",
    evAbout: "ABOUT · 自己紹介",
    evStory: "STORY ARC · 経歴",
    evWork: "WORKS · 作品",
    evBlog: "STORIES · 読み物",
    evCourse: "SERIES · 連載",
    chapterLabel: "CHAPTER",
    chaptersLabel: "CHAPTERS",
    backToCourse: "BACK TO THE SERIES",
    prevStep: "PREVIOUS",
    nextStep: "NEXT",
    evNow: "NOW · 現在",
    evUses: "USES · 道具",
    evContact: "CONTACT · 連絡",
    openCase: "OPEN →",
    backToWork: "BACK TO WORKS",
    resultLabel: "RESULT · 結果",
    nextLabel: "NEXT CHAPTERS · 次の章",
    backToBlog: "BACK TO STORIES",
    readTime: "min read",
    readMore: "READ →",
    showMore: "READ MORE ↓",
    showLess: "SHOW LESS ↑",
    viewAll: "VIEW ALL →",
    heroBlurb:
      "5+ years turning ideas into products with Angular, React and Node, now with AI agents as pair programmers and a slightly unhealthy amount of manga on the shelf. Interfaces that feel right, backends that hold, a human eye on every line.",
    aboutTitle: "The developer behind the panels.",
    timelineTitle: "Career, told in chapters.",
    workTitle: "Things I've shipped.",
    blogTitle: "Notes from the desk.",
    nowTitle: "What I'm doing right now.",
    nowUpdated: "Updated July 2026",
    usesTitle: "My setup.",
    contactTitle: "Let's build something worth reading.",
    contactBlurb:
      "Freelance work, a role on your team, or just an argument about the best Shonen ending: my inbox is open.",
    fieldName: "NAME",
    fieldEmail: "EMAIL",
    fieldMsg: "MESSAGE",
    fieldRequired: "Required",
    send: "Send it",
    sending: "Sending…",
    sent: "Sent! ドン!",
    sendError: "Something went wrong: email me instead.",
    rights: "All rights reserved.",
    builtIn: "Designed & built in Milan",
    articleKind: "ONESHOT · 読切",
    bubbleLead:
      "I'm a senior Angular and React developer, passionate about crafting seamless and performant web applications. On the backend, I love working with Node.js especially when using Fastify for speed and Prisma for clarity and structure.",
    bubbleBody:
      "I enjoy the entire development process: from designing clean, intuitive interfaces to shaping robust database architectures. I pair with AI every day, from Claude Code to Codex: it speeds up the hands, but the decisions stay mine. Code is my medium, building is what keeps me in flow. Outside of work, I enjoy playing video games, reading books or comics, and running.",
    shipDesc:
      "Query tabs, saved snippets and a real diff view: the SQL client I wanted to use every day.",
    facts: [
      { big: "8+", label: "Years shipping production apps" },
      { big: "1000+", label: "Volumes in the library right now" },
      { big: "MIL", label: "Based in Milan, open to remote" },
      { big: "∞", label: "Coffee-to-commit ratio" },
    ],
    stats: [
      { label: "Frontend", width: 95, value: "95%" },
      { label: "Backend", width: 85, value: "85%" },
      { label: "Architecture", width: 78, value: "78%" },
      { label: "Design sense", width: 70, value: "70%" },
      { label: "Sleep", width: 32, value: "32%" },
    ],
  },
  it: {
    nav: [
      { href: "/#about", label: "Chi sono" },
      { href: "/#work", label: "Progetti" },
      { href: "/#timeline", label: "Storia" },
      { href: "/#blog", label: "Blog" },
      { href: "/#now", label: "Adesso" },
      { href: "/#contact", label: "Contatti" },
    ],
    ctaWork: "Guarda i progetti →",
    ctaTalk: "Scrivimi",
    eyebrowVol: "VOL. 01 · MILANO, ITALIA",
    panelCaption: "CAP.01 · NEW DEV HERO",
    statusLabel: "STATISTICHE · 能力値",
    nowShipping: "IN CORSO · 連載中",
    evAbout: "CHI SONO · 自己紹介",
    evStory: "ARCO NARRATIVO · 経歴",
    evWork: "PROGETTI · 作品",
    evBlog: "RACCONTI · 読み物",
    evCourse: "SERIE · 連載",
    chapterLabel: "CAPITOLO",
    chaptersLabel: "CAPITOLI",
    backToCourse: "TORNA ALLA SERIE",
    prevStep: "PRECEDENTE",
    nextStep: "SUCCESSIVO",
    evNow: "ADESSO · 現在",
    evUses: "STRUMENTI · 道具",
    evContact: "CONTATTI · 連絡",
    openCase: "APRI →",
    backToWork: "TORNA AI PROGETTI",
    resultLabel: "RISULTATO · 結果",
    nextLabel: "PROSSIMI CAPITOLI · 次の章",
    backToBlog: "TORNA AI RACCONTI",
    readTime: "min di lettura",
    readMore: "LEGGI →",
    showMore: "LEGGI TUTTO ↓",
    showLess: "MOSTRA MENO ↑",
    viewAll: "VEDI TUTTI →",
    heroBlurb:
      "5+ anni a trasformare idee in prodotti con Angular, React e Node, oggi con gli agenti AI come pair programmer e una quantità leggermente eccessiva di manga sulla mensola. Interfacce che funzionano, backend che tengono, un occhio umano su ogni riga.",
    aboutTitle: "Lo sviluppatore dietro le vignette.",
    timelineTitle: "La carriera, raccontata a capitoli.",
    workTitle: "Cose che ho spedito.",
    blogTitle: "Appunti dalla scrivania.",
    nowTitle: "Cosa sto facendo adesso.",
    nowUpdated: "Aggiornato a luglio 2026",
    usesTitle: "Il mio setup.",
    contactTitle: "Costruiamo qualcosa che valga la pena leggere.",
    contactBlurb:
      "Freelance, un posto nel tuo team, o solo una discussione sul miglior finale shonen: la inbox è aperta.",
    fieldName: "NOME",
    fieldEmail: "EMAIL",
    fieldMsg: "MESSAGGIO",
    fieldRequired: "Obbligatorio",
    send: "Invia",
    sending: "Invio…",
    sent: "Inviato! ドン!",
    sendError: "Qualcosa è andato storto: scrivimi via email.",
    rights: "Tutti i diritti riservati.",
    builtIn: "Progettato e sviluppato a Milano",
    articleKind: "ONESHOT · 読切",
    bubbleLead:
      "Sono uno sviluppatore senior Angular e React, appassionato di applicazioni web fluide e performanti. Sul backend amo lavorare con Node.js, soprattutto con Fastify per la velocità e Prisma per chiarezza e struttura.",
    bubbleBody:
      "Mi piace tutto il processo di sviluppo: dal disegnare interfacce pulite e intuitive al costruire architetture di database solide. Lavoro in coppia con l'AI ogni giorno, da Claude Code a Codex: accelera le mani, ma le decisioni restano mie. Il codice è il mio mezzo, costruire è ciò che mi tiene in flow. Fuori dal lavoro gioco ai videogiochi, leggo libri e fumetti, e corro.",
    shipDesc:
      "Tab per le query, snippet salvati e un vero diff: il client SQL che volevo usare ogni giorno.",
    facts: [
      { big: "8+", label: "Anni di app in produzione" },
      { big: "1000+", label: "Volumi nella libreria ora" },
      { big: "MIL", label: "A Milano, disponibile da remoto" },
      { big: "∞", label: "Rapporto caffè/commit" },
    ],
    stats: [
      { label: "Frontend", width: 95, value: "95%" },
      { label: "Backend", width: 85, value: "85%" },
      { label: "Architettura", width: 78, value: "78%" },
      { label: "Senso estetico", width: 70, value: "70%" },
      { label: "Sonno", width: 32, value: "32%" },
    ],
  },
};
