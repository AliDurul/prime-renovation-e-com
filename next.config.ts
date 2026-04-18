import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents: true,
  images: {
    remotePatterns: [
      new URL('https://images.unsplash.com/**')
    ],
  }
};

export default nextConfig;
