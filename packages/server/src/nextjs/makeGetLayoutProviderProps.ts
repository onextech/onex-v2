import { getCrudItemsByCategory, withLocales } from '@onex/utils'

import { LayoutConfig } from './types'
import { fetchClientTestimonials, fetchSite } from '../server'

const makeGetLayoutProviderProps =
  (layoutConfig: LayoutConfig) =>
  ({ context }) => {
    const {
      clientHighlights = [],
      clientLogos = [],
      clientTestimonials: injectedClientTestimonials = [],
      industrys = [],
      pages = [],
      postCategorys = [],
      routeConfig = {},
      serviceCategorys = [],
      services = [],
      showcases = [],
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
    return {
      clientHighlights,
      clientLogos,
      clientTestimonials,
      industrys: industrys
        ?.filter(({ is_hidden_from_header }) => !is_hidden_from_header)
        ?.map((industry) => ({
          ...industry,
          href: `${routeConfig.INDUSTRYS}/${industry.slug}`,
        })),
      pages: pages?.filter(({ is_hidden_from_header }) => !is_hidden_from_header),
      postCategorys: postCategorys?.map((postCategory) => ({
        ...postCategory,
        href: `${routeConfig.POSTS}/${postCategory.slug}`,
      })),
      // Configs
      routeConfig,
      serviceCategorys,
      services: getCrudItemsByCategory(
        services.filter(({ is_hidden_from_header }) => !is_hidden_from_header),
        serviceCategorys
      ).map((service) => ({
        ...service,
        href: `${routeConfig.SERVICES}/${service.slug}`,
        items: withLocales(context)(
          service.items.map((item) => ({
            ...item,
            href: `${routeConfig.SERVICES}/${service.slug}/${item.slug}`,
          }))
        ),
      })),
      showcases,
      site,
      technologys: technologys
        .filter(({ is_hidden_from_header }) => !is_hidden_from_header)
        .map((technology) => ({
          ...technology,
          href: `${routeConfig.TECHNOLOGYS}/${technology.slug}`,
        })),
      workspaces,
    }
  }

export default makeGetLayoutProviderProps
