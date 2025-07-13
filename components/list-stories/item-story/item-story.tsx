"use client";

import ButtonCircleAnimated from "@/components/button-circle-animated/button-circle-animated";
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
    <>
      <ContainerAnimated>
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
          <div onClick={openDetailStory}>
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
      </ContainerAnimated>
    </>
  );
};

export default ItemStory;
