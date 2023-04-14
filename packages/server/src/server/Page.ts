import { MOCK_PAGES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import flowRight from 'lodash/flowRight'
import { getObjectWithGroupedKeyFromPrefix } from '@gravis-os/utils'
import { Page } from '@onex/types'
import getDynamicPage from '../utils/getDynamicPage'
import makeGetStaticPaths from '../utils/makeGetStaticPaths'
import makeGetStaticProps from '../utils/makeGetStaticProps'
import { fetchSite } from './Site'

const { MOCK_KEY } = process.env

// ==============================
// Methods
// ==============================
export const fetchPageBySlug = (injectedSlug) => {
  return MOCK_PAGES[MOCK_KEY].find(({ slug }) => slug === injectedSlug)
}

// ==============================
// Export
// ==============================
export const PageList = {
  getStaticProps: (): GetStaticProps => (context) => {
    const pages = MOCK_PAGES[MOCK_KEY]
    return makeGetStaticProps({ props: { pages } })(context)
  },
}

// ==============================
// Plugins
// ==============================
const withSiteVariablesReplacement = () => (page: Page) => {
  const site = fetchSite()
  return getDynamicPage(page, site)
}

const withSeoTitleFromPageTitle = () => (page: Page) => {
  return {
    ...page,
    seo: {
      title: page.title,
    },
  }
}

const withSeoGrouping = () => (page: Page) => {
  return getObjectWithGroupedKeyFromPrefix(page, 'seo')
}

export const PageDetail = {
  getStaticProps:
    ({ slug }): GetStaticProps =>
    (context) => {
      const page = fetchPageBySlug(slug || context?.params?.slug)
      const nextPage = flowRight(
        withSiteVariablesReplacement(),
        withSeoTitleFromPageTitle(),
        withSeoGrouping()
      )(page)
      return makeGetStaticProps({ props: { page: nextPage } })(context)
    },
  getStaticPaths: (): GetStaticPaths =>
    makeGetStaticPaths({
      paths: MOCK_PAGES[MOCK_KEY].map(({ slug }) => ({
        params: { slug },
      })),
    }),
}
