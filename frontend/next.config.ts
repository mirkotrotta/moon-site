// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  webpack(config: any) {
    config.resolve.alias['@'] = __dirname;
    return config;
  },
  transpilePackages: ['gray-matter'],
  // Disable linting during build for deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable type checking during build for deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  // Remove output mode to use default behavior
  // output: 'standalone',
};

module.exports = nextConfig;
