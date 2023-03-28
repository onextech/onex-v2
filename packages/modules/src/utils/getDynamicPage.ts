import { getObjectWithReplacedValues } from '@gravis-os/utils'

export interface GetDynamicPageConfigs {
  appConfig: Record<string, any>
  routeConfig: Record<string, string>
}

const getDynamicPage = (pageItem, configs: GetDynamicPageConfigs) => {
  const { appConfig, routeConfig } = configs
  return getObjectWithReplacedValues(pageItem, {
    appTitle: appConfig.title,
    title: pageItem.title,
    // Replace routes
    ...Object.entries(routeConfig).reduce((acc, [key, value]) => {
      return { ...acc, [`routes.${key}`]: value }
    }, {}),
  })
}

export default getDynamicPage
