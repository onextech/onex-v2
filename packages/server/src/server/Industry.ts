import { MOCK_POSTS, MOCK_INDUSTRYS } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getRelatedCrudItemsByTagTitle } from '@gravis-os/utils'
import dayjs from 'dayjs'
import getDynamicPage from '../utils/getDynamicPage'
import makeGetStaticPaths from '../utils/makeGetStaticPaths'
import makeGetStaticProps from '../utils/makeGetStaticProps'
import { fetchSite } from './Site'

const { MOCK_KEY = '' } = process.env

// ==============================
// Methods
// ==============================
export const fetchIndustryBySlug = (injectedSlug) => {
  return MOCK_INDUSTRYS[MOCK_KEY].find(({ slug }) => slug === injectedSlug)
}

// ==============================
// Export
// ==============================
export const IndustryList = {
  getStaticProps: (): GetStaticProps =>
    makeGetStaticProps({
      props: { industrys: MOCK_INDUSTRYS[MOCK_KEY] },
    }),
}

export const IndustryDetail = {
  getStaticProps: (): GetStaticProps => (context) => {
    const industry = fetchIndustryBySlug(context.params?.slug)
    const site = fetchSite()
    const industryPage = getDynamicPage({ context, page: industry, site })
    const relatedPosts = getRelatedCrudItemsByTagTitle(
      MOCK_POSTS[MOCK_KEY].filter(({ is_active }) => is_active).filter(
        ({ published_at }) =>
          published_at && dayjs(published_at).isBefore(dayjs())
      ),
      industry?.title
    ).slice(0, 3)

    return makeGetStaticProps({
      props: { industry: industryPage, relatedPosts },
    })(context)
  },
  getStaticPaths: (): GetStaticPaths =>
    makeGetStaticPaths({
      paths: MOCK_INDUSTRYS[MOCK_KEY].map(
        ({ slug, exclusive_locales, blocked_locales }) => ({
          params: { slug, exclusive_locales, blocked_locales },
        })
      ),
    }),
}
