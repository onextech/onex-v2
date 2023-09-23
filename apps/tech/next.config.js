const { i18n } = require('./next-i18next.config')

const withBundleAnalyzer =
  process.env.ANALYZE === 'true' ? require('@next/bundle-analyzer')() : (x) => x

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  i18n,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'source.unsplash.com' },
      { protocol: 'https', hostname: 'unsplash.com' },
    ],
  },
  reactStrictMode: true,
  transpilePackages: [
    '@onex/common',
    '@onex/layouts',
    '@onex/mocks',
    '@onex/tests',
    '@onex/server',
    '@gravis-os/analytics',
    '@gravis-os/config',
    '@gravis-os/form',
    '@gravis-os/landing',
    '@gravis-os/query',
    '@gravis-os/theme',
    '@gravis-os/storage',
    '@gravis-os/ui',
    '@gravis-os/utils',
  ],
  async headers() {
    return [
      {
        source: '/(.*)?', // Matches all pages
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          }
        ]
      }
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
