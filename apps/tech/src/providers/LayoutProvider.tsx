import React from 'react'
import { LayoutProvider as CommonLayoutProvider } from '@onex/providers'
import Logo from '@app/components/Logo'
import appConfig from '@app/configs/appConfig'
import routeConfig from '@app/configs/routeConfig'
import headerNavConfig from '@app/configs/headerNavConfig'
import footerNavConfig from '@app/configs/footerNavConfig'
import socialMediaConfig from '@app/configs/socialMediaConfig'
import legalConfig from '@app/configs/legalConfig'
import localeConfig from '@app/configs/localeConfig'
import {
  MOCK_TECH_SERVICE_CATEGORYS,
  MOCK_TECH_TESTIMONIALS,
  MOCK_TECH_CLIENT_LOGOS,
  MOCK_TECH_CLIENT_HIGHLIGHTS,
} from '@onex/mocks'

export interface LayoutProviderProps {
  children?: React.ReactNode
}

const LayoutProvider: React.FC<LayoutProviderProps> = (props) => {
  const { children } = props
  return (
    <CommonLayoutProvider
      value={{
        logo: Logo,
        appConfig,
        routeConfig,
        headerNavConfig,
        footerNavConfig,
        socialMediaConfig,
        legalConfig,
        localeConfig,
        testimonials: MOCK_TECH_TESTIMONIALS,
        serviceCategorys: MOCK_TECH_SERVICE_CATEGORYS,
        clientLogos: MOCK_TECH_CLIENT_LOGOS,
        clientHighlights: MOCK_TECH_CLIENT_HIGHLIGHTS,
      }}
    >
      {children}
    </CommonLayoutProvider>
  )
}

export default LayoutProvider
