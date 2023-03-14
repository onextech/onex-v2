import React, { createContext, useContext } from 'react'
import merge from 'lodash/merge'
import { AppConfig } from '@onex/types'
import { LandingLayoutProps as GvsLandingLayoutProps } from '@gravis-os/landing'

// ==============================
// Types
// ==============================
export interface LayoutContextValue {
  logo: React.JSXElementConstructor<unknown>
  // Layout configs
  appConfig?: AppConfig
  headerNavConfig?: GvsLandingLayoutProps['headerProps']['navItems']['left']
  footerNavConfig?: GvsLandingLayoutProps['footerProps']['navItems']
  socialMediaConfig?: GvsLandingLayoutProps['footerProps']['socialMediaItems']
  legalConfig?: GvsLandingLayoutProps['footerProps']['legalItems']
}

// ==============================
// Initial State
// ==============================
export const layoutContextInitialState = {
  logo: null,
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
