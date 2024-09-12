import { routeConfig } from '@onex/common'
import {
  MOCK_CLIENT_HIGHLIGHTS,
  MOCK_CLIENT_LOGOS,
  MOCK_CLIENT_TESTIMONIALS,
  MOCK_INDUSTRYS,
  MOCK_PAGES,
  MOCK_POST_CATEGORYS,
  MOCK_SERVICE_CATEGORYS,
  MOCK_SERVICES,
  MOCK_SHOWCASES,
  MOCK_SITE,
  MOCK_TECHNOLOGYS,
  MOCK_WORKSPACES,
} from '@onex/mocks'

import { LayoutConfig } from '../nextjs'

const { MOCK_KEY = '' } = process.env

const layoutConfig: LayoutConfig = {
  clientHighlights: MOCK_CLIENT_HIGHLIGHTS[MOCK_KEY],
  clientLogos: MOCK_CLIENT_LOGOS[MOCK_KEY],
  clientTestimonials: MOCK_CLIENT_TESTIMONIALS[MOCK_KEY],
  industrys: MOCK_INDUSTRYS[MOCK_KEY],
  pages: MOCK_PAGES[MOCK_KEY],
  postCategorys: MOCK_POST_CATEGORYS[MOCK_KEY],
  routeConfig,
  serviceCategorys: MOCK_SERVICE_CATEGORYS[MOCK_KEY],
  services: MOCK_SERVICES[MOCK_KEY],
  showcases: MOCK_SHOWCASES[MOCK_KEY],
  site: MOCK_SITE[MOCK_KEY],
  technologys: MOCK_TECHNOLOGYS[MOCK_KEY],
  workspaces: MOCK_WORKSPACES[MOCK_KEY],
}

export default layoutConfig
