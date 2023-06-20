/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  transpilePackages: ["emails"],
  distDir: "build",
};

module.exports = nextConfig;
