"use client";

import { useRouter } from "next/navigation";
import ContainerAnimated from "../container-animated/container-animated";

const AboutHero = () => {
  const router = useRouter();

  return (
    <ContainerAnimated>
      <div
        className="card tone"
        style={{
          padding: "clamp(28px, 4vw, 60px) clamp(24px, 4vw, 54px)",
        }}
      >
        <div className="eyebrow" style={{ marginBottom: 22 }}>
          自己紹介 · Who I am
        </div>
        <h2
          className="prose-lead"
          style={{
            maxWidth: 900,
            fontSize: "clamp(18px, 2vw, 25px)",
            lineHeight: 1.5,
          }}
        >
          I&apos;m a senior{" "}
          <span className="h-indigo">Angular</span> and{" "}
          <span className="h-violet">React</span> developer, passionate about
          crafting <span className="shimmer">seamless</span> and performant web
          applications. On the backend, I love working with{" "}
          <span className="h-violet">Node.js</span> especially when using{" "}
          <span className="h-violet">Fastify</span> for speed and{" "}
          <span className="h-violet">Prisma</span> for clarity and structure.
        </h2>
        <p style={{ marginTop: 24, maxWidth: 700, fontSize: 15 }}>
          I enjoy taking care of the entire development process: from designing
          clean, intuitive interfaces to shaping robust database architectures.
          Code is my medium, and building is what keeps me in flow. Outside of
          work, I enjoy playing video games, reading books or comics, and
          running.
        </p>
        <div style={{ marginTop: 28 }}>
          <button className="pill" onClick={() => router.push("/about")}>
            <span className="kana" aria-hidden style={{ fontSize: 11 }}>
              経歴
            </span>
            About me
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
        </div>
      </div>
    </ContainerAnimated>
  );
};

export default AboutHero;
