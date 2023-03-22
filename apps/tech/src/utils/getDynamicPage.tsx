import { getObjectWithReplacedValues } from '@gravis-os/utils'
import appConfig from '@app/configs/appConfig'

const getDynamicPage = (pageItem) => {
  return getObjectWithReplacedValues(pageItem, {
    appTitle: appConfig.title,
    title: pageItem.title,
  })
}

export default getDynamicPage
