import React from 'react'
import {
  LandingLayout as OneXLandingLayout,
  LandingLayoutProps as OneXLandingLayoutProps,
} from '@onex/layouts'
import Logo from '@app/components/Logo'
import headerNavConfig from '@app/configs/headerNavConfig'
import footerNavConfig from '@app/configs/footerNavConfig'
import socialMediaConfig from '@app/configs/socialMediaConfig'

export interface LandingLayoutProps
  extends Omit<
    OneXLandingLayoutProps,
    'headerProps' | 'headerNavConfig' | 'footerNavConfig' | 'logo'
  > {
  headerProps?: Partial<OneXLandingLayoutProps['headerProps']>
}

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  return (
    <OneXLandingLayout
      logo={Logo}
      headerNavConfig={headerNavConfig}
      footerNavConfig={footerNavConfig}
      socialMediaConfig={socialMediaConfig}
      {...props}
    />
  )
}

export default LandingLayout
