/** @type {import('next').NextConfig} */
// const withPWA = require("next-pwa")({
// dest: "public",
// });

// module.exports = withPWA({
// typescript: {
// ignoreBuildErrors: true,
// },
// reactStrictMode: true,
// images: {
// domains: [
// "user-images.githubusercontent.com",
// "cdn.myanimelist.net",
// "i.ytimg.com",
// ],
// },
// });

const nextConfig = {
reactStrictMode: true,
images: {
domains: [
"user-images.githubusercontent.com",
"cdn.myanimelist.net",
"i.ytimg.com",
],
},
typescript: {
ignoreBuildErrors: true,
},
};

module.exports = nextConfig;
