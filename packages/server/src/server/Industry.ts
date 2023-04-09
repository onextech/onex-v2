import { MOCK_POSTS, MOCK_INDUSTRYS } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getRelatedCrudItemsByTagTitle } from '@gravis-os/utils'
import getDynamicPage, { GetDynamicPageConfigs } from '../utils/getDynamicPage'
import makeGetStaticPaths from '../utils/makeGetStaticPaths'

const { MOCK_KEY } = process.env

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
  getStaticProps:
    ({ configs }: { configs: GetDynamicPageConfigs }): GetStaticProps =>
    (context) => {
      const industrys = MOCK_INDUSTRYS[MOCK_KEY]
      return { props: { industrys } }
    },
}

export const IndustryDetail = {
  getStaticProps:
    ({ configs }: { configs: GetDynamicPageConfigs }): GetStaticProps =>
    (context) => {
      const industry = fetchIndustryBySlug(context.params.slug)
      const industryPage = getDynamicPage(industry, configs)
      const relatedPosts = getRelatedCrudItemsByTagTitle(
        MOCK_POSTS[MOCK_KEY],
        industry?.title
      ).slice(0, 3)
      return { props: { industry: industryPage, relatedPosts } }
    },
  getStaticPaths: (): GetStaticPaths =>
    makeGetStaticPaths({
      paths: MOCK_INDUSTRYS[MOCK_KEY].map(({ slug }) => ({
        params: { slug },
      })),
    }),
}
