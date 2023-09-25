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
          // No click-jacking
          { key: 'X-Frame-Options', value: 'DENY' },
          // No sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // No cross-site scripting (XSS)
          { key: 'Content=Security-Policy', value: "default-src 'self'; image-src 'https://unsplash.com'; script-src 'self' https://www.google-analytics.com; font-src 'self' 'https://fonts.googleapis.com';" },
          // No permissions
          { key: 'Permissions-Policy', value: "camera=(); battery=(self); geolocation=(); microphone=()" },
          // No referrer
          { key: 'Referrer-Policy', value: "origin-when-cross-origin" },
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
