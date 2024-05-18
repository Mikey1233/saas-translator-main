/** @type {import('next').NextConfig} */
//configure nextjs to only allow images from google user content.com
const nextConfig = {
  images: {
    remotePatterns: [  {
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
    }],
  },
};

module.exports = nextConfig;
