"use client";

import Button from "@/components/button/button";
import ContainerAnimated from "@/components/container-animated/container-animated";
import RenderContent from "@/components/render-content/render-content";
import { Project } from "@/models/project.model";
import Image from "next/image";
import Link from "next/link";
import { useId } from "react";

const ProjectDetail = ({
  title,
  subtitle,
  preview,
  skill,
  content,
  urlGithub,
  urlPreview,
  gallery,
}: Project) => {
  const {
    value: {
      document: { children: contentChildren },
    },
  } = content;

  return (
    <>
      <ContainerAnimated>
        <p className="h4">{title}</p>
        <h1 className="mt-3 lg:mt-7">{subtitle}</h1>
      </ContainerAnimated>

      <div className="my-8 flex justify-center">
        <ContainerAnimated>
          <Image
            src={preview.url ?? ""}
            alt={preview.alt ?? ""}
            width={1200}
            height={600}
            className="rounded-lg img-project"
          />
        </ContainerAnimated>
      </div>

      <div className="mb-16">
        <ContainerAnimated>
          <div className="flex gap-5 justify-center">
            {skill.map((s) => (
              <div
                dangerouslySetInnerHTML={{ __html: s.icon }}
                key={s.id}
                className="w-12 h-12 md:w-16 md:h-16"
              ></div>
            ))}
          </div>
        </ContainerAnimated>
      </div>

      <div className="my-16">
        <ContainerAnimated>
          {contentChildren.map((c: any) => (
            <RenderContent content={c} key={useId()} />
          ))}
        </ContainerAnimated>
      </div>

      <ContainerAnimated>
        <div className="my-16 flex gap-3 flex-row">
          {urlPreview && (
            <Link href={urlPreview} target="blank">
              <Button
                value="Try it"
                id={"button-try-it"}
                name={"button-try-it"}
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
            </Link>
          )}
          {urlGithub && (
            <Link href={urlGithub} target="blank">
              <Button
                value="Github"
                type="outlined"
                id={"button-github"}
                name={"button-github"}
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
            </Link>
          )}
        </div>
      </ContainerAnimated>

      <div className="flex flex-col md:flex-row md:flexWrap">
        {gallery.map((g) => (
          <div
            className="mb-8 md:odd:pr-5 md:even:pl-5 w-full md:w-1/2"
            key={g.id}
          >
            <ContainerAnimated>
              <Image
                src={g.url}
                alt={g.alt}
                width={800}
                height={400}
                className="roundedLg"
              />
            </ContainerAnimated>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectDetail;
