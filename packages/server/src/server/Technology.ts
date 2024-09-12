import { MOCK_POSTS, MOCK_TECHNOLOGYS } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getRelatedCrudItemsByTagTitle } from '@onex/utils'
import dayjs from 'dayjs'
import { getStaticPathsWithLayout } from '../nextjs'
import getStaticPropsWithLayout from '../utils/getStaticPropsWithLayout'
import { fetchSite } from './Site'
import { getDynamicPage } from '../utils'

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
    return getStaticPropsWithLayout({ props: { technologys } })(context)
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
    return getStaticPropsWithLayout({
      props: { technology: technologyPage, relatedPosts },
    })(context)
  },
  getStaticPaths: (): GetStaticPaths =>
    getStaticPathsWithLayout({
      paths: MOCK_TECHNOLOGYS[MOCK_KEY].map(
        ({ slug, exclusive_locales, blocked_locales }) => ({
          params: { slug, exclusive_locales, blocked_locales },
        })
      ),
    }),
}
