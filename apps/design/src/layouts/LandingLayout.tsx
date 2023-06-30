import React from 'react'
import { useLayout, useUserPreferences } from '@gravis-os/landing'
import {
  LandingLayout as LandingLayoutTemplate,
  LandingLayoutProps as LandingLayoutTemplateProps,
} from '@onex/layouts'

export type LandingLayoutProps = LandingLayoutTemplateProps

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  // Allow overriding of hooks to allow for context between
  // apps and packages to be sync-ed up in local/yalc mode.
  return (
    <LandingLayoutTemplate
      disableDarkModeIcon
      useLayout={useLayout}
      useUserPreferences={useUserPreferences}
      {...props}
    />
  )
}

export default LandingLayout
