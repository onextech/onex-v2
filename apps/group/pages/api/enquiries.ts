import { handlePostEnquiry } from '@onex/modules'

export const config = {
  runtime: 'edge',
  regions: ['sin1'],
  // @link: https://github.com/lodash/lodash/issues/5525
  unstable_allowDynamic: [
    '**/node_modules/lodash/_root.js', // use a glob to allow anything in the function-bind 3rd party module
  ],
}

export default handlePostEnquiry
