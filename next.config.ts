import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nowcztkpmujavsqekxud.supabase.co",
      },
    ],
  },
};

export default nextConfig;
