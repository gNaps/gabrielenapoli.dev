import { getSiteCopy } from "@/cms/site-copy";
import Link from "next/link";
export default function Footer() {
  const { lang, t } = getSiteCopy();
  return (
    <footer className="gn-footer">
      <div className="container">
        <p className="footer-stack">
          Angular · React · Node.js · Fastify · Prisma · TypeScript · Next.js ·
          AI
        </p>
        <div className="footer-row">
          <span>
            © {new Date().getFullYear()} Gabriele Napoli · {t.builtIn}
          </span>
          <nav aria-label="Footer">
            <Link href="/projects">Work</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/#now">Now</Link>
            <a href="#main-content">
              {lang === "en" ? "Back to top ↑" : "Torna su ↑"}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
