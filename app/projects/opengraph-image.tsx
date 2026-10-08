import { socialImage } from "@/utils/social-image";
export const alt = "Projects and case studies by Gabriele Napoli";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return socialImage(
    "WORK",
    "Things I’ve built.",
    "Products, side projects and tools. Built in Milan.",
  );
}
