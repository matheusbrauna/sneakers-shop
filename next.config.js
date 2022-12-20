/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      's3-alpha-sig.figma.com',
      'files.stripe.com',
      'media.graphassets.com',
    ],
  },
}

module.exports = nextConfig
