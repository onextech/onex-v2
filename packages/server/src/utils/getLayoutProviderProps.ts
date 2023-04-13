import { routeConfig } from '@onex/common'
import { getCrudItemsByCategory, withLocales } from '@gravis-os/utils'
import {
  MOCK_CLIENT_HIGHLIGHTS,
  MOCK_CLIENT_LOGOS,
  MOCK_CLIENT_TESTIMONIALS,
  MOCK_INDUSTRYS,
  MOCK_PAGES,
  MOCK_POST_CATEGORYS,
  MOCK_SERVICE_CATEGORYS,
  MOCK_SERVICES, MOCK_SHOWCASES,
  MOCK_SITE,
  MOCK_TECHNOLOGYS,
  MOCK_WORKSPACES,
} from '@onex/mocks'

const { MOCK_KEY } = process.env

const getLayoutProviderProps = ({ context }) => {
  return {
    // Configs
    routeConfig,

    // Site
    site: MOCK_SITE[MOCK_KEY],

    // Modules
    clientLogos: MOCK_CLIENT_LOGOS[MOCK_KEY],
    clientHighlights: MOCK_CLIENT_HIGHLIGHTS[MOCK_KEY],
    clientTestimonials: MOCK_CLIENT_TESTIMONIALS[MOCK_KEY],
    industrys: MOCK_INDUSTRYS[MOCK_KEY].map((industry) => ({
      ...industry,
      href: `${routeConfig.INDUSTRYS}/${industry.slug}`,
    })),
    pages: MOCK_PAGES[MOCK_KEY],
    postCategorys: MOCK_POST_CATEGORYS[MOCK_KEY].map((postCategory) => ({
      ...postCategory,
      href: `${routeConfig.POSTS}/${postCategory.slug}`,
    })),
    serviceCategorys: MOCK_SERVICE_CATEGORYS[MOCK_KEY],
    services: getCrudItemsByCategory(
      MOCK_SERVICES[MOCK_KEY],
      MOCK_SERVICE_CATEGORYS[MOCK_KEY]
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
    technologys: MOCK_TECHNOLOGYS[MOCK_KEY].map((technology) => ({
      ...technology,
      href: `${routeConfig.TECHNOLOGYS}/${technology.slug}`,
    })),
    showcases: MOCK_SHOWCASES[MOCK_KEY],
    workspaces: MOCK_WORKSPACES,
  }
}

export default getLayoutProviderProps
