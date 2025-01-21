import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // This will disable ESLint during builds
  },
  images: {
    domains: ["books.google.com"], // Add the domain here
  },
};

export default nextConfig;
