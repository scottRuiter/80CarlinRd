import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/80CarlinRd",
  assetPrefix: "/80CarlinRd",
};

export default nextConfig;
