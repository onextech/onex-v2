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
  const { site, routeConfig } = useLayout()
  const { headerProps, ...rest } = props
  return (
    <LandingLayoutTemplate
      useLayout={useLayout}
      useUserPreferences={useUserPreferences}
      {...props}
      headerProps={{
        announcement: {
          title: `${site.title} unveils the future of Enterprise Software Development`,
          hrefTitle: 'Read the blog to learn more',
          href: routeConfig.PRESS_RELEASES,
        },
        ...headerProps,
      }}
      {...rest}
    />
  )
}

export default LandingLayout
