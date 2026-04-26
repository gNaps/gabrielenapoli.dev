"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/stories", label: "Stories" },
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
          height: 80,
          zIndex: 49,
          pointerEvents: "none",
          background: "oklch(0.12 0.04 280 / 0.55)",
          backdropFilter: "blur(22px) saturate(1.3)",
          WebkitBackdropFilter: "blur(22px) saturate(1.3)",
          borderBottom: "1px solid oklch(0.28 0.04 280 / 0.25)",
          transition: "opacity 0.35s ease",
          opacity: scrolled ? 1 : 0,
        }}
      />
      <header
        style={{
          position: "fixed",
          top: 22,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        {/* Logo — top left */}
        <Link
          href="/"
          style={{
            position: "fixed",
            top: 28,
            left: 32,
            pointerEvents: "auto",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.08em",
            textDecoration: "none",
            color: "var(--fg)",
          }}
        >
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
            gap: 4,
            padding: "6px",
            borderRadius: 999,
            border: "1px solid var(--line)",
            background: "oklch(0.14 0.04 280 / 0.55)",
            backdropFilter: "blur(22px) saturate(1.4)",
            WebkitBackdropFilter: "blur(22px) saturate(1.4)",
            boxShadow:
              "0 10px 40px -10px oklch(0.3 0.2 290 / 0.4), inset 0 1px 0 oklch(0.9 0.1 290 / 0.08)",
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
                  padding: "8px 18px",
                  borderRadius: 999,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: active ? "white" : "oklch(0.72 0.03 280)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  transition: "color .25s",
                }}
              >
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 999,
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.25 295 / 0.8), oklch(0.45 0.23 255 / 0.6))",
                      boxShadow:
                        "0 0 20px oklch(0.6 0.25 290 / 0.6), inset 0 1px 0 oklch(0.9 0.1 290 / 0.3)",
                      zIndex: -1,
                    }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Top right actions */}
        <div
          style={{
            position: "fixed",
            top: 20,
            right: 32,
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
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
              top: 32,
              left: 32,
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 16,
              color: "var(--fg)",
              textDecoration: "none",
              letterSpacing: "0.06em",
            }}
          >
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

          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 8vw, 48px)",
                fontWeight: 600,
                color: isActive(item.href) ? "var(--fg)" : "var(--muted)",
                textDecoration: "none",
                letterSpacing: "-0.02em",
                transition: "color .25s",
              }}
            >
              {isActive(item.href) ? (
                <span className="shimmer">{item.label}</span>
              ) : (
                item.label
              )}
            </Link>
          ))}

          <button
            className="pill pill-primary"
            onClick={() => {
              closeMenu();
              contacts();
            }}
            style={{ marginTop: 16 }}
          >
            Let&apos;s talk
          </button>
        </nav>
      )}
    </>
  );
};

export default Navbar;
