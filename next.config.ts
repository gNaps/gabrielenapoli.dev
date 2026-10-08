import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/contacts", destination: "/#contact", permanent: true },
      {
        source: "/courses/:slug",
        destination: "/series/:slug",
        permanent: true,
      },
      {
        source:
          "/stories/rxjs-zip-vs-combinelast-vs-withlatestfrom-vs-forkJoin",
        destination:
          "/stories/rxjs-zip-vs-combinelatest-vs-withlatestfrom-vs-forkjoin",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
