import React from 'react'
import {
  LandingLayout as OneXLandingLayout,
  LandingLayoutProps as OneXLandingLayoutProps,
} from '@onex/layouts'
import Logo from '@app/components/Logo'
import navConfig from '@app/configs/navConfig'

export interface LandingLayoutProps
  extends Omit<OneXLandingLayoutProps, 'headerProps' | 'navConfig' | 'logo'> {
  headerProps?: Partial<OneXLandingLayoutProps['headerProps']>
}

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  return <OneXLandingLayout navConfig={navConfig} logo={Logo} {...props} />
}

export default LandingLayout
