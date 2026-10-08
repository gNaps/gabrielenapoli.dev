import { COPY, type Lang, type Copy } from "./copy";

/** The interface is English; articles declare their own content language. */
export function getSiteCopy(lang: Lang = "en"): { lang: Lang; t: Copy } {
  return { lang, t: COPY[lang] };
}
