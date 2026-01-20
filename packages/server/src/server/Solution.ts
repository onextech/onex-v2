import { MOCK_POSTS, MOCK_SOLUTIONS } from '@onex/mocks'
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
export const fetchSolutionBySlug = (injectedSlug: string) => {
  return MOCK_SOLUTIONS[MOCK_KEY]?.find(({ slug }) => slug === injectedSlug)
}

// ==============================
// Export
// ==============================
export const SolutionList = {
  getStaticProps: (): GetStaticProps => (context) => {
    const solutions = MOCK_SOLUTIONS[MOCK_KEY]?.filter(
      ({ is_active }) => is_active
    )
    return getStaticPropsWithLayout({ props: { solutions } })(context)
  },
}

export const SolutionDetail = {
  getStaticProps: (): GetStaticProps => (context) => {
    const solution = fetchSolutionBySlug(context.params?.solutionSlug as string)
    const site = fetchSite()
    const solutionPage = getDynamicPage({
      context,
      page: {
        ...solution,
        sections: {
          ...solution?.sections,
          benefits: {
            ...solution?.sections?.benefits,
            items: solution?.sections?.benefits?.items?.slice(0, 4),
          },
        },
      },
      site,
    })
    const relatedPosts = getRelatedCrudItemsByTagTitle(
      MOCK_POSTS[MOCK_KEY]?.filter(({ is_active }) => is_active).filter(
        ({ published_at }) =>
          published_at && dayjs(published_at).isBefore(dayjs())
      ) || [],
      solution?.title
    ).slice(0, 3)
    return getStaticPropsWithLayout({
      props: { solution: solutionPage, relatedPosts },
    })(context)
  },
  getStaticPaths: (): GetStaticPaths =>
    getStaticPathsWithLayout({
      paths: (MOCK_SOLUTIONS[MOCK_KEY] || []).map(
        ({ slug, exclusive_locales, blocked_locales }) => ({
          params: { solutionSlug: slug, exclusive_locales, blocked_locales },
        })
      ),
    }),
}
