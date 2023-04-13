import { getObjectWithReplacedValues } from '@gravis-os/utils'
import { routeConfig } from '@onex/common'
import { Site } from '@onex/types'

/**
 * Replace values in pageItem with values from site
 * For example replace 'My App Name is {appTitle}' with 'My App Name is Foo'
 * @param pageItem
 * @param site
 */
const getDynamicPage = (pageItem, site: Site) => {
  return getObjectWithReplacedValues(pageItem, {
    // Replace `{title}` with pageItem.title
    title: pageItem.title,
    // Replace `{appTitle}` with site.title
    appTitle: site.title,
    // Replace routes e.g. `{routes.SERVICES}` to `/services`
    ...Object.entries(routeConfig).reduce((acc, [key, value]) => {
      return { ...acc, [`routes.${key}`]: value }
    }, {}),
  })
}

export default getDynamicPage
