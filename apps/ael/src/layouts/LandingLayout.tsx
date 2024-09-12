import React from 'react'

import { useLayout, useUserPreferences } from '@onex/landing'
import {
  LandingLayout as LandingLayoutTemplate,
  LandingLayoutProps as LandingLayoutTemplateProps,
} from '@onex/layouts'

export type LandingLayoutProps = LandingLayoutTemplateProps

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  return (
    <LandingLayoutTemplate
      useLayout={useLayout}
      useUserPreferences={useUserPreferences}
      {...props}
    />
  )
}

export default LandingLayout
