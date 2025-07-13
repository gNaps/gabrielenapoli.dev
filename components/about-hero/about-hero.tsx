"use client";

import { useRouter } from "next/navigation";
import Button from "../button/button";
import ContainerAnimated from "../container-animated/container-animated";
import GradientText from "../gradient-text/gradient-text";

const AboutHero = () => {
  const router = useRouter();

  const contacts = () => {
    (window as any).goatcounter.count({
      path: "click-contacts-header",
      event: true,
    });
    router.push(`/contacts`);
  };

  return (
    <ContainerAnimated>
      <h2>
        I’m a senior <GradientText animationSpeed={3}>Angular</GradientText> and{" "}
        <GradientText animationSpeed={3}>React</GradientText> developer,
        passionate about crafting seamless and performant web applications. On
        the backend, I love working with{" "}
        <GradientText animationSpeed={3}>Node.js</GradientText> especially when
        using <GradientText animationSpeed={3}>Fastify</GradientText> for speed
        and <GradientText animationSpeed={3}>Prisma</GradientText> for clarity
        and structure.
      </h2>

      <p className="mt-4 lg:mt-6 subtitle">
        I enjoy taking care of the entire development process: from designing
        clean, intuitive interfaces to shaping robust database architectures.
        Code is my medium, and building is what keeps me in flow. Outside of
        work, I enjoy playing video games, reading books or comics and running.
      </p>

      <div className="mt-8">
        <Button
          value="About me"
          type="outlined"
          id={"button-about-me"}
          name={"button-about-me"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Button>
      </div>
    </ContainerAnimated>
  );
};

export default AboutHero;
