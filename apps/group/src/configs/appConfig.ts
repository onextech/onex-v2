import { appConfig as commonAppConfig } from '@onex/common'

const appConfig = {
  ...commonAppConfig,
  title: 'One X Group',
  absoluteUrl: process.env.NEXT_PUBLIC_ABSOLUTE_URL,
}

export default appConfig
