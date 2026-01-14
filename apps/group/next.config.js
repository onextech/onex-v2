const { i18n } = require('./next-i18next.config')

const withBundleAnalyzer =
  process.env.ANALYZE === 'true' ? require('@next/bundle-analyzer')() : (x) => x

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  i18n,
  reactStrictMode: true,
  // Use SWC minification for smaller bundles
  swcMinify: true,
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  productionBrowserSourceMaps: false,
  // Experimental optimizations
  experimental: {
    optimizePackageImports: [
      '@onex/ui',
      '@onex/landing',
      '@onex/components',
      '@onex/pages',
      '@mui/material',
      '@mui/icons-material',
      '@mui/lab',
      'keen-slider',
      'react-hot-toast',
      'dayjs',
      'yup',
      'react-hook-form',
      '@hookform/resolvers',
      'lucide-react',
      'recharts',
      'embla-carousel-react',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-tabs',
      'next-seo',
    ],
  },
  // Optimize MUI icons imports
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  transpilePackages: [
    '@onex/common',
    '@onex/layouts',
    '@onex/mocks',
    '@onex/tests',
    '@onex/server',
    '@onex/ui',
    '@onex/utils',
    '@onex/landing',
    '@onex/config',
    '@onex/types',
    '@onex/analytics',
    '@onex/theme',
    '@onex/form',
    '@onex/components',
  ],
  async headers() {
    return [
      {
        source: '/(.*)?', // Matches all pages
        headers: [
          // No click-jacking
          { key: 'X-Frame-Options', value: 'DENY' },
          // No sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // No permissions
          {
            key: 'Permissions-Policy',
            value: 'camera=(), battery=(self), geolocation=(), microphone=()',
          },
          // No referrer
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/sg/:path*',
        destination: '/:path*',
        permanent: true, // 301 redirect
      },
    ]
  },
  webpack(config) {
    // Svg support
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    /** Ensure our libs barrel files don't constitute imports
     * @link https://github.com/vercel/next.js/issues/12557#issuecomment-994278512
     */
    // eslint-disable-next-line no-param-reassign
    config.module.rules = [
      ...config.module.rules,
      {
        test: /packages\/.*src\/index.ts/i,
        sideEffects: false,
      },
    ]
    return config
  },
})
