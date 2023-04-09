import { GetStaticPathsResult } from 'next/types'
import { getStaticPathsWithLocales } from '@gravis-os/query'

/**
 * An abstracted getStaticPaths function to set default parameters
 *
 * Abstracted from @link https://github.com/i18next/next-i18next/blob/master/examples/ssg/lib/getStatic.js
 * @param staticPathsResults
 */
const makeGetStaticPaths =
  (staticPathsResults: Omit<GetStaticPathsResult, 'fallback'>) =>
  async (context) => {
    return getStaticPathsWithLocales({
      fallback: false,
      ...staticPathsResults,
    })(context)
  }

export default makeGetStaticPaths
