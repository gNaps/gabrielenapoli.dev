import { socialImage } from "@/utils/social-image";
export const alt = "Articles and guides by Gabriele Napoli";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return socialImage(
    "STORIES",
    "Notes from the desk.",
    "Angular · JavaScript · Web development · AI",
  );
}
