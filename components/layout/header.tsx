"use client";

import { useLang } from "@/components/providers/language-provider";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const { lang, t, toggleLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="hdr">
        <Link href="/" className="logo">
          <span className="logo__tile">源</span>
          <span className="brand">
            <strong className="brand__full">GABRIELE NAPOLI</strong>
            <strong className="brand__short">GN</strong>
            <span className="brand__kana">ガブリエレ・ナポリ</span>
          </span>
        </Link>
        <nav className="nav-desktop">
          {t.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hdr-actions">
          <button
            type="button"
            className="burger"
            title="Menu"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="burger__bars">
              <span />
              <span />
              <span />
            </span>
          </button>
          <button
            type="button"
            className="hdr-btn"
            title="Language"
            onClick={toggleLang}
          >
            {lang === "en" ? "IT" : "EN"}
          </button>
          <ThemeToggle />
        </div>
      </div>
      <nav className="mnav" data-open={menuOpen ? "1" : "0"}>
        {t.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
            <span>→</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
