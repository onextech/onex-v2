import { MOCK_PAGES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'

import { getStaticPathsWithLayout } from '../nextjs'
import getStaticPropsWithLayout from '../utils/getStaticPropsWithLayout'
import { fetchSite } from './Site'
import { getDynamicPage } from '../utils'

const { MOCK_KEY = '' } = process.env

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
    return getStaticPropsWithLayout({ props: { pages } })(context)
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
      return getStaticPropsWithLayout({ props: { page: dynamicPage } })(context)
    },
  getStaticPaths: (): GetStaticPaths =>
    getStaticPathsWithLayout({
      paths: MOCK_PAGES[MOCK_KEY].map(({ slug }) => ({
        params: { slug },
      })),
    }),
}
