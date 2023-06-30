import { MOCK_POST_CATEGORYS, MOCK_POSTS } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import dayjs from 'dayjs'
import { getStaticPathsWithLayout } from '@gravis-os/landing/server'
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
        posts: MOCK_POSTS[MOCK_KEY].filter(({ is_active }) => is_active).filter(
          ({ published_at }) =>
            published_at && dayjs(published_at).isBefore(dayjs())
        ),
        postCategorys: MOCK_POST_CATEGORYS[MOCK_KEY],
      },
    }),
}

export const PostCategoryDetail = {
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
        posts,
        postCategory,
      },
    })(context)
  },
  getStaticPaths: (): GetStaticPaths =>
    getStaticPathsWithLayout({
      paths: MOCK_POST_CATEGORYS[MOCK_KEY].map(
        ({ slug, exclusive_locales, blocked_locales }) => ({
          params: { categorySlug: slug, exclusive_locales, blocked_locales },
        })
      ),
    }),
}
