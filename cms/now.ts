import { LocalizedText } from "./copy";

/* "Now" panel and "Uses" setup card: copy from the design's
   COPY.now / COPY.uses arrays. */

export interface LabeledValue {
  label: LocalizedText;
  value: LocalizedText;
}

export const nowItems: LabeledValue[] = [
  {
    label: { en: "BUILDING", it: "COSTRUISCO" },
    value: {
      en: "NapSQL 2.0: query tabs, saved snippets, a real diff view.",
      it: "NapSQL 2.0: tab per le query, snippet salvati, un vero diff.",
    },
  },
  {
    label: { en: "READING", it: "LEGGO" },
    value: {
      en: "Chainsaw Man, Fujimoto.",
      it: "Chainsaw Man, Fujimoto.",
    },
  },
  {
    label: { en: "PLAYING", it: "GIOCO" },
    value: {
      en: "Shin Megami Tensei V, one dungeon per evening.",
      it: "Shin Megami Tensei V, un dungeon a sera.",
    },
  },
  {
    label: { en: "LEARNING", it: "IMPARO" },
    value: {
      en: "Rust, mostly to understand what my tools are made of.",
      it: "Rust, soprattutto per capire di cosa sono fatti i miei strumenti.",
    },
  },
];

export const uses: LabeledValue[] = [
  {
    label: { en: "EDITOR", it: "EDITOR" },
    value: {
      en: "VS Code, Terminal",
      it: "VS Code, Terminale",
    },
  },
  {
    label: { en: "MACHINE", it: "MACCHINA" },
    value: {
      en: "MacBook Pro M3 + 2 externals",
      it: "MacBook Pro M3 + 2 monitor",
    },
  },
  {
    label: { en: "STACK", it: "STACK" },
    value: {
      en: "Angular · React · Fastify · Prisma",
      it: "Angular · React · Fastify · Prisma",
    },
  },
  {
    label: { en: "AI", it: "AI" },
    value: {
      en: "Claude Code · Codex · always a human review",
      it: "Claude Code · Codex · review finale sempre umana",
    },
  },
  {
    label: { en: "DESK", it: "SCRIVANIA" },
    value: {
      en: "Mechanical keyboard, PS5, too many dice",
      it: "Tastiera meccanica, PS5, troppi dadi",
    },
  },
];
