"use client";

import ContainerAnimated from "../container-animated/container-animated";

const Hero = () => {
  return (
    <>
      <ContainerAnimated>
        <p className="h4">
          Hello, I'm{" "}
          <span className="text-gradient-neon animate-pulse-neon">
            Gabriele
          </span>
          .
        </p>
        <h1 className="mt-3 lg:mt text-gradient-neon">
          Fullstack developer from Milan. Crafting beatiful web experiences.
        </h1>

        <p className="mt-4 lg:mt-6 subtitle">
          With +5 years of experience in web development, I build full-stack
          JavaScript applications that are fast, clean, and scalable. I’m
          passionate about technology, constantly learning, and love turning
          ideas into real, usable products.
        </p>

        {/* <div className="mt-8">
          <Button
            value="Let's talk"
            onClick={contacts}
            id={"button-lets-talk-hero"}
            name={"button-lets-talk-hero"}
          ></Button>
        </div> */}
      </ContainerAnimated>
    </>
  );
};

export default Hero;
