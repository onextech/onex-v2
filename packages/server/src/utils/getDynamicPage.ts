import { getObjectWithReplacedValues } from '@gravis-os/utils'

export interface GetDynamicPageConfigs {
  appConfig: Record<string, any>
  routeConfig: Record<string, string>
}

/**
 * Replace values in pageItem with values from configs
 * For example replace 'My App Name is {appTitle}' with 'My App Name is Foo'
 * @param pageItem
 * @param configs
 */
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
