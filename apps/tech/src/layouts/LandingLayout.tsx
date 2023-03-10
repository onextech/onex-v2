import React from 'react'
import {
  LandingLayout as OneXLandingLayout,
  LandingLayoutProps as OneXLandingLayoutProps,
} from '@onex/layouts'
import Logo from '@app/components/Logo'
import headerNavConfig from '@app/configs/headerNavConfig'
import footerNavConfig from '@app/configs/footerNavConfig'
import socialMediaConfig from '@app/configs/socialMediaConfig'
import legalConfig from '@app/configs/legalConfig'
import appConfig from '@app/configs/appConfig'

export interface LandingLayoutProps
  extends Omit<
    OneXLandingLayoutProps,
    'headerProps' | 'headerNavConfig' | 'footerNavConfig' | 'appConfig' | 'logo'
  > {
  headerProps?: Partial<OneXLandingLayoutProps['headerProps']>
}

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  return (
    <OneXLandingLayout
      logo={Logo}
      appConfig={appConfig}
      headerNavConfig={headerNavConfig}
      footerNavConfig={footerNavConfig}
      socialMediaConfig={socialMediaConfig}
      legalConfig={legalConfig}
      {...props}
    />
  )
}

export default LandingLayout
