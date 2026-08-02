"use client";

import { useLang } from "@/components/providers/language-provider";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="gn-footer">
      <span>© 2026 Gabriele Napoli · {t.rights}</span>
      <span>{t.builtIn} · 完</span>
    </footer>
  );
}
