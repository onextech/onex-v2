import { MOCK_SHOWCASES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import getDynamicPage from '../utils/getDynamicPage'
import makeGetStaticPaths from '../utils/makeGetStaticPaths'
import makeGetStaticProps from '../utils/makeGetStaticProps'
import { fetchSite } from './Site'

const { MOCK_KEY = '' } = process.env

// ==============================
// Methods
// ==============================
export const fetchShowcaseBySlug = (injectedSlug) => {
  return MOCK_SHOWCASES[MOCK_KEY].find(({ slug }) => slug === injectedSlug)
}

// ==============================
// Export
// ==============================
export const ShowcaseList = {
  getStaticProps: (): GetStaticProps => (context) => {
    const showcases = MOCK_SHOWCASES[MOCK_KEY]
    return makeGetStaticProps({ props: { showcases } })(context)
  },
}

export const ShowcaseDetail = {
  getStaticProps: (): GetStaticProps => (context) => {
    const showcase = fetchShowcaseBySlug(context.params?.slug)
    const site = fetchSite()
    const showcasePage = getDynamicPage({ context, page: showcase, site })
    const otherShowcases = MOCK_SHOWCASES[MOCK_KEY].filter(
      ({ slug }) => slug !== context.params?.slug
    ).slice(0, 1)
    return makeGetStaticProps({
      props: { showcase: showcasePage, otherShowcases },
    })(context)
  },
  getStaticPaths: (): GetStaticPaths =>
    makeGetStaticPaths({
      paths: MOCK_SHOWCASES[MOCK_KEY].map(({ slug }) => ({
        params: { slug },
      })),
    }),
}
