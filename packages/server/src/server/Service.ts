import { MOCK_POSTS, MOCK_SERVICE_CATEGORYS, MOCK_SERVICES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  getCategoryFromCrudItem,
  getRelatedCrudItemsByTagTitle,
} from '@onex/utils'
import dayjs from 'dayjs'
import { getStaticPathsWithLayout } from '../nextjs'
import getStaticPropsWithLayout from '../utils/getStaticPropsWithLayout'
import { fetchSite } from './Site'
import { getDynamicPage } from '../utils'

const { MOCK_KEY = '' } = process.env

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
  getStaticProps: (): GetStaticProps => async (context) => {
    const service = fetchServiceBySlug(context.params?.slug)
    const site = fetchSite()
    const servicePage = getDynamicPage({ page: service, context, site })
    const serviceCategory = getCategoryFromCrudItem(
      service,
      MOCK_SERVICE_CATEGORYS[MOCK_KEY]
    )
    const relatedServices = MOCK_SERVICES[MOCK_KEY].filter(
      ({ category_id }) => category_id === service?.category_id
    )
      .filter((item) => item.title !== service?.title)
      .slice(0, 3)
    const relatedPosts = getRelatedCrudItemsByTagTitle(
      MOCK_POSTS[MOCK_KEY].filter(({ is_active }) => is_active).filter(
        ({ published_at }) =>
          published_at && dayjs(published_at).isBefore(dayjs())
      ),
      service?.title
    ).slice(0, 3)

    return getStaticPropsWithLayout({
      props: {
        service: servicePage,
        serviceCategory,
        relatedServices,
        relatedPosts,
      },
    })(context)
  },
  getStaticPaths: (): GetStaticPaths =>
    getStaticPathsWithLayout({
      paths: MOCK_SERVICES[MOCK_KEY].map(
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
