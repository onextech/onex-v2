import { MOCK_PAGES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
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

export const PageDetail = {
  getStaticProps:
    ({ slug }): GetStaticProps =>
    (context) => {
      const page = fetchPageBySlug(slug || context?.params?.slug)
      const site = fetchSite()
      const pagePage = getDynamicPage(page, site)
      return makeGetStaticProps({ props: { page: pagePage } })(context)
    },
  getStaticPaths: (): GetStaticPaths =>
    makeGetStaticPaths({
      paths: MOCK_PAGES[MOCK_KEY].map(({ slug }) => ({
        params: { slug },
      })),
    }),
}
