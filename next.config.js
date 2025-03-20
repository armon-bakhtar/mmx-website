/** @type {import('next').NextConfig} */
const path = require('path');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Remove the experimental.appDir setting as it's now stable in newer Next.js versions
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/shared/assets/styles')],
    prependData: `@import "./mixins/mixins.scss";`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost:3000',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add output configuration for better AWS Amplify compatibility
  output: 'standalone',
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([[withBundleAnalyzer]], {
  ...nextConfig,
});