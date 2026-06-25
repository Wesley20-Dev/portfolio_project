import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Thum.io — service de captures d'écran automatiques (screenshot-as-a-service)
        protocol: "https",
        hostname: "image.thum.io",
        pathname: "/get/**",
      },
    ],
  },
};

export default nextConfig;
