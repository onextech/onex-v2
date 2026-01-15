import React from 'react'

import { useLayout, useUserPreferences } from '@onex/landing'
import {
  LandingLayout as LandingLayoutTemplate,
  LandingLayoutProps as LandingLayoutTemplateProps,
} from '@onex/layouts'

// Pre-computed announcement data to avoid blocking on context hydration
// This allows the LCP element (announcement bar) to render immediately
const DEFAULT_ANNOUNCEMENT = {
  title: 'One X Group unveils the future of Enterprise Software Development.',
  href: '/press-releases/unveiling-future-unique-enterprise-software-development',
  hrefTitle: 'Read the blog to learn more',
}

export type LandingLayoutProps = LandingLayoutTemplateProps

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  const { routeConfig, site } = useLayout()
  const { headerProps, ...rest } = props

  // Use pre-computed announcement for faster LCP, fall back to dynamic if context available
  const announcement = headerProps?.announcement || {
    title: site?.title
      ? `${site.title} unveils the future of Enterprise Software Development.`
      : DEFAULT_ANNOUNCEMENT.title,
    href: routeConfig?.PRESS_RELEASES
      ? `${routeConfig.PRESS_RELEASES}/unveiling-future-unique-enterprise-software-development`
      : DEFAULT_ANNOUNCEMENT.href,
    hrefTitle: DEFAULT_ANNOUNCEMENT.hrefTitle,
  }

  return (
    <LandingLayoutTemplate
      useLayout={useLayout}
      useUserPreferences={useUserPreferences}
      {...props}
      headerProps={{
        announcement,
        ...headerProps,
      }}
      {...rest}
    />
  )
}

export default LandingLayout
