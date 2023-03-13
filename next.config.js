/** @type {import("next").NextConfig} */

module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "avatars.githubusercontent.com",
      "cdn.myanimelist.net",
      "i.ytimg.com",
      "i.scdn.co",
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};
