import { MOCK_POST_CATEGORYS, MOCK_POSTS } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { GetDynamicPageConfigs } from '../utils/getDynamicPage'
import makeGetStaticPaths from '../utils/makeGetStaticPaths'
import makeGetStaticProps from '../utils/makeGetStaticProps'

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
  getStaticProps: ({
    configs,
  }: {
    configs: GetDynamicPageConfigs
  }): GetStaticProps =>
    makeGetStaticProps({
      props: {
        posts: MOCK_POSTS[MOCK_KEY],
        postCategorys: MOCK_POST_CATEGORYS[MOCK_KEY],
      },
    }),
}

export const PostCategoryDetail = {
  getStaticProps:
    ({ configs }: { configs: GetDynamicPageConfigs }): GetStaticProps =>
    (context) => {
      const postCategory = fetchPostCategoryBySlug(context.params.categorySlug)
      const posts = MOCK_POSTS[MOCK_KEY].filter(
        ({ category_id }) => category_id === postCategory?.id
      )
      return makeGetStaticProps({
        props: {
          posts,
          postCategory,
        },
      })(context)
    },
  getStaticPaths: (): GetStaticPaths =>
    makeGetStaticPaths({
      paths: MOCK_POST_CATEGORYS[MOCK_KEY].map(
        ({ slug, exclusive_locales, blocked_locales }) => ({
          params: { categorySlug: slug, exclusive_locales, blocked_locales },
        })
      ),
    }),
}
