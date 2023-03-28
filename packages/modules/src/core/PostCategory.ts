import { MOCK_POST_CATEGORYS, MOCK_POSTS } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { GetDynamicPageConfigs } from '../utils/getDynamicPage'

const { MOCK_KEY } = process.env

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
  getStaticProps:
    ({ configs }: { configs: GetDynamicPageConfigs }): GetStaticProps =>
    (context) => {
      const posts = MOCK_POSTS[MOCK_KEY]
      const postCategorys = MOCK_POST_CATEGORYS[MOCK_KEY]
      return { props: { posts, postCategorys } }
    },
}

export const PostCategoryDetail = {
  getStaticProps:
    ({ configs }: { configs: GetDynamicPageConfigs }): GetStaticProps =>
    (context) => {
      const postCategory = fetchPostCategoryBySlug(context.params.categorySlug)
      const posts = MOCK_POSTS[MOCK_KEY].filter(
        ({ category_id }) => category_id === postCategory?.id
      )

      return {
        props: {
          posts,
          postCategory,
        },
      }
    },
  getStaticPaths: (): GetStaticPaths => async () => {
    return {
      paths: MOCK_POST_CATEGORYS[MOCK_KEY].map(({ slug }) => ({
        params: { categorySlug: slug },
      })),
      fallback: false,
    }
  },
}
