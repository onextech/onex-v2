import React from 'react'
import merge from 'lodash/merge'
import {
  LandingLayout as GvsLandingLayout,
  LandingLayoutProps as GvsLandingLayoutProps,
} from '@gravis-os/landing'
import { useUserPreferences } from '@onex/theme'
import { commonConfig } from '@onex/common'

export interface LandingLayoutProps
  extends Omit<GvsLandingLayoutProps, 'headerProps'> {
  headerProps?: Partial<GvsLandingLayoutProps['headerProps']>
  headerNavConfig: GvsLandingLayoutProps['headerProps']['navItems']['left']
  footerNavConfig: GvsLandingLayoutProps['footerProps']['navItems']
  socialMediaConfig?: GvsLandingLayoutProps['footerProps']['socialMediaItems']
  logo: React.JSXElementConstructor<unknown>
}

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  const {
    socialMediaConfig,
    headerNavConfig,
    footerNavConfig,
    logo: Logo,
    ...rest
  } = props
  const { toggleDarkModeIconButtonJsx } = useUserPreferences()

  const defaultLandingLayoutProps = {
    disableGutters: true,
    headerProps: {
      accordionProps: { titleProps: { variant: 'h5' } },
      drawerWidth: '100vw',
      disableBoxShadow: true,
      navItems: {
        left: headerNavConfig,
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
      companyName: commonConfig.companyTitle,
      accordionProps: {
        titleProps: { variant: 'h7' },
        itemTitleProps: { variant: 'body2' },
      },
      navItems: footerNavConfig,
      legalItems: [
        {
          key: 'terms',
          title: 'Terms',
          href: `${commonConfig.absoluteUrl}/terms`,
        },
        {
          key: 'privacy',
          title: 'Privacy',
          href: `${commonConfig.absoluteUrl}/privacy`,
        },
        {
          key: 'cookies',
          title: 'Cookies',
          href: `${commonConfig.absoluteUrl}/cookies`,
        },
      ],
      socialMediaItems: socialMediaConfig,
    },
  }

  const landingLayoutProps = merge({}, defaultLandingLayoutProps, rest)

  return <GvsLandingLayout {...landingLayoutProps} />
}

export default LandingLayout
