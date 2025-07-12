/** @type {import('next').NextConfig} */
require("dotenv").config(); // Make sure env vars are loaded

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_IMAGE_DOMAIN,
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
