"use client";

import { Experience } from "@/models/experience.model";
import { Stack } from "@/models/stack.model";
import Image from "next/image";
import ContainerAnimated from "../container-animated/container-animated";

interface AboutProps {
  experiences: Experience[];
  stacks: Stack[];
}

const About = ({ experiences, stacks }: AboutProps) => {
  return (
    <>
      <ContainerAnimated>
        {/* <div className="eyebrow" style={{ marginBottom: 18 }}>
          About me
        </div> */}
        <h1 className="glow-wrap" style={{ textWrap: "initial" }}>
          A developer who cares{" "}
          <span className="grad">about every detail.</span>
        </h1>
        <p style={{ marginTop: 28, maxWidth: 620, fontSize: 16 }}>
          Hello universe! I&apos;m Gabriele. Find out a little more about me
          here.
        </p>
      </ContainerAnimated>

      {/* Avatar + bio */}
      <div className="mt-lg">
        <ContainerAnimated>
          <div className="bio-grid">
            <div
              className="avatar-ring"
              style={{
                width: "clamp(100px, 14vw, 180px)",
                height: "clamp(100px, 14vw, 180px)",
              }}
            >
              <div className="avatar-inner">
                <Image
                  src="/cms/about_me.webp"
                  alt="Gabriele Napoli"
                  width={180}
                  height={180}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 70%",
                  }}
                />
              </div>
            </div>

            <div>
              <h2
                style={{
                  maxWidth: 760,
                  fontWeight: 500,
                  fontSize: "clamp(17px, 2vw, 26px)",
                  lineHeight: 1.45,
                }}
              >
                I&apos;m a senior{" "}
                <span className="h-indigo">Angular</span> and{" "}
                <span className="h-violet">React</span> developer, passionate
                about crafting seamless and performant web applications. On the
                backend, I love working with{" "}
                <span className="h-violet">Node.js</span> especially when using{" "}
                <span className="h-violet">Fastify</span> for speed and{" "}
                <span className="h-violet">Prisma</span> for clarity and
                structure.
              </h2>
              <p style={{ marginTop: 20, maxWidth: 680, fontSize: 15 }}>
                I enjoy the entire development process: from designing clean,
                intuitive interfaces to shaping robust database architectures.
                Code is my medium, building is what keeps me in flow. Outside of
                work, I enjoy playing video games, reading books or comics, and
                running.
              </p>
            </div>
          </div>
        </ContainerAnimated>
      </div>

      {/* Experience */}
      <div className="mt-xl">
        <ContainerAnimated>
          {/* <div className="eyebrow" style={{ marginBottom: 18 }}>
            Experience
          </div> */}
          <h2 style={{ marginBottom: 30 }}>
            Where I&apos;ve <span className="grad-violet">built.</span>
          </h2>
        </ContainerAnimated>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {experiences.map((exp) => (
            <ContainerAnimated key={exp.id}>
              <div className="card">
                <div className="job">
                  <div className="job-logo">
                    <Image
                      src={exp.logo}
                      alt={exp.slug}
                      width={58}
                      height={58}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="job-head">
                    <div className="job-title">{exp.jobTitle}</div>
                    <div className="job-meta">@{exp.company}</div>
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        marginTop: 10,
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      {exp.skills.map((s) => (
                        <div
                          key={s.id}
                          dangerouslySetInnerHTML={{ __html: s.icon! }}
                          style={{ width: 24, height: 24 }}
                          title={s.name}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="job-date">
                    {exp.yearStart} — {exp.yearEnd || "Now"}
                  </div>
                  <div className="job-body">{exp.description}</div>
                </div>
              </div>
            </ContainerAnimated>
          ))}
        </div>
      </div>

      {/* Stack */}
      <div className="mt-xl">
        <ContainerAnimated>
          {/* <div className="eyebrow" style={{ marginBottom: 18 }}>
            Stack
          </div> */}
          <h2 style={{ marginBottom: 30 }}>
            Tools I <span className="grad-violet">reach for.</span>
          </h2>
          <div className="stack-grid">
            {stacks.map((s) => (
              <div key={s.id} className="stack-tile" title={s.skill.name}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: s.skill.icon! }}
                    style={{ width: 40, height: 40 }}
                  />
                  <span style={{ fontSize: 11, color: "var(--muted)" }}>
                    {s.skill.name}
                  </span>
                </div>
                {s.learning && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 6,
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontSize: 8,
                      letterSpacing: "0.15em",
                      padding: "2px 6px",
                      borderRadius: 4,
                      background:
                        "linear-gradient(90deg, oklch(0.55 0.23 290), oklch(0.55 0.18 250))",
                      color: "white",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-mono)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Learning
                  </div>
                )}
              </div>
            ))}
          </div>
        </ContainerAnimated>
      </div>

      {/* CTA */}
      <div
        className="mt-xl"
        style={{ textAlign: "center", paddingBottom: 40 }}
      >
        <ContainerAnimated>
          <p
            style={{ fontSize: 18, color: "var(--fg)", marginBottom: 14 }}
          >
            Let&apos;s work together.
          </p>
          <a href="mailto:gabrielenap@gmail.com" className="pill pill-primary">
            gabrielenap@gmail.com
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
          </a>
        </ContainerAnimated>
      </div>
    </>
  );
};

export default About;
