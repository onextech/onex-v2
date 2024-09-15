import {
  MOCK_POSTS,
  MOCK_SERVICE_CATEGORYS,
  MOCK_SERVICES,
  MOCK_SHOWCASES, MOCK_TECHNOLOGYS,
} from '@onex/mocks'
import {
  getCategoryFromCrudItem,
  getRelatedCrudItemsByTagTitle,
} from '@onex/utils'
import dayjs from 'dayjs'
import { GetStaticPaths, GetStaticProps } from 'next'

import { getStaticPathsWithLayout } from '../nextjs'
import { getDynamicPage } from '../utils'
import getStaticPropsWithLayout from '../utils/getStaticPropsWithLayout'
import { fetchSite } from './Site'

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
  getStaticPaths: (): GetStaticPaths =>
    getStaticPathsWithLayout({
      paths: MOCK_SERVICES[MOCK_KEY].map(
        ({ slug, blocked_locales, category, exclusive_locales }) => ({
          params: {
            slug,
            blocked_locales,
            categorySlug: category.slug,
            exclusive_locales,
          },
        })
      ),
    }),
  getStaticProps: (): GetStaticProps => async (context) => {
    const service = fetchServiceBySlug(context.params?.slug)
    const site = fetchSite()
    const servicePage = getDynamicPage({ context, page: service, site })
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
    const showcases = MOCK_SHOWCASES[MOCK_KEY].slice(0, 3)

    return getStaticPropsWithLayout({
      props: {
        relatedPosts,
        relatedServices,
        service: servicePage,
        serviceCategory,
        showcases,
      },
    })(context)
  },
}
