import React from 'react'
import merge from 'lodash/merge'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import { Button, LocalePicker } from '@gravis-os/ui'
import {
  Block,
  Blocks,
  LandingLayout as GvsLandingLayout,
  LandingLayoutProps as GvsLandingLayoutProps,
} from '@gravis-os/landing'
import { useUserPreferences } from '@onex/theme'
import { ContactCallout } from '@onex/components'
import { useLayout } from '@onex/providers'
import { GetStartedPage } from '@onex/pages'
import Logo from '@onex/group/src/components/Logo'
import {
  headerNavConfig as commonHeaderNavConfig,
  renderHeaderMenuBlockItem,
  renderHeaderMenuListBlockItem,
  renderHeaderMenuMobileBlockItem,
  RenderHeaderMenuMobileBlockItemProps,
} from '@onex/blocks'
import { brands } from '@onex/common'

// Style Constants
const commonGridProps = { spacing: 0 }
const commonLeftGridItemProps = { md: 4, lg: 3 }
const commonRightGridItemProps = { md: 8, lg: 9 }

export interface LandingLayoutProps
  extends Omit<GvsLandingLayoutProps, 'headerProps'> {
  headerProps?: Partial<GvsLandingLayoutProps['headerProps']>
  darkHeader?: boolean
}

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  const { seo, darkHeader, ...rest } = props

  // Hooks
  const { toggleDarkModeIconButtonJsx } = useUserPreferences()
  const {
    // Configs
    appConfig,
    legalConfig,
    socialMediaConfig,
    routeConfig,
    localeConfig,
    systemConfig,

    // Modules
    services,
    industrys,
    postCategorys,
    technologys,
    pages,
  } = useLayout()
  const { isOpenOnHover } = systemConfig

  const headerNavConfig = [
    {
      key: 'logo',
      // TODO@Joel: This logo needs to be dynamically imported
      title: <Logo />,
      href: '/',
      offsetLeft: true,
      showOnMobileBar: true,
      titleProps: { sx: { mb: { xs: 1, md: 0 } } },
    },
    {
      key: 'services',
      title: 'Services',
      fullWidth: true,
      isOpenOnHover,
      items: services.map((service) => ({
        key: service.title,
        title: (
          <Block
            {...renderHeaderMenuMobileBlockItem(
              service as RenderHeaderMenuMobileBlockItemProps
            )}
          />
        ),
      })),
      renderItems: () => {
        return (
          <Blocks
            items={[
              {
                key: 'services-grid',
                pt: { xs: 10, md: 5 },
                pb: 6,
                reveal: false,
                sx: { backgroundColor: 'background.paper' },
                items: [
                  {
                    type: 'grid',
                    gridProps: { ...commonGridProps, spacing: 4 },
                    gridItems: [
                      {
                        ...commonLeftGridItemProps,
                        items: [
                          {
                            type: 'h5',
                            title: 'Our Services',
                            titleProps: { gutterBottom: true },
                          },
                          {
                            type: 'body1',
                            title:
                              'We create human-centred designs focused on driving conversions and achieving business goals.',
                            titleProps: {
                              color: 'text.secondary',
                              maxWidth: true,
                            },
                          },
                          {
                            type: 'link',
                            title: 'View Services',
                            titleProps: {
                              rightCaret: true,
                              href: routeConfig.SERVICES,
                              color: 'secondary',
                              sx: { mt: 2 },
                              variant: 'body2',
                            },
                          },
                        ],
                      },
                      {
                        ...commonRightGridItemProps,
                        items: [
                          {
                            type: 'grid',
                            gridProps: { spacing: 2, rowSpacing: 4 },
                            gridItemProps: { xs: 6, md: 4 },
                            gridItems: services.map((service) =>
                              renderHeaderMenuListBlockItem(service)
                            ),
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        )
      },
    },
    { key: 'showcase', title: 'Showcase', href: routeConfig.SHOWCASES },
    technologys?.length && {
      key: 'technologys',
      title: 'Technologies',
      href: routeConfig.TECHNOLOGYS,
      fullWidth: true,
      isOpenOnHover,
      items: technologys.map((technology) => ({
        key: technology.title,
        title: <Block {...renderHeaderMenuMobileBlockItem(technology)} />,
      })),
      renderItems: () => {
        return (
          <Blocks
            items={[
              {
                key: 'technologys-grid',
                pt: { xs: 10, md: 5 },
                pb: 6,
                reveal: false,
                sx: { backgroundColor: 'background.paper' },
                items: [
                  {
                    type: 'grid',
                    gridProps: commonGridProps,
                    gridItems: [
                      {
                        ...commonLeftGridItemProps,
                        items: [
                          {
                            type: 'h5',
                            title: 'Our Technologies',
                            titleProps: { gutterBottom: true },
                          },
                          {
                            type: 'body1',
                            title:
                              'Bet on technologies that will work even years from now.',
                            titleProps: {
                              color: 'text.secondary',
                              maxWidth: true,
                            },
                          },
                          {
                            type: 'link',
                            title: 'View Technologies',
                            titleProps: {
                              rightCaret: true,
                              href: routeConfig.TECHNOLOGYS,
                              color: 'secondary',
                              sx: { mt: 2 },
                              variant: 'body2',
                            },
                          },
                        ],
                      },
                      {
                        ...commonRightGridItemProps,
                        items: [
                          {
                            type: 'grid',
                            gridProps: { spacing: 2 },
                            gridItemProps: { xs: 6, md: 6, lg: 4 },
                            gridItems: technologys.map((technology) =>
                              renderHeaderMenuBlockItem(technology)
                            ),
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        )
      },
    },
    {
      key: 'industrys',
      title: 'Industries',
      fullWidth: true,
      isOpenOnHover,
      items: industrys.map((industry) => ({
        key: industry.title,
        title: <Block {...renderHeaderMenuMobileBlockItem(industry)} />,
      })),
      renderItems: () => {
        return (
          <Blocks
            items={[
              {
                key: 'industrys-grid',
                pt: { xs: 10, md: 5 },
                pb: 6,
                reveal: false,
                sx: { backgroundColor: 'background.paper' },
                items: [
                  {
                    type: 'grid',
                    gridProps: commonGridProps,
                    gridItems: [
                      {
                        ...commonLeftGridItemProps,
                        items: [
                          {
                            type: 'h5',
                            title: 'Industries We Serve',
                            titleProps: { gutterBottom: true },
                          },
                          {
                            type: 'body1',
                            title:
                              "Your new team's cross-industry knowledge will level up your project.",
                            titleProps: {
                              color: 'text.secondary',
                              maxWidth: true,
                            },
                          },
                          {
                            type: 'link',
                            title: 'View Industries',
                            titleProps: {
                              rightCaret: true,
                              href: routeConfig.INDUSTRYS,
                              color: 'secondary',
                              sx: { mt: 2 },
                              variant: 'body2',
                            },
                          },
                        ],
                      },
                      {
                        ...commonRightGridItemProps,
                        items: [
                          {
                            type: 'grid',
                            gridProps: { spacing: 2 },
                            gridItemProps: { xs: 6, md: 6, lg: 4, xl: 3 },
                            gridItems: industrys.map((industry) =>
                              renderHeaderMenuBlockItem(industry)
                            ),
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        )
      },
    },
    {
      key: 'insights',
      title: 'Insights',
      fullWidth: true,
      isOpenOnHover,
      items: postCategorys.map((postCategory) => ({
        key: postCategory.title,
        title: <Block {...renderHeaderMenuMobileBlockItem(postCategory)} />,
      })),
      renderItems: () => {
        return (
          <Blocks
            items={[
              {
                key: 'post-categorys-grid',
                pt: { xs: 10, md: 5 },
                pb: 6,
                reveal: false,
                sx: { backgroundColor: 'background.paper' },
                items: [
                  {
                    type: 'grid',
                    gridProps: commonGridProps,
                    gridItems: [
                      {
                        ...commonLeftGridItemProps,
                        items: [
                          {
                            type: 'h5',
                            title: 'Insights',
                            titleProps: { gutterBottom: true },
                          },
                          {
                            type: 'body1',
                            title:
                              "Your new team's cross-industry knowledge will level up your project.",
                            titleProps: {
                              color: 'text.secondary',
                              maxWidth: true,
                            },
                          },
                          {
                            type: 'link',
                            title: 'View Insights',
                            titleProps: {
                              rightCaret: true,
                              href: routeConfig.POSTS,
                              color: 'secondary',
                              sx: { mt: 2 },
                              variant: 'body2',
                            },
                          },
                        ],
                      },
                      {
                        ...commonRightGridItemProps,
                        items: [
                          {
                            type: 'grid',
                            gridProps: { spacing: 2 },
                            gridItemProps: { xs: 6, md: 6, lg: 4 },
                            gridItems: postCategorys.map((industry) =>
                              renderHeaderMenuBlockItem(industry)
                            ),
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        )
      },
    },
    {
      key: 'company',
      title: 'Company',
      fullWidth: true,
      isOpenOnHover,
      items: pages.map((page) => ({
        key: page.title,
        title: <Block {...renderHeaderMenuMobileBlockItem(page)} />,
      })),
      renderItems: () => {
        return (
          <Blocks
            items={[
              {
                key: 'company-grid',
                pt: { xs: 10, md: 5 },
                pb: 6,
                reveal: false,
                sx: { backgroundColor: 'background.paper' },
                items: [
                  {
                    type: 'grid',
                    gridProps: commonGridProps,
                    gridItems: [
                      {
                        ...commonLeftGridItemProps,
                        items: [
                          {
                            type: 'h5',
                            title: 'Get to Know us Better',
                            titleProps: { gutterBottom: true },
                          },
                          {
                            type: 'body1',
                            title: 'Learn more about how we function.',
                            titleProps: {
                              color: 'text.secondary',
                              maxWidth: true,
                            },
                          },
                          {
                            type: 'link',
                            title: 'Learn More',
                            titleProps: {
                              rightCaret: true,
                              href: `${appConfig.companyAbsoluteUrl}${routeConfig.ABOUT}`,
                              color: 'secondary',
                              sx: { mt: 2 },
                              variant: 'body2',
                            },
                          },
                        ],
                      },
                      {
                        ...commonRightGridItemProps,
                        items: [
                          {
                            type: 'grid',
                            gridProps: { spacing: 2 },
                            gridItemProps: { xs: 6, md: 6, lg: 4 },
                            gridItems: pages.map((page) =>
                              renderHeaderMenuBlockItem(page)
                            ),
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        )
      },
    },
    ...commonHeaderNavConfig,
  ]
  const footerNavConfig = [
    {
      key: 'services',
      title: 'Services',
      items: services,
    },
    {
      key: 'industrys',
      title: 'Industries',
      items: industrys,
    },
    technologys?.length && {
      key: 'technologies',
      title: 'Technologies',
      items: technologys,
    },
    {
      key: 'ecosystem',
      title: 'Ecosystem',
      items: brands,
    },
    {
      key: 'company',
      title: 'Company',
      href: routeConfig.ABOUT,
      items: pages,
    },
  ]

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
            name: 'locale-picker',
            title: 'Locale',
            showOnMobileBar: true,
            hideInMobileDrawer: true,
            children: (
              <LocalePicker
                locales={localeConfig.locales}
                disableBackdrop
                isOpenOnHover
              />
            ),
          },
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
      ...(darkHeader && { dark: true, translucent: true, position: 'fixed' }),
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
