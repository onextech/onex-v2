import { GetStaticPropsResult } from 'next/types'
import { withLocalesToStaticProps } from '@gravis-os/utils'
import flowRight from 'lodash/flowRight'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const withServerSideTranslationsToStaticProps =
  (context) => async (staticPropsResult) => {
    const { locale } = context
    return {
      ...staticPropsResult,
      props: {
        ...staticPropsResult?.props,
        ...(await serverSideTranslations(locale, ['common', 'footer'])),
      },
    }
  }

/**
 * An abstracted getStaticProps function to set default parameters
 *
 * Abstracted from @link https://github.com/i18next/next-i18next/blob/master/examples/ssg/lib/getStatic.js
 * @param staticPropsResult
 */
const makeGetStaticProps =
  (staticPropsResult: GetStaticPropsResult<unknown>) => async (context) => {
    return flowRight([
      await withServerSideTranslationsToStaticProps(context),
      withLocalesToStaticProps(context),
    ])(staticPropsResult)
  }

export default makeGetStaticProps
