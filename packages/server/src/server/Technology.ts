import { MOCK_POSTS, MOCK_TECHNOLOGYS } from '@onex/mocks'
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
export const fetchTechnologyBySlug = (injectedSlug) => {
  return MOCK_TECHNOLOGYS[MOCK_KEY].find(({ slug }) => slug === injectedSlug)
}

// ==============================
// Export
// ==============================
export const TechnologyList = {
  getStaticProps: (): GetStaticProps => (context) => {
    const technologys = MOCK_TECHNOLOGYS[MOCK_KEY]?.filter(
      ({ is_active }) => is_active
    )
    return makeGetStaticProps({ props: { technologys } })(context)
  },
}

export const TechnologyDetail = {
  getStaticProps: (): GetStaticProps => (context) => {
    const technology = fetchTechnologyBySlug(context.params?.slug)
    const site = fetchSite()
    const technologyPage = getDynamicPage({
      context,
      page: {
        ...technology,
        sections: {
          ...technology?.sections,
          benefits: {
            ...technology?.sections?.benefits,
            items: technology?.sections?.benefits?.items?.slice(0, 4),
          },
        },
      },
      site,
    })
    const relatedPosts = getRelatedCrudItemsByTagTitle(
      MOCK_POSTS[MOCK_KEY].filter(({ is_active }) => is_active).filter(
        ({ published_at }) =>
          published_at && dayjs(published_at).isBefore(dayjs())
      ),
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
