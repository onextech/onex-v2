/* eslint-disable unicorn/consistent-function-scoping */

import { withLocalesToStaticPaths } from '@onex/utils'
import flowRight from 'lodash/flowRight'
import { GetStaticPathsResult } from 'next/types'

const withFallback = (context) => (staticPathsResult: GetStaticPathsResult) => {
  return {
    ...staticPathsResult,
    fallback: false,
  }
}

/**
 * An abstracted getStaticPaths function to set default parameters
 *
 * Abstracted from @link https://github.com/i18next/next-i18next/blob/master/examples/ssg/lib/getStatic.js
 * @param staticPathsResult
 */
const getStaticPathsWithLayout =
  (staticPathsResult: Omit<GetStaticPathsResult, 'fallback'>) =>
  async (context) => {
    return flowRight([
      withLocalesToStaticPaths(context),
      withFallback(context),
    ])(staticPathsResult)
  }

export default getStaticPathsWithLayout
