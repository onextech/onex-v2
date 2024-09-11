export const config = {
  regions: ['sin1'],
  runtime: 'edge',
  // @link: https://github.com/lodash/lodash/issues/5525
  unstable_allowDynamic: [
    '**/node_modules/lodash/_root.js', // use a glob to allow anything in the function-bind 3rd party module
    '**/node_modules/@mui/**/*.js',
  ],
}

export { handlePostEnquiry as default } from '@onex/landing'
