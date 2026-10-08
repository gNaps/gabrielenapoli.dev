import { LocalizedText } from "./copy";

/* Structured case-study copy for the four flagship projects,
   transcribed from the design's DETAILS object and keyed by the
   existing project slugs. Projects without an entry fall back to
   the plain header + MDX layout. */

export interface ProjectDetails {
  chapter: LocalizedText;
  year: LocalizedText;
  role: string;
  status?: string;
  platform: string;
  sfx: string;
  tagline: LocalizedText;
  blocks: { label: LocalizedText; body: LocalizedText }[];
  results: { big: string; label: LocalizedText }[];
}

export const projectDetails: Record<string, ProjectDetails> = {
  napsql: {
    chapter: { en: "CASE 01 · NAPSQL", it: "CASO 01 · NAPSQL" },
    year: { en: "2025 - Present", it: "2025 - Oggi" },
    role: "Creator & developer",
    status: "Version 2.0 in development",
    platform: "Desktop · macOS, Windows & Linux",
    sfx: "ドン!",
    tagline: {
      en: "A fast, modern SQL client for people who live inside a database: a lighter alternative to SSMS.",
      it: "Un client SQL moderno e veloce per chi vive dentro un database: un'alternativa più leggera a SSMS.",
    },
    blocks: [
      {
        label: { en: "PROBLEM", it: "PROBLEMA" },
        body: {
          en: "SSMS is heavy, dated and Windows-only, yet it is still where most SQL Server work happens. Every lighter tool I tried dropped the features that actually matter day to day.",
          it: "SSMS è pesante, datato e solo per Windows, eppure resta lo strumento dove passa la maggior parte del lavoro su SQL Server. Gli strumenti più leggeri che ho provato tagliavano proprio le funzioni che servono ogni giorno.",
        },
      },
      {
        label: { en: "APPROACH", it: "APPROCCIO" },
        body: {
          en: "An Electron shell with a React UI, built around three ideas: multiple live connections, a query editor that never blocks, and result grids you can read without squinting. Everything keyboard-first.",
          it: "Una shell Electron con UI React, costruita su tre idee: più connessioni attive, un editor di query che non si blocca mai, e griglie di risultati leggibili. Tutto keyboard-first.",
        },
      },
      {
        label: { en: "STACK", it: "STACK" },
        body: {
          en: "React and TypeScript on the front, a Node layer talking to SQL Server, packaged with Electron for macOS and Windows.",
          it: "React e TypeScript davanti, un layer Node che parla con SQL Server, pacchettizzato con Electron per macOS e Windows.",
        },
      },
    ],
    results: [
      {
        big: "Desktop",
        label: {
          en: "cross-platform SQL Server client",
          it: "client SQL Server multipiattaforma",
        },
      },
      {
        big: "Multiple",
        label: {
          en: "live database connections",
          it: "connessioni database attive",
        },
      },
      {
        big: "Keyboard",
        label: {
          en: "query editor built around shortcuts",
          it: "editor di query con scorciatoie",
        },
      },
    ],
  },
  venticritico: {
    chapter: { en: "CASE 02 · VENTICRITICO", it: "CASO 02 · VENTICRITICO" },
    year: { en: "2024 - Present", it: "2024 - Oggi" },
    role: "Creator & developer",
    platform: "Web app",
    sfx: "バン!",
    tagline: {
      en: "Run your D&D campaigns with a natural 20: sessions, NPCs, loot and notes in one place, live across the table.",
      it: "Gestisci le tue campagne D&D con un 20 naturale: sessioni, PNG, tesori e appunti in un posto solo, in tempo reale.",
    },
    blocks: [
      {
        label: { en: "PROBLEM", it: "PROBLEMA" },
        body: {
          en: "Every table I played at kept its campaign in five different places: a notes app, a spreadsheet, a chat thread and two notebooks. Nothing was shared, nothing was current.",
          it: "Ogni tavolo a cui ho giocato teneva la campagna in cinque posti diversi: un'app di note, un foglio di calcolo, una chat e due quaderni. Niente era condiviso, niente era aggiornato.",
        },
      },
      {
        label: { en: "APPROACH", it: "APPROCCIO" },
        body: {
          en: "One realtime campaign space: the DM writes, players see it instantly. Session logs, NPC sheets and loot tracked as first-class objects instead of paragraphs of text.",
          it: "Un unico spazio campagna in realtime: il master scrive, i giocatori vedono subito. Log delle sessioni, schede dei PNG e tesori come oggetti veri, non paragrafi di testo.",
        },
      },
      {
        label: { en: "STACK", it: "STACK" },
        body: {
          en: "Next.js with Convex for realtime state and auth, with no websocket plumbing to maintain, so the work stayed on the product.",
          it: "Next.js con Convex per stato realtime e autenticazione: nessun impianto di websocket da mantenere, tutto il tempo speso sul prodotto.",
        },
      },
    ],
    results: [
      {
        big: "1",
        label: {
          en: "source of truth per campaign",
          it: "fonte di verità per campagna",
        },
      },
      {
        big: "Realtime",
        label: {
          en: "shared campaign updates",
          it: "aggiornamenti condivisi della campagna",
        },
      },
      {
        big: "0",
        label: {
          en: "spreadsheets left behind",
          it: "fogli di calcolo rimasti",
        },
      },
    ],
  },
  oakbot: {
    chapter: { en: "CASE 03 · OAKBOT", it: "CASO 03 · OAKBOT" },
    year: { en: "2023", it: "2023" },
    role: "Creator & developer",
    platform: "Telegram",
    sfx: "ピカ!",
    tagline: {
      en: "A smart Pokédex right inside Telegram: fuzzy search, inline results, no app to install.",
      it: "Un Pokédex intelligente dentro Telegram: ricerca fuzzy, risultati inline, nessuna app da installare.",
    },
    blocks: [
      {
        label: { en: "PROBLEM", it: "PROBLEMA" },
        body: {
          en: "Looking up a Pokémon mid-conversation meant leaving the chat, opening a browser and fighting ad-heavy fan wikis.",
          it: "Cercare un Pokémon in mezzo a una conversazione voleva dire uscire dalla chat, aprire il browser e combattere con wiki piene di pubblicità.",
        },
      },
      {
        label: { en: "APPROACH", it: "APPROCCIO" },
        body: {
          en: "An inline Telegram bot that answers where the conversation already is. Fuzzy matching forgives typos and Italian names; results render as compact cards.",
          it: "Un bot Telegram inline che risponde dove la conversazione già è. Il matching fuzzy perdona refusi e nomi italiani; i risultati arrivano come card compatte.",
        },
      },
      {
        label: { en: "STACK", it: "STACK" },
        body: {
          en: "Node.js and grammY, connected to a GraphQL Pokémon API for stats, type matchups and evolution data.",
          it: "Node.js e grammY, collegati a un’API GraphQL Pokémon per statistiche, tipi ed evoluzioni.",
        },
      },
    ],
    results: [
      {
        big: "0",
        label: { en: "apps to install", it: "app da installare" },
      },
      {
        big: "Commands",
        label: {
          en: "stats, type matchups and evolutions",
          it: "statistiche, tipi ed evoluzioni",
        },
      },
      {
        big: "2",
        label: { en: "languages supported", it: "lingue supportate" },
      },
    ],
  },
  regalando: {
    chapter: { en: "CASE 04 · REGALANDO", it: "CASO 04 · REGALANDO" },
    year: { en: "2023 - 2024", it: "2023 - 2024" },
    role: "Fullstack developer",
    platform: "Web · iOS · Android",
    sfx: "パッ!",
    tagline: {
      en: "The gift-giving experience, reimagined: shared wishlists and group gifts without the spoilers.",
      it: "L'esperienza del regalo ripensata: wishlist condivise e regali di gruppo, senza spoiler.",
    },
    blocks: [
      {
        label: { en: "PROBLEM", it: "PROBLEMA" },
        body: {
          en: "Group gifts fall apart in chat threads: duplicate presents, someone forgetting to pay, and the recipient accidentally reading everything.",
          it: "I regali di gruppo si sfaldano nelle chat: doppioni, qualcuno che dimentica di pagare e il festeggiato che legge tutto per sbaglio.",
        },
      },
      {
        label: { en: "APPROACH", it: "APPROCCIO" },
        body: {
          en: "Wishlists anyone can join, with claims hidden from the person being gifted and a clear split of who pays what. Mobile-first, because this happens on a phone.",
          it: "Wishlist a cui chiunque può unirsi, con le prenotazioni nascoste al destinatario e una divisione chiara di chi paga cosa. Mobile-first, perché succede tutto dal telefono.",
        },
      },
      {
        label: { en: "STACK", it: "STACK" },
        body: {
          en: "A Flutter client for iOS and Android, a Next.js web app sharing the same Supabase backend for auth, data and realtime updates.",
          it: "Client Flutter per iOS e Android, web app Next.js e un backend Supabase condiviso per auth, dati e aggiornamenti realtime.",
        },
      },
    ],
    results: [
      {
        big: "2",
        label: {
          en: "platforms from one codebase",
          it: "piattaforme da un solo codebase",
        },
      },
      {
        big: "1",
        label: { en: "shared backend", it: "backend condiviso" },
      },
      {
        big: "0",
        label: { en: "spoiled surprises", it: "sorprese rovinate" },
      },
    ],
  },
};
