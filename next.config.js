/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

// next.config.js
module.exports = {
  images: {
    domains: ["i.imgur.com", "res.cloudinary.com"],
  },
};
