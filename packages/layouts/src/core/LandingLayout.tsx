import React from 'react'
import merge from 'lodash/merge'
import {
  LandingLayout as GvsLandingLayout,
  LandingLayoutProps as GvsLandingLayoutProps,
} from '@gravis-os/landing'
import { useUserPreferences } from '@gravis-os/theme'

export interface LandingLayoutProps
  extends Omit<GvsLandingLayoutProps, 'headerProps'> {
  headerProps?: Partial<GvsLandingLayoutProps['headerProps']>
  navConfig: GvsLandingLayoutProps['headerProps']['navItems']['left']
  logo: React.JSXElementConstructor<unknown>
}

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  const { navConfig, logo: Logo, ...rest } = props
  const { toggleDarkModeIconButtonJsx } = useUserPreferences()

  const defaultLandingLayoutProps = {
    disableGutters: true,
    headerProps: {
      disableBoxShadow: true,
      navItems: {
        left: navConfig,
        right: [
          {
            key: 'toggle-dark-mode',
            children: toggleDarkModeIconButtonJsx,
            showOnMobileBar: true,
            hideInMobileDrawer: true,
          },
        ],
      },
    },
    footerProps: {
      logo: <Logo />,
      companyName: 'Acme Inc',
      navItems: [
        {
          key: 'what-we-do',
          title: 'What We Do',
          items: [
            { title: 'Product Design', href: '#' },
            { title: 'Pricing', href: '#' },
          ],
        },
        {
          key: 'learn-more',
          title: 'Learn more',
          items: [
            { title: 'Work', href: '#' },
            { title: 'About', href: '#' },
          ],
        },
        {
          key: 'support',
          title: 'Support',
          items: [{ title: 'Contact', href: '#' }],
        },
      ],
    },
  }

  const landingLayoutProps = merge({}, defaultLandingLayoutProps, rest)

  return <GvsLandingLayout {...landingLayoutProps} />
}

export default LandingLayout
