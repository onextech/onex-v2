// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Path to Next.js app to load next.config.js
  dir: './',
})

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom', // jsdom is required for rtl
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(test).[jt]s?(x)'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
}

module.exports = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)()
  return {
    /**
     * Using ...(await createJestConfig(customJestConfig)()) to override transformIgnorePatterns
     * provided byt next/jest.
     *
     * @link https://github.com/vercel/next.js/issues/36077#issuecomment-1096635363
     */
    ...nextJestConfig,
    /**
     * Swiper use ECMAScript Modules (ESM) and Jest provides some experimental support for it
     * but "node_modules" are not transpiled by next/jest yet.
     *
     * The "transformIgnorePatterns" on "jest.config.js" prevents the Swiper files from being
     * transformed by Jest but it affects the CSS files that are provided by this package.
     * Mocking these CSS files is the solution that demands the smallest configuration.
     *
     * @link https://github.com/vercel/next.js/issues/36077#issuecomment-1096698456
     * @link https://jestjs.io/docs/ecmascript-modules
     */
    transformIgnorePatterns: ['../../node_modules/(?!(jose|@supabase)/)'],
    transform: {
      ...nextJestConfig?.transform,
    },
    moduleNameMapper: {
      // Workaround to put our SVG stub first to allow svg imports
      // https://github.com/vercel/next.js/issues/35634#issuecomment-1080942525
      '\\.svg': '<rootDir>/src/tests/svgStub.js',
      ...nextJestConfig.moduleNameMapper,
    },
  }
}
