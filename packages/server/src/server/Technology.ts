import { MOCK_POSTS, MOCK_TECHNOLOGYS } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getRelatedCrudItemsByTagTitle } from '@gravis-os/utils'
import getDynamicPage, { GetDynamicPageConfigs } from '../utils/getDynamicPage'
import makeGetStaticPaths from '../utils/makeGetStaticPaths'

const { MOCK_KEY } = process.env

// ==============================
// Methods
// ==============================
export const fetchTechnologyBySlug = (injectedSlug) => {
  return MOCK_TECHNOLOGYS[MOCK_KEY].find(({ slug }) => slug === injectedSlug)
}

// ==============================
// Export
// ==============================
export const TechnologyList = {
  getStaticProps:
    ({ configs }: { configs: GetDynamicPageConfigs }): GetStaticProps =>
    (context) => {
      const technologys = MOCK_TECHNOLOGYS[MOCK_KEY]
      return { props: { technologys } }
    },
}

export const TechnologyDetail = {
  getStaticProps:
    ({ configs }: { configs: GetDynamicPageConfigs }): GetStaticProps =>
    (context) => {
      const technology = fetchTechnologyBySlug(context.params.slug)
      const technologyPage = getDynamicPage(technology, configs)
      const relatedPosts = getRelatedCrudItemsByTagTitle(
        MOCK_POSTS[MOCK_KEY],
        technology?.title
      ).slice(0, 3)
      return { props: { technology: technologyPage, relatedPosts } }
    },
  getStaticPaths: (): GetStaticPaths =>
    makeGetStaticPaths({
      paths: MOCK_TECHNOLOGYS[MOCK_KEY].map(({ slug }) => ({
        params: { slug },
      })),
    }),
}
