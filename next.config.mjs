// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 중요: 정적 사이트로 빌드
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
