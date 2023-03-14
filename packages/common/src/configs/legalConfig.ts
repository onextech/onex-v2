import appConfig from './appConfig'
import routeConfig from './routeConfig'

const { companyAbsoluteUrl } = appConfig

const legalConfig = {
  terms: `${companyAbsoluteUrl}${routeConfig.TERMS}`,
  privacy: `${companyAbsoluteUrl}${routeConfig.PRIVACY}`,
  cookies: `${companyAbsoluteUrl}${routeConfig.COOKIES}`,
}

export default legalConfig
