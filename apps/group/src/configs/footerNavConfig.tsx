import { footerNavConfig as commonFooterNavConfig } from '@onex/common'
import routeConfig from './routeConfig'
import { industries, pages, services } from './navConfig'

const footerNavConfig = [
  {
    key: 'services',
    title: 'Services',
    items: services,
  },
  {
    key: 'industries',
    title: 'Industries',
    items: industries,
  },
  ...commonFooterNavConfig,
  {
    key: 'company',
    title: 'Company',
    href: routeConfig.ABOUT,
    items: pages,
  },
]

export default footerNavConfig
