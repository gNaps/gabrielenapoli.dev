"use client";

import ButtonCircleAnimated from "@/components/button-circle-animated/button-circle-animated";
import { Project } from "@/models/project.model";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ItemProject = ({ preview, title, skill, slug }: Project) => {
  const router = useRouter();

  const openDetailProject = () => {
    (window as any).goatcounter.count({
      path: "click-project",
      title: slug,
      event: true,
    });
    router.push(`/projects/${slug}`);
  };

  return (
    <>
      <Image
        src={preview.url}
        alt={preview.alt ?? ""}
        width={800}
        height={400}
        className="rounded-lg img-preview"
      />
      <div className="flex justify-between mt-6">
        <div>
          <p className="font-semibold text-2xl mb-6">{title}</p>
          <div className="flex gap-3">
            {skill.map((s) => (
              <div
                dangerouslySetInnerHTML={{ __html: s.icon }}
                key={s.id}
                className="w-8 w-8 md:w-10 md:h-10"
              ></div>
            ))}
          </div>
        </div>
        <div onClick={openDetailProject}>
          <ButtonCircleAnimated>
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
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </ButtonCircleAnimated>
        </div>
      </div>
    </>
  );
};

export default ItemProject;
