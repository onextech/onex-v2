const { i18n } = require('./next-i18next.config')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

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
    '@onex/blocks',
    '@onex/layouts',
    '@onex/theme',
    '@onex/types',
    '@onex/components',
    '@onex/providers',
    '@onex/mocks',
    '@onex/tests',
    '@onex/modules',
    '@onex/server',
  ],
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
