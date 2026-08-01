"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "../theme-toggle/theme-toggle";

const NAV_ITEMS = [
  { href: "/", label: "Home", kana: "ホーム" },
  { href: "/about", label: "About", kana: "経歴" },
  { href: "/projects", label: "Projects", kana: "制作" },
  { href: "/stories", label: "Stories", kana: "物語" },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    document.body.classList.toggle("overflow-hidden");
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    document.body.classList.remove("overflow-hidden");
    setIsMenuOpen(false);
  };

  const contacts = () => {
    try {
      (window as any).goatcounter?.count?.({
        path: "click-contacts-header",
        event: true,
      });
    } catch {}
    router.push("/contacts");
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <div
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 72,
          zIndex: 49,
          pointerEvents: "none",
          background: "var(--overlay-bg)",
          borderBottom: "var(--ink-w) solid var(--line)",
          transition: "opacity 0.3s ease",
          opacity: scrolled ? 1 : 0,
        }}
      />
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 72,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        {/* Logo — top left. The seal reads 竜 (ryu), from the "napsryu" handle. */}
        <Link
          href="/"
          style={{
            position: "fixed",
            top: 0,
            left: 32,
            height: 72,
            display: "inline-flex",
            alignItems: "center",
            gap: 11,
            pointerEvents: "auto",
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: 17,
            letterSpacing: "0.14em",
            textDecoration: "none",
            color: "var(--fg)",
          }}
        >
          <span className="hanko hanko-fill hanko-sm" aria-hidden>
            竜
          </span>
          <span className="hidden lg:inline">
            <span className="grad">GABRIELE</span>
            <span className="grad-violet"> NAPOLI</span>
          </span>
          <span className="lg:hidden">
            <span className="grad">G</span>
            <span className="grad-violet">N</span>
          </span>
        </Link>

        {/* Center pill nav — desktop only (hidden on mobile via CSS class) */}
        <nav
          className="hidden lg:flex"
          style={{
            pointerEvents: "auto",
            alignItems: "center",
            gap: 2,
            padding: "4px",
            borderRadius: "var(--radius)",
            border: `var(--ink-w) solid ${
              scrolled ? "transparent" : "var(--line)"
            }`,
            background: scrolled ? "transparent" : "var(--surface)",
            boxShadow: scrolled ? "none" : "3px 3px 0 var(--plate)",
            transition:
              "background .3s ease, border-color .3s ease, box-shadow .3s ease",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  position: "relative",
                  padding: "6px 17px",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  color: active ? "var(--accent-contrast)" : "var(--muted)",
                  textDecoration: "none",
                  display: "inline-flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                  lineHeight: 1.2,
                  transition: "color .2s",
                }}
              >
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "var(--radius-sm)",
                      background: "var(--accent)",
                      zIndex: -1,
                    }}
                  />
                )}
                <span
                  className="kana"
                  aria-hidden
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.22em",
                    opacity: active ? 0.9 : 0.65,
                  }}
                >
                  {item.kana}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Top right actions */}
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 32,
            height: 72,
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          {/* Theme toggle — always visible */}
          <ThemeToggle />

          {/* Desktop: Let's talk */}
          <button
            className="pill hidden lg:inline-flex"
            onClick={contacts}
          >
            Let&apos;s talk
            <svg
              width={13}
              height={13}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ fill: "none" }}
            >
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </button>

          {/* Mobile: hamburger */}
          <button
            className="pill lg:hidden"
            onClick={toggleMenu}
            aria-label="Open menu"
            style={{ width: 44, height: 44, padding: 0, justifyContent: "center" }}
          >
            <svg
              width={18}
              height={18}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
              style={{ fill: "none" }}
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {isMenuOpen && (
        <nav className="menu-responsive">
          <Link
            href="/"
            onClick={closeMenu}
            style={{
              position: "fixed",
              top: 28,
              left: 32,
              height: 44,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: 18,
              color: "var(--fg)",
              textDecoration: "none",
              letterSpacing: "0.12em",
            }}
          >
            <span className="hanko hanko-fill hanko-sm" aria-hidden>
              竜
            </span>
            <span className="grad">G</span>
            <span className="grad-violet">N</span>
          </Link>

          <button
            onClick={closeMenu}
            className="pill"
            style={{
              position: "fixed",
              top: 28,
              right: 32,
              width: 44,
              height: 44,
              padding: 0,
              justifyContent: "center",
            }}
            aria-label="Close menu"
          >
            <svg
              width={18}
              height={18}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
              style={{ fill: "none" }}
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="menu-entry"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(30px, 9vw, 52px)",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  color: active ? "var(--fg)" : "var(--muted)",
                  letterSpacing: "0.02em",
                  transition: "color .25s",
                }}
              >
                <span className="menu-kana" aria-hidden>
                  {item.kana}
                </span>
                {item.label}
              </Link>
            );
          })}

          <button
            className="pill pill-primary"
            onClick={() => {
              closeMenu();
              contacts();
            }}
            style={{ marginTop: 16 }}
          >
            <span className="kana" aria-hidden style={{ fontSize: 11 }}>
              連絡
            </span>
            Let&apos;s talk
          </button>
        </nav>
      )}
    </>
  );
};

export default Navbar;
