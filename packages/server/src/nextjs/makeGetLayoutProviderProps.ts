import { getCrudItemsByCategory, withLocales } from '@onex/utils'

import { LayoutConfig } from './types'

const makeGetLayoutProviderProps =
  (layoutConfig: LayoutConfig) =>
  ({ context }) => {
    const {
      clientHighlights = [],
      clientLogos = [],
      clientTestimonials = [],
      industrys = [],
      pages = [],
      postCategorys = [],
      routeConfig = {},
      serviceCategorys = [],
      services = [],
      showcases = [],
      site = {},
      technologys = [],
      workspaces = [],
    } = layoutConfig
    return {
      clientHighlights,

      // Modules
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
      // Site
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
