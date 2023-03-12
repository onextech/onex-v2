import { appConfig as commonAppConfig } from '@onex/common'

const appConfig = {
  ...commonAppConfig,
  title: 'One X Tech',
  absoluteUrl: process.env.NEXT_PUBLIC_ABSOLUTE_URL,
}

export default appConfig
