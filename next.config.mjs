/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportTailingSplash: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "https://JuNyang-02.github.io/JuNyang-02.github.io" : ""
};

export default nextConfig;