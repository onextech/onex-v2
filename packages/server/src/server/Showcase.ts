import { MOCK_SHOWCASES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getStaticPathsWithLayout } from '@gravis-os/landing/server'
import getStaticPropsWithLayout from '../utils/getStaticPropsWithLayout'
import { fetchSite } from './Site'
import { getDynamicPage } from '../utils'

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
    return getStaticPropsWithLayout({ props: { showcases } })(context)
  },
}

export const ShowcaseDetail = {
  getStaticProps: (): GetStaticProps => (context) => {
    const showcase = fetchShowcaseBySlug(context.params?.slug)
    const site = fetchSite()
    const showcasePage = getDynamicPage({ context, page: showcase, site })
    const otherShowcases = MOCK_SHOWCASES[MOCK_KEY].filter(
      ({ slug }) => slug !== context.params?.slug
    ).slice(0, 3)
    return getStaticPropsWithLayout({
      props: { showcase: showcasePage, otherShowcases },
    })(context)
  },
  getStaticPaths: (): GetStaticPaths =>
    getStaticPathsWithLayout({
      paths: MOCK_SHOWCASES[MOCK_KEY].map(({ slug }) => ({
        params: { slug },
      })),
    }),
}
