import { MOCK_POSTS, MOCK_POST_CATEGORYS, MOCK_SERVICES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  getCategoryFromCrudItem,
  getRelatedCrudItemsByTagTitle,
} from '@gravis-os/utils'
import makeGetStaticPaths from '../utils/makeGetStaticPaths'
import makeGetStaticProps from '../utils/makeGetStaticProps'

const { MOCK_KEY } = process.env

// ==============================
// Methods
// ==============================
export const fetchPostBySlug = (injectedSlug) => {
  return MOCK_POSTS[MOCK_KEY].filter(({ is_active }) => is_active).find(({ slug }) => slug === injectedSlug)
}

// ==============================
// Export
// ==============================
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
    const relatedPosts = getRelatedCrudItemsByTagTitle(
      MOCK_POSTS[MOCK_KEY].filter(({ is_active, published_at }) => is_active && published_at && Date.parse(published_at) <= new Date().getTime()),
      post?.title
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
      paths: MOCK_POSTS[MOCK_KEY].filter(({ is_active, published_at }) => is_active && published_at && Date.parse(published_at) <= new Date().getTime()).map(
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
