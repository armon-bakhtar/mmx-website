/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/shared/assets/styles')],
    prependData: `@import "./mixins/mixins.scss";`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost:3000',
        port: '',
        pathname:
          '/cloud-poker-night-worker.cloud-poker-night-dev.workers.dev/**',
      },
    ],
  },
};
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({});

module.exports = nextConfig;
