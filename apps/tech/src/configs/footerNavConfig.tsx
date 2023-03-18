import { footerNavConfig as commonFooterNavConfig } from '@onex/common'
import routeConfig from './routeConfig'
import { technologies, pages, services } from './navConfig'

const footerNavConfig = [
  {
    key: 'services',
    title: 'Services',
    items: services,
  },
  {
    key: 'technologies',
    title: 'Technologies',
    items: technologies,
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
