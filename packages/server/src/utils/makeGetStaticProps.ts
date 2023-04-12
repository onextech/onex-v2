import { GetStaticPropsResult } from 'next/types'
import { withLocalesToStaticProps } from '@gravis-os/utils'
import flowRight from 'lodash/flowRight'
import withLayoutProviderPropsToStaticProps from './withLayoutProviderPropsToStaticProps'
import withServerSideTranslationsToStaticProps from './withServerSideTranslationsToStaticProps'

/**
 * An abstracted getStaticProps function to set default parameters
 *
 * Abstracted from @link https://github.com/i18next/next-i18next/blob/master/examples/ssg/lib/getStatic.js
 * @param staticPropsResult
 */
const makeGetStaticProps =
  (
    staticPropsResult:
      | GetStaticPropsResult<unknown>
      | Record<string, never> = {}
  ) =>
  async (context) => {
    return flowRight([
      withServerSideTranslationsToStaticProps(context),
      withLayoutProviderPropsToStaticProps(context),
      withLocalesToStaticProps(context),
    ])(staticPropsResult)
  }

export default makeGetStaticProps
