import { MOCK_POSTS, MOCK_POST_CATEGORYS, MOCK_SERVICES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  getCategoryFromCrudItem,
  getRelatedCrudItemsByCategoryId,
} from '@gravis-os/utils'
import dayjs from 'dayjs'
import { getStaticPathsWithLayout } from '@gravis-os/landing/server'
import getStaticPropsWithLayout from '../utils/getStaticPropsWithLayout'

const { MOCK_KEY = '' } = process.env

// ==============================
// Methods
// ==============================
export const fetchPostBySlug = (injectedSlug) => {
  return MOCK_POSTS[MOCK_KEY].filter(({ is_active }) => is_active)
    .filter(
      ({ published_at }) =>
        published_at && dayjs(published_at).isBefore(dayjs())
    )
    .find(({ slug }) => slug === injectedSlug)
}

// ==============================
// Export
// ==============================

export const PostDetail = {
  getStaticProps: (): GetStaticProps => (context) => {
    const post = fetchPostBySlug(context.params?.slug)
    const postCategory = getCategoryFromCrudItem(
      post,
      MOCK_POST_CATEGORYS[MOCK_KEY]
    )
    const relatedServices = MOCK_SERVICES[MOCK_KEY].filter(
      ({ category_id }) => category_id === post?.category_id
    ).slice(0, 3)

    const otherPosts = MOCK_POSTS[MOCK_KEY].filter(
      ({ title }) => title !== post?.title
    )
      .filter(({ is_active }) => is_active)
      .filter(
        ({ published_at }) =>
          published_at && dayjs(published_at).isBefore(dayjs())
      )
      .slice(0, 3)

    const relatedPosts = getRelatedCrudItemsByCategoryId(
      otherPosts,
      post?.category_id
    ).slice(0, 3)

    return getStaticPropsWithLayout({
      props: {
        post,
        postCategory,
        relatedServices,
        relatedPosts,
        otherPosts,
      },
    })(context)
  },
  getStaticPaths: (): GetStaticPaths =>
    getStaticPathsWithLayout({
      paths: MOCK_POSTS[MOCK_KEY].filter(({ is_active }) => is_active)
        .filter(
          ({ published_at }) =>
            published_at && dayjs(published_at).isBefore(dayjs())
        )
        .map(({ slug, category, exclusive_locales, blocked_locales }) => ({
          params: {
            slug,
            categorySlug: category.slug,
            exclusive_locales,
            blocked_locales,
          },
        })),
    }),
}
