import {
  getObjectWithGroupedKeyFromPrefix,
  getObjectWithReplacedValues,
} from '@gravis-os/utils'
import flowRight from 'lodash/flowRight'
import { routeConfig } from '@onex/common'
import { Page } from '@onex/types'
import { fetchSite } from '../server'

// ==============================
// Plugins
// ==============================
const withSiteVariablesReplacement = () => (page: Page) => {
  const site = fetchSite()

  return getObjectWithReplacedValues(page, {
    // Replace `{title}` with page.title
    title: page.title,
    // Replace `{appTitle}` with site.title
    appTitle: site.title,
    // Replace routes e.g. `{routes.SERVICES}` to `/services`
    ...Object.entries(routeConfig).reduce((acc, [key, value]) => {
      return { ...acc, [`routes.${key}`]: value }
    }, {}),
  })
}

const withSeoTitleFromPageTitle = () => (page: Page) => {
  if (page.seo?.title) return page
  return {
    ...page,
    seo: {
      title: page.title,
    },
  }
}

const withSeoGrouping = () => (page: Page) => {
  return getObjectWithGroupedKeyFromPrefix(page, 'seo')
}

// ==============================
// Main
// ==============================
/**
 * Replace values in pageItem with values from site
 * For example replace 'My App Name is {appTitle}' with 'My App Name is Foo'
 * @param pageItem
 * @param site
 */
const getDynamicPage = flowRight(
  withSiteVariablesReplacement(),
  withSeoTitleFromPageTitle(),
  withSeoGrouping()
)

export default getDynamicPage
