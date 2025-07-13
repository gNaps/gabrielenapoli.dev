"use client";

import { useRouter } from "next/navigation";
import Button from "../button/button";
import ContainerAnimated from "../container-animated/container-animated";
import GradientText from "../gradient-text/gradient-text";

const Hero = () => {
  const router = useRouter();

  const contacts = () => {
    (window as any).goatcounter.count({
      path: "click-contacts-header",
      event: true,
    });
    router.push(`/contacts`);
  };

  return (
    <>
      <ContainerAnimated>
        <p className="h4">Hello, I'm Gabriele.</p>

        <GradientText animationSpeed={3}>
          <h1 className="mt-3 lg:mt">
            Fullstack developer from Milan. Crafting beatiful web experiences.
          </h1>
        </GradientText>

        <p className="mt-4 lg:mt-6 subtitle">
          With +5 years of experience in web development, I build full-stack
          JavaScript applications that are fast, clean, and scalable. I’m
          passionate about technology, constantly learning, and love turning
          ideas into real, usable products.
        </p>

        <div className="mt-8">
          <Button
            value="Let's talk"
            onClick={contacts}
            id={"button-lets-talk-hero"}
            name={"button-lets-talk-hero"}
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
    </>
  );
};

export default Hero;
