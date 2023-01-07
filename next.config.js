/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  images: {
    domains: [
      's3-alpha-sig.figma.com',
      'files.stripe.com',
      'media.graphassets.com',
    ],
  },
}

module.exports = nextConfig
