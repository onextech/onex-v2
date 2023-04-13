import { MOCK_POSTS, MOCK_TECHNOLOGYS } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getRelatedCrudItemsByTagTitle } from '@gravis-os/utils'
import getDynamicPage from '../utils/getDynamicPage'
import makeGetStaticPaths from '../utils/makeGetStaticPaths'
import makeGetStaticProps from '../utils/makeGetStaticProps'
import { fetchSite } from './Site'

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
  getStaticProps: (): GetStaticProps => (context) => {
    const technologys = MOCK_TECHNOLOGYS[MOCK_KEY]
    return makeGetStaticProps({ props: { technologys } })(context)
  },
}

export const TechnologyDetail = {
  getStaticProps: (): GetStaticProps => (context) => {
    const technology = fetchTechnologyBySlug(context.params.slug)
    const site = fetchSite()
    const technologyPage = getDynamicPage(technology, site)
    const relatedPosts = getRelatedCrudItemsByTagTitle(
      MOCK_POSTS[MOCK_KEY],
      technology?.title
    ).slice(0, 3)
    return makeGetStaticProps({
      props: { technology: technologyPage, relatedPosts },
    })(context)
  },
  getStaticPaths: (): GetStaticPaths =>
    makeGetStaticPaths({
      paths: MOCK_TECHNOLOGYS[MOCK_KEY].map(
        ({ slug, exclusive_locales, blocked_locales }) => ({
          params: { slug, exclusive_locales, blocked_locales },
        })
      ),
    }),
}
