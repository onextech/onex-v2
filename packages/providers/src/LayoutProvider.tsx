import React, { createContext, useContext } from 'react'
import merge from 'lodash/merge'
import {
  AppConfig,
  ClientHighlight,
  ClientLogo,
  Industry,
  Page,
  PostCategory,
  Service,
  ServiceCategory,
  Technology,
  ClientTestimonial,
} from '@onex/types'
import { LandingLayoutProps as GvsLandingLayoutProps } from '@gravis-os/landing'

// ==============================
// Types
// ==============================
export interface LayoutContextValue {
  // TODO@Joel: Fix this type, we will no longer use an import
  logo?: React.JSXElementConstructor<{ href?: string }>

  // Configs
  appConfig?: AppConfig
  routeConfig?: Record<string, string>
  socialMediaConfig?: GvsLandingLayoutProps['footerProps']['socialMediaItems']
  legalConfig?: GvsLandingLayoutProps['footerProps']['legalItems']
  localeConfig?: {
    locales?: Array<{ key: string; isoAlpha2: string; title: string }>
  }
  systemConfig?: { isOpenOnHover?: boolean }

  // Modules
  services?: Service[]
  industrys?: Industry[]
  postCategorys?: PostCategory[]
  pages?: Page[]
  technologys?: Technology[]
  serviceCategorys?: ServiceCategory[]
  clientTestimonials?: ClientTestimonial[]
  clientLogos?: ClientLogo[]
  clientHighlights?: ClientHighlight[]
}

// ==============================
// Initial State
// ==============================
export const layoutContextInitialState = {
  logo: null,
  services: [],
  industrys: [],
  postCategorys: [],
  pages: [],
  technologys: [],
  serviceCategorys: [],
  clientTestimonials: [],
  clientLogos: [],
  clientHighlights: [],
}

// ==============================
// Context
// ==============================
export const LayoutContext = createContext<LayoutContextValue>(
  layoutContextInitialState
)

// ==============================
// Hook
// ==============================
export const useLayout = () => {
  const context = useContext(LayoutContext)

  if (!context)
    throw new Error('useLayout must be used within a LayoutProvider')

  return context
}

// ==============================
// Provider
// ==============================
export interface LayoutProviderProps {
  children?: React.ReactNode
  value?: LayoutContextValue
}

const LayoutProvider: React.FC<LayoutProviderProps> = (props) => {
  const { children, value: injectedValue } = props

  const value = merge({}, layoutContextInitialState, injectedValue)

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  )
}

export default LayoutProvider
