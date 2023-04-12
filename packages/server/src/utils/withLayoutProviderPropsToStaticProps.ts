import { pages } from '@onex/common'
import { getCrudItemsByCategory, withLocales } from '@gravis-os/utils'
import {
  MOCK_CLIENT_HIGHLIGHTS,
  MOCK_CLIENT_LOGOS,
  MOCK_CLIENT_TESTIMONIALS,
  MOCK_INDUSTRYS,
  MOCK_POST_CATEGORYS,
  MOCK_SERVICE_CATEGORYS,
  MOCK_SERVICES,
  MOCK_TECHNOLOGYS,
} from '@onex/mocks'

// TODO@Joel: Move these group imports to a generic import
import appConfig from '@onex/group/src/configs/appConfig'
import routeConfig from '@onex/group/src/configs/routeConfig'
import socialMediaConfig from '@onex/group/src/configs/socialMediaConfig'
import legalConfig from '@onex/group/src/configs/legalConfig'
import localeConfig from '@onex/group/src/configs/localeConfig'
import systemConfig from '@onex/group/src/configs/systemConfig'

const { MOCK_KEY } = process.env

const withLayoutProviderPropsToStaticProps =
  (context) => (staticPropsResult) => {
    const layoutProviderProps = {
      // TODO@Joel: Fix logo to be fetched instead of imported
      // logo: Logo,

      // Configs
      appConfig,
      routeConfig,
      socialMediaConfig,
      legalConfig,
      localeConfig,
      systemConfig,

      // Modules
      clientLogos: MOCK_CLIENT_LOGOS[MOCK_KEY],
      clientHighlights: MOCK_CLIENT_HIGHLIGHTS[MOCK_KEY],
      clientTestimonials: MOCK_CLIENT_TESTIMONIALS[MOCK_KEY],
      industrys: MOCK_INDUSTRYS[MOCK_KEY].map((industry) => ({
        ...industry,
        href: `${routeConfig.INDUSTRYS}/${industry.slug}`,
      })),
      pages,
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
    }

    return {
      ...staticPropsResult,
      props: {
        ...staticPropsResult?.props,
        pageProviderProps: {
          layoutProviderProps,
        },
      },
    }
  }

export default withLayoutProviderPropsToStaticProps
