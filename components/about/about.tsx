"use client";

import { Experience } from "@/models/experience.model";
import { Stack } from "@/models/stack.model";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ContainerAnimated from "../container-animated/container-animated";
import GradientText from "../gradient-text/gradient-text";

interface AbuoutProps {
  experiences: Experience[];
  stacks: Stack[];
}

const About = ({ experiences, stacks }: AbuoutProps) => {
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
          </div>
        </div>
        <div className="flex justify-center my-8">
          <div
            className="rounded-full w-56 h-56 lg:w-64 lg:h-64"
            style={{
              backgroundImage: `url(/cms/about_me.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center 70%",
            }}
          ></div>
        </div>
        <h2>
          I’m a senior <GradientText animationSpeed={3}>Angular</GradientText>{" "}
          and <GradientText animationSpeed={3}>React</GradientText> developer,
          passionate about crafting seamless and performant web applications. On
          the backend, I love working with{" "}
          <GradientText animationSpeed={3}>Node.js</GradientText> especially
          when using <GradientText animationSpeed={3}>Fastify</GradientText> for
          speed and <GradientText animationSpeed={3}>Prisma</GradientText> for
          clarity and structure.
        </h2>
      </ContainerAnimated>

      <div className="my-16">
        <ContainerAnimated>
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

        {experiences.map((exp) => (
          <ContainerAnimated key={exp.id}>
            <div className="flex my-10 pb-3 rounded-lg bg-neutral-900 p-4">
              <div className="flex flex-col w-full">
                <div className="flex items-center">
                  <Image
                    src={exp.logo}
                    alt={exp.slug}
                    width={100}
                    height={100}
                    className="w-16 h-16 mr-4 rounded-md object-contain"
                  />
                  <div>
                    <p className="text-2xl mb-2">{exp.jobTitle}</p>
                    <p className="mb-2">
                      @{exp.company} | {exp.yearStart} - {exp.yearEnd || "Now"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 my-3">
                  {exp.skills.map((s) => (
                    <div
                      dangerouslySetInnerHTML={{ __html: s.icon! }}
                      key={s.id}
                      className="w-8 h-8"
                    ></div>
                  ))}
                </div>
                <div className="text-sm">
                  {exp.description ? (
                    <MDXRemote
                      compiledSource={exp.description.compiledSource}
                      frontmatter={exp.description.frontmatter}
                      scope={exp.description.scope}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </ContainerAnimated>
        ))}
      </div>

      <div className="my-16">
        <ContainerAnimated>
          <h4 className="mb-6">STACK</h4>
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 px-10">
            {stacks.map((s) => (
              <div
                className="flex flex-col items-center justify-center gap-2 my-6"
                key={s.id}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: s.skill.icon! }}
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
