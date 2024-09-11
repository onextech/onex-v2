import { makeGetDynamicPage } from '../nextjs'
import { routeConfig } from '@onex/common'

const getDynamicPage = makeGetDynamicPage(routeConfig)

export default getDynamicPage
