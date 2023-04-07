import { MOCK_POSTS, MOCK_SERVICE_CATEGORYS, MOCK_SERVICES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  getCategoryFromCrudItem,
  getRelatedCrudItemsByTagTitle,
} from '@gravis-os/utils'
import getDynamicPage, { GetDynamicPageConfigs } from '../utils/getDynamicPage'

const { MOCK_KEY } = process.env

// ==============================
// Methods
// ==============================
export const fetchServiceBySlug = (injectedSlug) => {
  return MOCK_SERVICES[MOCK_KEY].find(({ slug }) => slug === injectedSlug)
}

// ==============================
// Export
// ==============================
export const ServiceDetail = {
  getStaticProps:
    ({ configs }: { configs: GetDynamicPageConfigs }): GetStaticProps =>
    (context) => {
      const service = fetchServiceBySlug(context.params.slug)

      const servicePage = getDynamicPage(service, configs)

      const serviceCategory = getCategoryFromCrudItem(
        service,
        MOCK_SERVICE_CATEGORYS[MOCK_KEY]
      )
      const relatedServices = MOCK_SERVICES[MOCK_KEY].filter(
        ({ category_id }) => category_id === service?.category_id
      )

      const relatedPosts = getRelatedCrudItemsByTagTitle(
        MOCK_POSTS[MOCK_KEY],
        service?.title
      ).slice(0, 3)

      return {
        props: {
          service: servicePage,
          serviceCategory,
          relatedServices,
          relatedPosts,
        },
      }
    },
  getStaticPaths: (): GetStaticPaths => async () => {
    return {
      paths: MOCK_SERVICES[MOCK_KEY].map(({ slug, category }) => ({
        params: { slug, categorySlug: category.slug },
      })),
      fallback: false,
    }
  },
}
