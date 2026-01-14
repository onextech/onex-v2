import {
  MOCK_SERVICE_CATEGORYS,
  MOCK_SERVICES,
} from '@onex/mocks'
import {
  getCategoryFromCrudItem,
} from '@onex/utils'
import { GetStaticPaths, GetStaticProps } from 'next'

import { getStaticPathsWithLayout } from '../nextjs'
import { getDynamicPage } from '../utils'
import getStaticPropsWithLayout from '../utils/getStaticPropsWithLayout'
import { fetchPosts, fetchShowcases, fetchSite } from './Site'

const { MOCK_KEY = '' } = process.env

// ==============================
// Helpers to minimize page data size
// ==============================
// Pick only fields needed for post card display
const pickPostCardFields = (post) => ({
  id: post.id,
  title: post.title,
  slug: post.slug,
  subtitle: post.subtitle || null,
  category: post.category ? { title: post.category.title, slug: post.category.slug } : null,
  hero_src: post.hero_src || null,
  hero_alt: post.hero_alt || null,
  published_at: post.published_at || null,
  author: post.author ? { title: post.author.title, avatar_src: post.author.avatar_src || null } : null,
})

// Pick only fields needed for service card display
const pickServiceCardFields = (service) => ({
  id: service.id,
  title: service.title,
  slug: service.slug,
  subtitle: service.subtitle || null,
  category: service.category ? { title: service.category.title, slug: service.category.slug } : null,
  hero_src: service.hero_src || null,
  hero_alt: service.hero_alt || null,
})

// Pick only fields needed for showcase card display
const pickShowcaseCardFields = (showcase) => ({
  id: showcase.id,
  title: showcase.title,
  slug: showcase.slug,
  subtitle: showcase.subtitle || null,
  hero_src: showcase.hero_src || null,
  hero_alt: showcase.hero_alt || null,
  backgroundColor: showcase.backgroundColor || null,
  mode: showcase.mode || null,
  reverse: showcase.reverse || false,
  // Only include section existence flags (not full content) for button visibility
  sections: {
    leftGridSticky: { items: showcase.sections?.leftGridSticky?.items?.length ? [{}] : [] },
    rightGridSticky: { items: showcase.sections?.rightGridSticky?.items?.length ? [{}] : [] },
    gallery: { items: showcase.sections?.gallery?.items?.length ? [{}] : [] },
  },
})

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
    const { locale } = context
    const site = fetchSite({ locale })
    const servicePage = getDynamicPage({ context, page: service, site })
    const serviceCategory = getCategoryFromCrudItem(
      service,
      MOCK_SERVICE_CATEGORYS[MOCK_KEY]
    )
    // Strip related services to card-only fields
    const relatedServices = MOCK_SERVICES[MOCK_KEY]
      .filter(({ category_id }) => category_id === service?.category_id)
      .filter((item) => item.title !== service?.title)
      .slice(0, 3)
      .map(pickServiceCardFields)
    // Strip showcases to card-only fields
    const showcases = fetchShowcases({ locale })
      .slice(0, 3)
      .map(pickShowcaseCardFields)
    // Strip related posts to card-only fields
    const relatedPosts = fetchPosts({ locale })
      .slice(0, 3)
      .map(pickPostCardFields)

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
