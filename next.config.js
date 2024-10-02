/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();

const nextConfig = withNextIntl({
  images: {
    domains: ["dev.grand-community.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev.grand-community.com",
      },
    ],
  },
});

module.exports = nextConfig;
