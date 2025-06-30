/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com', 'images.unsplash.com'],
  },
  basePath: "/pulse-ai-platform",
  assetPrefix: "/pulse-ai-platform/",
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

module.exports = nextConfig;
