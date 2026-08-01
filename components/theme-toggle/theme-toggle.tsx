"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    let initial: Theme;
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") {
        initial = stored;
      } else {
        initial = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
    } catch {
      initial = "light";
    }
    setTheme(initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      className="pill"
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
      title={theme === "dark" ? "日 — light" : "月 — dark"}
      style={{
        width: 44,
        height: 44,
        padding: 0,
        justifyContent: "center",
        fontFamily: "var(--font-jp)",
        fontSize: 18,
        fontWeight: 500,
        lineHeight: 1,
      }}
    >
      {/* 日 (sun) switches to light, 月 (moon) switches to dark */}
      <span aria-hidden>{theme === "dark" ? "日" : theme === "light" ? "月" : ""}</span>
    </button>
  );
};

export default ThemeToggle;
