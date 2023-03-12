import appConfig from './appConfig'

const { absoluteUrl } = appConfig

const legalConfig = {
  terms: `${absoluteUrl}/terms`,
  privacy: `${absoluteUrl}/privacy`,
  cookies: `${absoluteUrl}/cookies`,
}

export default legalConfig
