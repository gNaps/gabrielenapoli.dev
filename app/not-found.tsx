import Link from "next/link";
export default function NotFound() {
  return (
    <section className="not-found">
      <span className="not-found-code">404 · Off the map</span>
      <h1>
        This page
        <br />
        took a detour.
      </h1>
      <p>The page you’re looking for isn’t here. Let’s get you back.</p>
      <div className="hero-ctas">
        <Link href="/" className="btn btn--primary">
          Back home →
        </Link>
        <Link href="/projects" className="btn btn--ghost">
          Explore the work
        </Link>
      </div>
    </section>
  );
}
