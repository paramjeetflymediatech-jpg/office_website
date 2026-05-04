import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["sequelize"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flymediatech.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb',
    },
    middlewareClientMaxBodySize: 50 * 1024 * 1024, // 50MB in bytes
  },
};

export default nextConfig;
