"use client";

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
        {/* <div className="eyebrow" style={{ marginBottom: 14 }}>
          Project
        </div> */}
        <h1>{title}</h1>
        {subtitle && (
          <p style={{ marginTop: 16, fontSize: 18, maxWidth: 680 }}>
            {subtitle}
          </p>
        )}
      </ContainerAnimated>

      <div style={{ marginTop: 28 }}>
        <ContainerAnimated>
          <div className="card" style={{ overflow: "hidden" }}>
            <Image
              src={preview.url ?? ""}
              alt={preview.alt ?? ""}
              width={1200}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                aspectRatio: "2",
                objectFit: "cover",
              }}
            />
          </div>
        </ContainerAnimated>
      </div>

      <div style={{ marginTop: 24 }}>
        <ContainerAnimated>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {skill.map((s, index) => (
              <SkillIcon name={s} key={index} />
            ))}
          </div>
        </ContainerAnimated>
      </div>

      {(urlPreview || urlGithub) && (
        <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <ContainerAnimated>
            {urlPreview && (
              <Link href={urlPreview} target="_blank">
                <button className="pill pill-primary">
                  Try it
                  <svg
                    width={13}
                    height={13}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    style={{ fill: "none" }}
                  >
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </button>
              </Link>
            )}
            {urlGithub && (
              <Link href={urlGithub} target="_blank" style={{ marginLeft: 12 }}>
                <button className="pill">
                  GitHub
                  <svg
                    width={13}
                    height={13}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    style={{ fill: "none" }}
                  >
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </button>
              </Link>
            )}
          </ContainerAnimated>
        </div>
      )}

      <div
        className="story-wrapper"
        style={{ maxWidth: 760, margin: "60px auto 0" }}
      >
        <ContainerAnimated>{content}</ContainerAnimated>
      </div>

      {gallery && gallery.length > 0 && (
        <div className="grid-2" style={{ marginTop: 40 }}>
          {gallery.map((g, index) => (
            <ContainerAnimated key={index}>
              <div className="card" style={{ overflow: "hidden" }}>
                <Image
                  src={g.url}
                  alt={g.alt}
                  width={800}
                  height={400}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>
            </ContainerAnimated>
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
