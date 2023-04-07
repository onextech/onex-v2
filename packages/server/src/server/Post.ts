import { MOCK_POSTS, MOCK_SERVICE_CATEGORYS, MOCK_SERVICES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  getCategoryFromCrudItem,
  getRelatedCrudItemsByTagTitle,
} from '@gravis-os/utils'
import { GetDynamicPageConfigs } from '../utils/getDynamicPage'

const { MOCK_KEY } = process.env

// ==============================
// Methods
// ==============================
export const fetchPostBySlug = (injectedSlug) => {
  return MOCK_POSTS[MOCK_KEY].find(({ slug }) => slug === injectedSlug)
}

// ==============================
// Export
// ==============================
export const PostDetail = {
  getStaticProps:
    ({ configs }: { configs: GetDynamicPageConfigs }): GetStaticProps =>
    (context) => {
      const post = fetchPostBySlug(context.params.slug)
      const postCategory = getCategoryFromCrudItem(
        post,
        MOCK_SERVICE_CATEGORYS[MOCK_KEY]
      )
      const relatedServices = MOCK_SERVICES[MOCK_KEY].filter(
        ({ category_id }) => category_id === post?.category_id
      )
      const relatedPosts = getRelatedCrudItemsByTagTitle(
        MOCK_POSTS[MOCK_KEY],
        post?.title
      ).slice(0, 3)

      return {
        props: {
          post,
          postCategory,
          relatedServices,
          relatedPosts,
        },
      }
    },
  getStaticPaths: (): GetStaticPaths => async () => {
    return {
      paths: MOCK_POSTS[MOCK_KEY].map(({ slug, category }) => ({
        params: { slug, categorySlug: category.slug },
      })),
      fallback: false,
    }
  },
}
