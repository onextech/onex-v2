import React from 'react'
import { LayoutProvider as CommonLayoutProvider } from '@onex/providers'
import Logo from '@app/components/Logo'
import appConfig from '@app/configs/appConfig'
import routeConfig from '@app/configs/routeConfig'
import headerNavConfig from '@app/configs/headerNavConfig'
import footerNavConfig from '@app/configs/footerNavConfig'
import socialMediaConfig from '@app/configs/socialMediaConfig'
import legalConfig from '@app/configs/legalConfig'
import {
  MOCK_TECH_SERVICE_CATEGORYS,
  MOCK_TECH_TESTIMONIALS,
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
        testimonials: MOCK_TECH_TESTIMONIALS,
        serviceCategorys: MOCK_TECH_SERVICE_CATEGORYS,
      }}
    >
      {children}
    </CommonLayoutProvider>
  )
}

export default LayoutProvider
