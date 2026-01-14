import { getCrudItemsByCategory, withLocales } from '@onex/utils'

import { LayoutConfig } from './types'
import { fetchClientTestimonials, fetchClientLogos, fetchSite, fetchShowcases } from '../server'

// Pick only navigation-required fields to minimize hydration data
const pickNavFields = <T extends { title?: string; slug?: string }>(
  item: T,
  href: string
): { title: string | undefined; slug: string | undefined; href: string } => ({
  title: item.title,
  slug: item.slug,
  href,
})

// Pick only fields needed for page navigation
const pickPageNavFields = (page) => ({
  id: page.id || null,
  title: page.title,
  slug: page.slug,
  href: page.href || null,
})

// Pick minimal showcase fields for layout (slider preview)
const pickShowcaseLayoutFields = (showcase, routeConfig) => ({
  id: showcase.id,
  title: showcase.title,
  slug: showcase.slug,
  subtitle: showcase.subtitle || null,
  hero_src: showcase.hero_src || null,
  hero_alt: showcase.hero_alt || null,
  href: `${routeConfig?.SHOWCASES}/${showcase.slug}`,
})

// Pick fields needed for technology block (includes avatar for images)
const pickTechnologyFields = (technology, routeConfig) => ({
  title: technology.title,
  slug: technology.slug,
  subtitle: technology.subtitle || null,
  avatar_src: technology.avatar_src || null,
  avatar_alt: technology.avatar_alt || null,
  avatar_height: technology.avatar_height || 56,
  avatar_width: technology.avatar_width || 56,
  href: `${routeConfig?.TECHNOLOGYS}/${technology.slug}`,
})

const makeGetLayoutProviderProps =
  (layoutConfig: LayoutConfig) =>
  ({ context }) => {
    const {
      clientHighlights = [],
      clientLogos: injectedClientLogos = [],
      clientTestimonials: injectedClientTestimonials = [],
      industrys = [],
      pages = [],
      postCategorys = [],
      routeConfig = {},
      serviceCategorys = [],
      services = [],
      showcases: injectedShowcases = [],
      site: injectedSite = {},
      technologys = [],
      workspaces = [],
    } = layoutConfig

    const { locale, defaultLocale } = context
    const site = {
      ...injectedSite,
      ...(locale !== defaultLocale && fetchSite({ locale }) ),
    }
    const clientTestimonials = locale !== defaultLocale ? fetchClientTestimonials({ locale }) : injectedClientTestimonials
    const clientLogos = locale !== defaultLocale ? fetchClientLogos({ locale }) : injectedClientLogos
    const showcases = locale !== defaultLocale ? fetchShowcases({ locale }) : injectedShowcases

    // Limit arrays to reduce page data size (navigation only needs limited items)
    const MAX_TESTIMONIALS = 10
    const MAX_SHOWCASES = 12
    const MAX_CLIENT_LOGOS = 15
    const MAX_INDUSTRIES = 10
    const MAX_TECHNOLOGIES = 12
    const MAX_SERVICES_PER_CATEGORY = 10

    return {
      clientHighlights: clientHighlights.slice(0, 6),
      clientLogos: clientLogos.slice(0, MAX_CLIENT_LOGOS),
      clientTestimonials: clientTestimonials.slice(0, MAX_TESTIMONIALS),
      // Strip industries to navigation-only fields
      industrys: industrys
        ?.filter(({ is_hidden_from_header }) => !is_hidden_from_header)
        ?.slice(0, MAX_INDUSTRIES)
        ?.map((industry) => pickNavFields(industry, `${routeConfig.INDUSTRYS}/${industry.slug}`)),
      // Strip pages to navigation-only fields
      pages: pages
        ?.filter(({ is_hidden_from_header }) => !is_hidden_from_header)
        ?.map(pickPageNavFields),
      postCategorys: postCategorys?.map((postCategory) => ({
        title: postCategory.title,
        slug: postCategory.slug,
        href: `${routeConfig.POSTS}/${postCategory.slug}`,
      })),
      // Configs
      routeConfig,
      serviceCategorys: serviceCategorys?.map((cat) => ({
        id: cat.id,
        title: cat.title,
        slug: cat.slug,
      })),
      // Strip services to navigation-only fields
      services: getCrudItemsByCategory(
        services.filter(({ is_hidden_from_header }) => !is_hidden_from_header),
        serviceCategorys
      ).map((serviceCategory) => ({
        title: serviceCategory.title,
        slug: serviceCategory.slug,
        href: `${routeConfig.SERVICES}/${serviceCategory.slug}`,
        items: withLocales(context)(
          serviceCategory.items.slice(0, MAX_SERVICES_PER_CATEGORY).map((item) => ({
            id: item.id,
            title: item.title,
            slug: item.slug,
            href: `${routeConfig.SERVICES}/${serviceCategory.slug}/${item.slug}`,
          }))
        ),
      })),
      // Strip showcases to minimal layout fields
      showcases: showcases
        .slice(0, MAX_SHOWCASES)
        .map((showcase) => pickShowcaseLayoutFields(showcase, routeConfig)),
      site,
      // Strip technologies to fields needed for block rendering (includes avatar)
      technologys: technologys
        .filter(({ is_hidden_from_header }) => !is_hidden_from_header)
        .slice(0, MAX_TECHNOLOGIES)
        .map((technology) => pickTechnologyFields(technology, routeConfig)),
      workspaces,
    }
  }

export default makeGetLayoutProviderProps
