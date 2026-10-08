"use client";
import { getSiteCopy } from "@/cms/site-copy";
import {
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/utils/social-links.utils";
import { useEffect, useRef, useState } from "react";
export default function ContactSection() {
  const { t, lang } = getSiteCopy();
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  const copy = async () => {
    try {
      await navigator.clipboard.writeText("gabrielenap@gmail.com");
      setCopied(true);
      setFailed(false);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setFailed(true);
    }
  };
  return (
    <section id="contact" className="contact-section section-dark">
      <div className="container">
        <p className="eyebrow accent" data-reveal>
          {t.evContact}
        </p>
        <h2 data-reveal>
          {lang === "en" ? (
            <>
              Let's build
              <br />
              something <span className="accent">great.</span>
            </>
          ) : (
            <>
              Costruiamo
              <br />
              qualcosa di <span className="accent">bello.</span>
            </>
          )}
        </h2>
        <p className="contact-blurb" data-reveal>
          {lang === "en"
            ? "A project, a role on your team, or just a good conversation. My inbox is open."
            : "Un progetto, un posto nel tuo team o una bella conversazione. La mia inbox è aperta."}
        </p>
        <div className="hero-ctas" data-reveal>
          <a className="btn btn--primary" href="mailto:gabrielenap@gmail.com">
            gabrielenap@gmail.com ↗
          </a>
          <button className="btn btn--ghost" type="button" onClick={copy}>
            {copied
              ? lang === "en"
                ? "Copied ✓"
                : "Copiata ✓"
              : lang === "en"
                ? "Copy email"
                : "Copia email"}
          </button>
        </div>
        <span role="status" className="copy-status">
          {failed
            ? lang === "en"
              ? "Copy unavailable. Email: gabrielenap@gmail.com"
              : "Copia non disponibile. Email: gabrielenap@gmail.com"
            : copied
              ? lang === "en"
                ? "Email copied"
                : "Email copiata"
              : ""}
        </span>
        <div className="social-links" data-reveal>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub / gNaps ↗
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Instagram / napsryu ↗
          </a>
        </div>
      </div>
    </section>
  );
}
