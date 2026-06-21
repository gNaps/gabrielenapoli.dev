"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ContainerAnimated from "../container-animated/container-animated";

const Hero = () => {
  const router = useRouter();

  return (
    <ContainerAnimated>
      <section className="hero-layout">
        <div className="hero-main">
          <div className="status-chip">
            <span className="dot" />
            Milan, Italy · Open to remote work
          </div>

          <p
            style={{
              fontSize: 19,
              color: "var(--muted)",
              margin: "28px 0 12px",
            }}
          >
            Hi, I&apos;m{" "}
            <span className="h-violet" style={{ fontWeight: 600 }}>
              Gabriele
            </span>
            .
          </p>

          <h1>
            Fullstack developer{" "}
            <span style={{ color: "var(--muted)", fontWeight: 400 }}>
              crafting fast, reliable
            </span>{" "}
            web applications.
          </h1>

          <p
            style={{
              maxWidth: 520,
              marginTop: 26,
              fontSize: 17,
              lineHeight: 1.6,
            }}
          >
            With 5+ years of experience, I build full-stack JavaScript
            applications that are fast, clean, and scalable — from intuitive
            interfaces to robust backends. I care about the details and turning
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
        </div>

        <div className="hero-avatar">
          <div className="hero-portrait">
            <Image
              src="/cms/about_me.webp"
              alt="Gabriele Napoli"
              width={520}
              height={650}
              priority
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 28%",
              }}
            />
          </div>
        </div>
      </section>
    </ContainerAnimated>
  );
};

export default Hero;
