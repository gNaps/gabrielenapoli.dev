"use client";

import Button from "@/components/button/button";
import ContainerAnimated from "@/components/container-animated/container-animated";
import { Project } from "@/models/project.model";
import Image from "next/image";
import Link from "next/link";
import SkillIcon from "../skill-icon/skill-icon";

const ProjectDetail = ({
  title,
  subtitle,
  preview,
  skill,
  urlGithub,
  urlPreview,
  gallery,
  content,
}: Project) => {
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
            {skill.map((s, index) => (
              <SkillIcon name={s} key={index} />
            ))}
          </div>
        </ContainerAnimated>
      </div>

      <div className="my-16">
        <ContainerAnimated>
          {/* {contentChildren.map((c: any) => (
            <RenderContent content={c} key={useId()} />
          ))} */}
          {/* <MDXRemote
            compiledSource={content.compiledSource}
            frontmatter={content.frontmatter}
            scope={content.scope}
            components={{
              Card(props) {
                return (
                  <div className="my-8 p-6 rounded-lg shadow-md bg-neutral-900">
                    {props.children}
                  </div>
                );
              },
            }}
          /> */}
          {content}
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
              />
            </Link>
          )}
          {urlGithub && (
            <Link href={urlGithub} target="blank">
              <Button
                value="Github"
                type="outlined"
                id={"button-github"}
                name={"button-github"}
              />
            </Link>
          )}
        </div>
      </ContainerAnimated>

      <div className="flex flex-col md:flex-row md:flexWrap">
        {gallery?.map((g, index) => (
          <div
            className="mb-8 md:odd:pr-5 md:even:pl-5 w-full md:w-1/2"
            key={index}
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
