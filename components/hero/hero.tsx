"use client";

import { useRouter } from "next/navigation";
import ContainerAnimated from "../container-animated/container-animated";

const Hero = () => {
  const router = useRouter();

  return (
    <ContainerAnimated>
      <section>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--subtle)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          MILAN / REMOTE
        </div>

        <p style={{ fontSize: 20, color: "var(--muted)", marginBottom: 14 }}>
          Hello, I&apos;m{" "}
          <span className="h-violet" style={{ fontWeight: 600 }}>
            Gabriele
          </span>
          .
        </p>

        <h1 className="glow-wrap">
          <span className="shimmer">Fullstack developer</span>{" "}
          <span style={{ color: "var(--muted)", fontWeight: 400 }}>from Milan.</span>{" "}
          <span className="grad">Crafting beautiful web experiences.</span>
        </h1>

        <p style={{ maxWidth: 560, marginTop: 28, fontSize: 15.5 }}>
          With 5+ years of experience in web development, I build full-stack
          JavaScript applications that are fast, clean, and scalable. I&apos;m
          passionate about technology, constantly learning, and love turning
          ideas into real, usable products.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 36,
            flexWrap: "wrap",
          }}
        >
          <button
            className="pill pill-primary"
            onClick={() => router.push("/projects")}
          >
            See projects
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
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
          <button className="pill" onClick={() => router.push("/about")}>
            About me
          </button>
        </div>

        {/* Stat strip */}
        {/* <div className="stat-strip">
          {[
            ["05+", "Years shipping"],
            ["40+", "Projects delivered"],
            ["12", "Stories written"],
            ["2", "Teams coached"],
          ].map(([k, v]) => (
            <div
              key={v}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                paddingLeft: 18,
                borderLeft: "1px solid var(--line-soft)",
              }}
            >
              <span
                className="grad-violet"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 600,
                }}
              >
                {k}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--subtle)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                {v}
              </span>
            </div>
          ))}
        </div> */}
      </section>
    </ContainerAnimated>
  );
};

export default Hero;
