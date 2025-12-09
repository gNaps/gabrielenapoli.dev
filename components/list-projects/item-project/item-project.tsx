"use client";

import ContainerActionAnimated from "@/components/container-action-animated/container-action-animated";
import SkillIcon from "@/components/skill-icon/skill-icon";
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
      <div onClick={openDetailProject}>
        <ContainerActionAnimated>
          <Image
            src={preview.url}
            alt={preview.alt ?? ""}
            width={800}
            height={400}
            className="rounded-lg img-preview"
          />
          <div className="flex justify-between mt-6">
            <p className="font-semibold text-2xl mb-6">{title}</p>
            <div className="flex gap-3">
              {skill.map((s, index) => (
                <SkillIcon name={s} key={index} />
              ))}
            </div>
          </div>
        </ContainerActionAnimated>
      </div>
    </>
  );
};

export default ItemProject;
