import { getObjectWithReplacedValues } from '@gravis-os/utils'
import appConfig from '@app/configs/appConfig'
import routeConfig from '@app/configs/routeConfig'

const getDynamicPage = (pageItem) => {
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
