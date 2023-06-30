import { MOCK_SERVICE_CATEGORYS, MOCK_SERVICES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getStaticPathsWithLayout } from '@gravis-os/landing/server'
import getStaticPropsWithLayout from '../utils/getStaticPropsWithLayout'

const { MOCK_KEY = '' } = process.env

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
    getStaticPropsWithLayout({
      props: {
        services: MOCK_SERVICES[MOCK_KEY],
        serviceCategorys: MOCK_SERVICE_CATEGORYS[MOCK_KEY],
      },
    }),
}

export const ServiceCategoryDetail = {
  getStaticProps: (): GetStaticProps => (context) => {
    const serviceCategory = fetchServiceCategoryBySlug(
      context.params?.categorySlug
    )
    const services = MOCK_SERVICES[MOCK_KEY].filter(
      ({ category_id }) => category_id === serviceCategory?.id
    )
    const otherServiceCategorys = MOCK_SERVICE_CATEGORYS[MOCK_KEY].filter(
      ({ id }) => id !== serviceCategory?.id
    ).slice(0, 3)

    return getStaticPropsWithLayout({
      props: {
        serviceCategory,
        services,
        otherServiceCategorys,
      },
    })(context)
  },
  getStaticPaths: (): GetStaticPaths =>
    getStaticPathsWithLayout({
      paths: MOCK_SERVICE_CATEGORYS[MOCK_KEY].map(
        ({ slug, exclusive_locales, blocked_locales }) => ({
          params: { categorySlug: slug, exclusive_locales, blocked_locales },
        })
      ),
    }),
}
