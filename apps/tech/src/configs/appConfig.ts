import { commonConfig } from '@onex/common'

const appConfig = {
  ...commonConfig,
  title: 'One X Tech',
  absoluteUrl: process.env.NEXT_PUBLIC_ABSOLUTE_URL,
}

export default appConfig
