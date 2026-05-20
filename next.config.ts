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
    proxyClientMaxBodySize: 50 * 1024 * 1024, // 50MB in bytes
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/blog/:slug/',
        destination: '/:slug/',
        permanent: true,
      },
      {
        source: '/australia/blog/:slug',
        destination: '/australia/:slug/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
