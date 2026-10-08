"use client";
import { getSiteCopy } from "@/cms/site-copy";
import { LINKEDIN_URL, GITHUB_URL } from "@/utils/social-links.utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
export default function Header() {
  const { lang, t } = getSiteCopy();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLElement>(null);
  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: lang === "en" ? "Work" : "Progetti" },
    { href: "/stories", label: "Stories" },
  ];
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        button.current?.focus();
      }
      if (event.key !== "Tab") return;
      const controls = [
        button.current,
        ...Array.from(
          menu.current?.querySelectorAll<HTMLElement>("a, button") ?? [],
        ),
      ].filter((el): el is HTMLElement => !!el);
      const first = controls[0],
        last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    const resize = () => {
      if (innerWidth >= 640) setMenuOpen(false);
    };
    document.addEventListener("keydown", keyboard);
    window.addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", keyboard);
      window.removeEventListener("resize", resize);
    };
  }, [menuOpen]);
  return (
    <header className="topbar">
      <div className="hdr">
        <Link href="/" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="brand-full">Gabriele Napoli</span>
          <span className="brand-short">GN</span>
        </Link>
        <nav className="nav-desktop" aria-label="Main navigation">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                (
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href)
                )
                  ? "page"
                  : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hdr-actions">
          <a className="nav-cta" href="mailto:gabrielenap@gmail.com">
            {t.ctaTalk}
          </a>
          <button
            ref={button}
            className="burger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          ref={menu}
          id="mobile-menu"
          className="mnav"
          aria-label="Mobile navigation"
        >
          <div>
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                <span>↗</span>
              </Link>
            ))}
          </div>
          <div className="mnav-bottom">
            <a className="btn btn--primary" href="mailto:gabrielenap@gmail.com">
              {t.ctaTalk}
            </a>
            <div>
              <a href={GITHUB_URL}>GitHub</a>
              <a href={LINKEDIN_URL}>LinkedIn</a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
