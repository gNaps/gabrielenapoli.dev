"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/* Renders empty until mounted so the icon never mismatches the
   theme the blocking script in app/layout.tsx already applied. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    let initial: Theme = "light";
    try {
      const stored = localStorage.getItem("gn-theme");
      if (stored === "dark" || stored === "light") {
        initial = stored;
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        initial = "dark";
      }
    } catch {}
    setTheme(initial);
  }, []);

  const toggle = () => {
    if (!theme) return;
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("gn-theme", next);
    } catch {}
    setTheme(next);
  };

  return (
    <button
      type="button"
      className="theme-btn"
      title="Theme"
      aria-label="Toggle theme"
      onClick={toggle}
    >
      {theme === "dark" && (
        <svg
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="4.4" fill="currentColor" stroke="none" />
          <path d="M12 2.6v2.6M12 18.8v2.6M2.6 12h2.6M18.8 12h2.6M5.3 5.3l1.9 1.9M16.8 16.8l1.9 1.9M18.7 5.3l-1.9 1.9M7.2 16.8l-1.9 1.9" />
        </svg>
      )}
      {theme === "light" && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.7 8.7 0 1 0 11.1 11.1z" />
        </svg>
      )}
    </button>
  );
}
