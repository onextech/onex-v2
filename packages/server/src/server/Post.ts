import { MOCK_POSTS, MOCK_POST_CATEGORYS, MOCK_SERVICES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  getCategoryFromCrudItem,
} from '@gravis-os/utils'
import makeGetStaticPaths from '../utils/makeGetStaticPaths'
import makeGetStaticProps from '../utils/makeGetStaticProps'
import dayjs from 'dayjs'
import { Post } from '@onex/types'

const { MOCK_KEY } = process.env

// ==============================
// Methods
// ==============================
export const fetchPostBySlug = (injectedSlug) => {
  return MOCK_POSTS[MOCK_KEY]
    .filter(({ is_active }) => is_active)
    .filter(({ published_at }) => published_at && dayjs(published_at).isBefore(dayjs()))
    .find(({ slug }) => slug === injectedSlug)
}

// ==============================
// Export
// ==============================

// TO MOVE TO GRAVIS-OS AFTER QA FOR THIS METHOD IS PASSED
export function getRelatedCrudItemsByCategoryId(items: Post[], category_id: number) {
  return items.filter(item => item.category_id === category_id)
}

export const PostDetail = {
  getStaticProps: (): GetStaticProps => (context) => {
    const post = fetchPostBySlug(context.params.slug)
    const postCategory = getCategoryFromCrudItem(
      post,
      MOCK_POST_CATEGORYS[MOCK_KEY]
    )
    const relatedServices = MOCK_SERVICES[MOCK_KEY].filter(
      ({ category_id }) => category_id === post?.category_id
    )
    const relatedPosts = getRelatedCrudItemsByCategoryId(
      MOCK_POSTS[MOCK_KEY]
        .filter(({ title }) => title !== post?.title)
        .filter(({ is_active }) => is_active)
        .filter(({ published_at }) => published_at && dayjs(published_at).isBefore(dayjs())),
      post?.category_id
    ).slice(0, 3)

    return makeGetStaticProps({
      props: {
        post,
        postCategory,
        relatedServices,
        relatedPosts,
      },
    })(context)
  },
  getStaticPaths: (): GetStaticPaths =>
    makeGetStaticPaths({
      paths: MOCK_POSTS[MOCK_KEY]
        .filter(({ is_active }) => is_active)
        .filter(({ published_at }) => published_at && dayjs(published_at).isBefore(dayjs()))
        .map(
        ({ slug, category, exclusive_locales, blocked_locales }) => ({
          params: {
            slug,
            categorySlug: category.slug,
            exclusive_locales,
            blocked_locales,
          },
        })
      ),
    }),
}
