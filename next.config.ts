import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "article.images.consumerreports.org",
      },
    ],
  },
};

export default nextConfig;
