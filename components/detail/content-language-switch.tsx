import Link from "next/link";
import type { Lang } from "@/cms/copy";

export default function ContentLanguageSwitch({
  language,
  paths,
}: {
  language: Lang;
  paths: Record<Lang, string>;
}) {
  return (
    <nav
      className="content-languages"
      aria-label={
        language === "it" ? "Lingua del contenuto" : "Content language"
      }
    >
      {(["it", "en"] as const).map((lang) => (
        <Link
          key={lang}
          href={paths[lang]}
          hrefLang={lang}
          lang={lang}
          aria-current={language === lang ? "page" : undefined}
        >
          {lang === "it" ? "Italiano" : "English"}
        </Link>
      ))}
    </nav>
  );
}
