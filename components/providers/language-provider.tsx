"use client";

import { COPY, Copy, Lang } from "@/cms/copy";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface LanguageContextValue {
  lang: Lang;
  t: Copy;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: COPY.en,
  toggleLang: () => {},
});

/* Server and first client render are always "en" so hydration never
   mismatches; the stored language is applied right after mount (an
   IT visitor sees a one-frame English flash, accepted trade-off). */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("gn-lang");
      if (stored === "en" || stored === "it") {
        setLang(stored);
        document.documentElement.lang = stored;
      }
    } catch {}
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === "en" ? "it" : "en";
      try {
        localStorage.setItem("gn-lang", next);
      } catch {}
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: COPY[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
