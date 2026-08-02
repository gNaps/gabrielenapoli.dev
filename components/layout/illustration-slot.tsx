import Image from "next/image";

/* Image panel matching the design's <image-slot>: the parent carries
   border/shadow/min-height, this fills it. Without `src` it renders a
   halftone placeholder so the design's empty slots keep their shape;
   drop the exported art into public/cms and pass its path to fill it. */
export default function IllustrationSlot({
  src,
  alt,
  label = "ILLUSTRATION · 挿絵",
  priority = false,
  sizes = "(max-width: 820px) 100vw, 50vw",
}: {
  src?: string;
  alt?: string;
  label?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt ?? ""}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectFit: "cover" }}
      />
    );
  }

  return (
    <div className="illu-slot" aria-hidden>
      <span className="illu-slot__label">{label}</span>
    </div>
  );
}
