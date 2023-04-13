import { MOCK_POSTS, MOCK_SERVICE_CATEGORYS, MOCK_SERVICES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  getCategoryFromCrudItem,
  getRelatedCrudItemsByTagTitle,
} from '@gravis-os/utils'
import getDynamicPage from '../utils/getDynamicPage'
import makeGetStaticPaths from '../utils/makeGetStaticPaths'
import makeGetStaticProps from '../utils/makeGetStaticProps'
import { fetchSite } from './Site'

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
  getStaticProps: (): GetStaticProps => async (context) => {
    const service = fetchServiceBySlug(context.params.slug)
    const site = fetchSite()
    const servicePage = getDynamicPage(service, site)
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

    return makeGetStaticProps({
      props: {
        service: servicePage,
        serviceCategory,
        relatedServices,
        relatedPosts,
      },
    })(context)
  },
  getStaticPaths: (): GetStaticPaths =>
    makeGetStaticPaths({
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
