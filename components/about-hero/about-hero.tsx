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
        I’m a senior <GradientText animationSpeed={2}>Angular</GradientText> and{" "}
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
          onClick={contacts}
        />
      </div>
    </ContainerAnimated>
  );
};

export default AboutHero;
