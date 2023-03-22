import React from 'react'
import merge from 'lodash/merge'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import { Button } from '@gravis-os/ui'
import {
  LandingLayout as GvsLandingLayout,
  LandingLayoutProps as GvsLandingLayoutProps,
} from '@gravis-os/landing'
import { useUserPreferences } from '@onex/theme'
import { ContactCallout } from '@onex/components'
import { useLayout } from '@onex/providers'
import { GetStartedPage } from '@onex/pages'

export interface LandingLayoutProps
  extends Omit<GvsLandingLayoutProps, 'headerProps'> {
  headerProps?: Partial<GvsLandingLayoutProps['headerProps']>
}

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  const { seo, ...rest } = props

  // Hooks
  const { toggleDarkModeIconButtonJsx } = useUserPreferences()
  const {
    logo: Logo,
    appConfig,
    legalConfig,
    socialMediaConfig,
    headerNavConfig,
    footerNavConfig,
    routeConfig,
  } = useLayout()

  const defaultLandingLayoutProps = {
    disableGutters: true,
    seo: {
      titleTemplate: `%s | ${appConfig.title}`,
      ...seo,
    },
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
          {
            key: 'get-started',
            children: (
              <Button
                {...{
                  title: 'Get Started',
                  variant: 'text' as const,
                  color: 'primary' as const,
                  size: 'small',
                  endIcon: <KeyboardArrowRightOutlinedIcon />,
                  sx: { ml: 1, color: 'text.primary' },
                  dialogProps: {
                    fullScreen: true,
                    disableTitle: true,
                    transitionVariant: 'fade' as const,
                    children: <GetStartedPage fullScreen />,
                  },
                }}
              />
            ),
            showOnMobileBar: true,
            hideInMobileDrawer: true,
          },
        ],
      },
    },
    footerProps: {
      callout: <ContactCallout />,
      logo: <Logo href={routeConfig.HOME} />,
      companyName: appConfig.companyTitle,
      accordionProps: {
        titleProps: { variant: 'h7' },
        itemTitleProps: {
          variant: 'body2',
          color: 'text.secondary',
          hoverColor: 'inherit',
        },
      },
      navItems: footerNavConfig,
      legalItems: legalConfig,
      socialMediaItems: socialMediaConfig,
    },
  }

  const landingLayoutProps = merge({}, defaultLandingLayoutProps, rest)

  return <GvsLandingLayout {...landingLayoutProps} />
}

export default LandingLayout
