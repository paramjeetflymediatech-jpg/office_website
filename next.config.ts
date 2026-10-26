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
        source: '/terms-conditons/',
        destination: '/terms-conditions/',
        permanent: true,
      },
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
      {
        source: '/seo-training-internship-program/',
        destination: 'https://course.flymediatech.com/packages/category/digital-marketing',
        permanent: true,
      },
    ];

  },

};

export default nextConfig;
