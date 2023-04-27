import { MOCK_PAGES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'

import makeGetStaticPaths from '../utils/makeGetStaticPaths'
import makeGetStaticProps from '../utils/makeGetStaticProps'
import getDynamicPage from '../utils/getDynamicPage'
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

// ==============================
// Class
// ==============================
export const PageDetail = {
  getStaticProps:
    ({ slug }): GetStaticProps =>
    (context) => {
      const site = fetchSite()
      const page = fetchPageBySlug(slug || context?.params?.slug)
      const dynamicPage = getDynamicPage({ context, page, site })
      return makeGetStaticProps({ props: { page: dynamicPage } })(context)
    },
  getStaticPaths: (): GetStaticPaths =>
    makeGetStaticPaths({
      paths: MOCK_PAGES[MOCK_KEY].map(({ slug }) => ({
        params: { slug },
      })),
    }),
}
