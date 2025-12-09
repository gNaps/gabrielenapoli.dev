"use client";

import ContainerActionAnimated from "@/components/container-action-animated/container-action-animated";
import ContainerAnimated from "@/components/container-animated/container-animated";
import { Story } from "@/models/story.model";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ItemStory = ({ preview, title, writtenAt, slug }: Story) => {
  const router = useRouter();

  const openDetailStory = () => {
    (window as any).goatcounter.count({
      path: "click-story",
      title: slug,
      event: true,
    });
    router.push(`/stories/${slug}`);
  };

  return (
    <div onClick={openDetailStory} className="cursor-pointer">
      <ContainerAnimated>
        <ContainerActionAnimated>
          <Image
            src={preview.url}
            alt={preview.alt}
            width={800}
            height={400}
            className="rounded-lg img-preview"
          />
          <div className="flex justify-between mt-6 gap-2">
            <div className="flex-1">
              <p className="font-semibold text-3xl mb-6">{title}</p>
              <p className="subtitle">{writtenAt}</p>
            </div>
          </div>
        </ContainerActionAnimated>
      </ContainerAnimated>
    </div>
  );
};

export default ItemStory;
