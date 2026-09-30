import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve originals directly while Vercel's optimizer is blocked with HTTP 402.
    unoptimized: true,
  },
};

export default nextConfig;
