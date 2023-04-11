import { MOCK_SERVICE_CATEGORYS, MOCK_SERVICES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import makeGetStaticPaths from '../utils/makeGetStaticPaths'
import makeGetStaticProps from '../utils/makeGetStaticProps'

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
  getStaticProps: (): GetStaticProps =>
    makeGetStaticProps({
      props: {
        services: MOCK_SERVICES[MOCK_KEY],
        serviceCategorys: MOCK_SERVICE_CATEGORYS[MOCK_KEY],
      },
    }),
}

export const ServiceCategoryDetail = {
  getStaticProps: (): GetStaticProps => (context) => {
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
  getStaticPaths: (): GetStaticPaths =>
    makeGetStaticPaths({
      paths: MOCK_SERVICE_CATEGORYS[MOCK_KEY].map(({ slug }) => ({
        params: { categorySlug: slug },
      })),
    }),
}
