import { MOCK_SERVICE_CATEGORYS, MOCK_SERVICES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { GetDynamicPageConfigs } from '../utils/getDynamicPage'

const { MOCK_KEY } = process.env

// ==============================
// Methods
// ==============================
export const fetchServiceCategoryBySlug = (injectedSlug) => {
  return MOCK_SERVICE_CATEGORYS[MOCK_KEY].find(
    ({ slug }) => slug === injectedSlug
  )
}

// ==============================
// Export
// ==============================
export const ServiceCategoryList = {
  getStaticProps:
    ({ configs }: { configs: GetDynamicPageConfigs }): GetStaticProps =>
    (context) => {
      const services = MOCK_SERVICES[MOCK_KEY]
      const serviceCategorys = MOCK_SERVICE_CATEGORYS[MOCK_KEY]
      return { props: { services, serviceCategorys } }
    },
}

export const ServiceCategoryDetail = {
  getStaticProps:
    ({ configs }: { configs: GetDynamicPageConfigs }): GetStaticProps =>
    (context) => {
      const serviceCategory = fetchServiceCategoryBySlug(
        context.params.categorySlug
      )
      const services = MOCK_SERVICES[MOCK_KEY].filter(
        ({ category_id }) => category_id === serviceCategory?.id
      )
      const otherServiceCategorys = MOCK_SERVICE_CATEGORYS[MOCK_KEY].filter(
        ({ id }) => id !== serviceCategory?.id
      ).slice(0, 3)

      return {
        props: {
          serviceCategory,
          services,
          otherServiceCategorys,
        },
      }
    },
  getStaticPaths: (): GetStaticPaths => async () => {
    return {
      paths: MOCK_SERVICE_CATEGORYS[MOCK_KEY].map(({ slug }) => ({
        params: { categorySlug: slug },
      })),
      fallback: false,
    }
  },
}
