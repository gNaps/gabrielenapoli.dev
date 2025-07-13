"use client";

import { AllExperiencesData } from "@/models/experience.model";
import { AllStacksData } from "@/models/stack.model";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../button/button";
import ContainerAnimated from "../container-animated/container-animated";
import GradientText from "../gradient-text/gradient-text";
import RenderContent from "../render-content/render-content";

interface AbuoutProps {
  experiences: AllExperiencesData;
  stacks: AllStacksData;
}

const About = ({ experiences, stacks }: AbuoutProps) => {
  const router = useRouter();

  console.log("experiences", experiences);

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
        <p className="h4">About me.</p>
        <div className="flex flex-col">
          <h1 className="mt-3 lg:mt-7">
            In the world of the digital era,{" "}
            <GradientText animationSpeed={3}>
              it's innovate or die.
            </GradientText>
          </h1>
          <div className="flex flex-col">
            <p className="mt-4 lg:mt-6 subtitle">
              Hello universe! I’m Gabriele. Find out a little more about me
              here.
            </p>

            <div className="mt-8">
              <Button
                value="Let's talk"
                onClick={contacts}
                id={"button-lets-talk-home"}
                name={"button-lets-talk-home"}
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
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://www.datocms-assets.com/110849/1699911074-about-me.webp"
            alt="Gabriele Napoli"
            width={1200}
            height={600}
            className="rounded-lg mt-8"
          />
        </div>
      </ContainerAnimated>

      <div className="my-16">
        <ContainerAnimated>
          <h2>
            I’m a senior <GradientText animationSpeed={3}>Angular</GradientText>{" "}
            and <GradientText animationSpeed={3}>React</GradientText> developer,
            passionate about crafting seamless and performant web applications.
            On the backend, I love working with{" "}
            <GradientText animationSpeed={3}>Node.js</GradientText> especially
            when using <GradientText animationSpeed={3}>Fastify</GradientText>{" "}
            for speed and <GradientText animationSpeed={3}>Prisma</GradientText>{" "}
            for clarity and structure.
          </h2>

          <p className="mt-4 lg:mt-6 subtitle">
            I enjoy taking care of the entire development process: from
            designing clean, intuitive interfaces to shaping robust database
            architectures. Code is my medium, and building is what keeps me in
            flow. Outside of work, I enjoy playing video games, reading books or
            comics and running.
          </p>
        </ContainerAnimated>
      </div>

      <div className="my-16">
        <ContainerAnimated>
          <h4>EXPERIENCES</h4>
        </ContainerAnimated>

        {experiences.data.allExperiences.map((exp) => (
          <div
            className="flex flex-col-reverse md:flex-row md:justify-between my-10 exp-card pb-3 border-b border-white"
            key={exp.id}
          >
            <ContainerAnimated>
              <div className="flex flex-col w-full md:w-4/5">
                <p className="text-2xl mb-2">{exp.jobTitle}</p>
                <p className="mb-2">@{exp.company}</p>
                <div className="flex gap-3 mb-2">
                  {exp.skill.map((s) => (
                    <div
                      dangerouslySetInnerHTML={{ __html: s.icon }}
                      key={s.id}
                      className="w-6 h-6"
                    ></div>
                  ))}
                </div>
                <div>
                  {exp.description?.value?.document?.children ? (
                    <RenderContent
                      content={exp.description?.value?.document?.children}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="flex gap-1 mb-2 md:mb-0">
                <p className="bg-neutral-900 h-max p-2 rounded-lg">
                  {exp.yearStart} - {exp.yearEnd || "Present"}
                </p>
              </div>
            </ContainerAnimated>
          </div>
        ))}
      </div>

      <div className="my-16">
        <ContainerAnimated>
          <h4 className="mb-6">STACK</h4>
          <div className="w-full flex flex-wrap px-10">
            {stacks.data.allStacks.map((s) => (
              <div
                className="flex flex-col items-center my-6 gap-2 stack-wrapper"
                key={s.id}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: s.skill.icon }}
                  key={s.id}
                  className="w-16 h-16"
                ></div>
                {s.learning && (
                  <p className="gradient-no-text px-2 rounded-full">Learning</p>
                )}
              </div>
            ))}
          </div>
        </ContainerAnimated>
      </div>
    </>
  );
};

export default About;
