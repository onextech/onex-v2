import React from 'react'
import {
  LandingLayout as OneXLandingLayout,
  LandingLayoutProps as OneXLandingLayoutProps,
} from '@onex/layouts'

export interface LandingLayoutProps
  extends Omit<
    OneXLandingLayoutProps,
    'headerProps' | 'headerNavConfig' | 'footerNavConfig' | 'appConfig' | 'logo'
  > {
  headerProps?: Partial<OneXLandingLayoutProps['headerProps']>
}

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  return <OneXLandingLayout {...props} />
}

export default LandingLayout
