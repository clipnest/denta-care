import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        basePath: "/denta-care",
        assetPrefix: "/denta-care/",
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
