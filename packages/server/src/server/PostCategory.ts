import { MOCK_POST_CATEGORYS, MOCK_POSTS } from '@onex/mocks'
import dayjs from 'dayjs'
import { GetStaticPaths, GetStaticProps } from 'next'

import { getStaticPathsWithLayout } from '../nextjs'
import getStaticPropsWithLayout from '../utils/getStaticPropsWithLayout'

const { MOCK_KEY = '' } = process.env

// ==============================
// Methods
// ==============================
export const fetchPostCategoryBySlug = (injectedSlug) => {
  return MOCK_POST_CATEGORYS[MOCK_KEY].find(({ slug }) => slug === injectedSlug)
}

// ==============================
// Export
// ==============================
export const PostCategoryList = {
  getStaticProps: (): GetStaticProps =>
    getStaticPropsWithLayout({
      props: {
        postCategorys: MOCK_POST_CATEGORYS[MOCK_KEY],
        posts: MOCK_POSTS[MOCK_KEY].filter(({ is_active }) => is_active).filter(
          ({ published_at }) =>
            published_at && dayjs(published_at).isBefore(dayjs())
        ),
      },
    }),
}

export const PostCategoryDetail = {
  getStaticPaths: (): GetStaticPaths =>
    getStaticPathsWithLayout({
      paths: MOCK_POST_CATEGORYS[MOCK_KEY].map(
        ({ slug, blocked_locales, exclusive_locales }) => ({
          params: { blocked_locales, categorySlug: slug, exclusive_locales },
        })
      ),
    }),
  getStaticProps: (): GetStaticProps => (context) => {
    const postCategory = fetchPostCategoryBySlug(context.params?.categorySlug)
    const posts = MOCK_POSTS[MOCK_KEY].filter(({ is_active }) => is_active)
      .filter(
        ({ published_at }) =>
          published_at && dayjs(published_at).isBefore(dayjs())
      )
      .filter(({ category_id }) => category_id === postCategory?.id)
    return getStaticPropsWithLayout({
      props: {
        postCategory,
        posts,
      },
    })(context)
  },
}
