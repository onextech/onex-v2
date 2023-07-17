import React from 'react'
import merge from 'lodash/merge'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import { Button, Image, LocalePicker } from '@gravis-os/ui'
import {
  Block,
  Blocks,
  LandingLayout as GvsLandingLayout,
  LandingLayoutProps as GvsLandingLayoutProps,
  ContactCallout,
  ContactCalloutProps,
  useLayout,
  renderHeaderMenuBlockItem,
  renderHeaderMenuListBlockItem,
  renderHeaderMenuMobileBlockItem,
  RenderHeaderMenuMobileBlockItemProps,
  useUserPreferences,
} from '@gravis-os/landing'
import { GetStartedPage } from '@onex/pages'
import { useRouter } from 'next/router'

// Style Constants
const commonGridProps = { spacing: 0 }
const commonLeftGridItemProps = { md: 4, lg: 3 }
const commonRightGridItemProps = { md: 8, lg: 9 }

export interface LandingLayoutProps
  extends Omit<GvsLandingLayoutProps, 'headerProps' | 'footerProps'> {
  calloutProps?: ContactCalloutProps
  headerProps?: Partial<GvsLandingLayoutProps['headerProps']>
  footerProps?: Partial<GvsLandingLayoutProps['footerProps']>
  useLayout?: typeof useLayout
  useUserPreferences?: typeof useUserPreferences
}

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  const {
    useUserPreferences: injectedUseUserPreferences,
    useLayout: injectedUseLayout,
    seo,
    calloutProps,
    ...rest
  } = props

  // Hooks
  const useUserPreferencesFunction =
    injectedUseUserPreferences || useUserPreferences
  const { toggleDarkModeIconButtonJsx } = useUserPreferencesFunction()

  // Allow overriding the useLayout hook to allow for context override
  const useLayoutFunction = injectedUseLayout || useLayout
  const onUseLayout = useLayoutFunction()

  const {
    // Configs
    site,
    routeConfig,

    // Calculated
    logoProps,
    socialMediaItems,
    legalItems,

    // Modules
    services,
    industrys,
    serviceCategorys,
    postCategorys,
    technologys,
    pages,
    showcases,
    workspaces,
  } = onUseLayout

  // Navs
  const headerNavConfig = [
    {
      key: 'logo',
      preset: { type: 'logo', logoProps },
    },
    showcases?.length && {
      key: 'showcase',
      title: 'Portfolio',
      href: routeConfig.SHOWCASES,
    },
    {
      key: 'services',
      title: 'Services',
      href: routeConfig.SERVICES,
      fullWidth: true,
      isOpenOnHover: site.nav_is_open_on_hover,
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
                            title: site.nav_items?.find(
                              ({ key }) => key === 'services'
                            )?.title,
                            titleProps: { gutterBottom: true },
                          },
                          {
                            type: 'body1',
                            title: site.nav_items?.find(
                              ({ key }) => key === 'services'
                            )?.subtitle,
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
    technologys?.length && {
      key: 'technologys',
      title: 'Technologies',
      href: routeConfig.TECHNOLOGYS,
      fullWidth: true,
      isOpenOnHover: site.nav_is_open_on_hover,
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
                            title: site.nav_items?.find(
                              ({ key }) => key === 'technologies'
                            )?.title,
                            titleProps: { gutterBottom: true },
                          },
                          {
                            type: 'body1',
                            title: site.nav_items?.find(
                              ({ key }) => key === 'technologies'
                            )?.subtitle,
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
    industrys?.length && {
      key: 'industrys',
      title: 'Industries',
      href: routeConfig.INDUSTRYS,
      fullWidth: true,
      isOpenOnHover: site.nav_is_open_on_hover,
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
                            title: site.nav_items?.find(
                              ({ key }) => key === 'industries'
                            )?.title,
                            titleProps: { gutterBottom: true },
                          },
                          {
                            type: 'body1',
                            title: site.nav_items?.find(
                              ({ key }) => key === 'industries'
                            )?.subtitle,
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
                            gridItemProps: { xs: 6, md: 6, lg: 4 },
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
      href: routeConfig.POSTS,
      fullWidth: true,
      isOpenOnHover: site.nav_is_open_on_hover,
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
                            title: site.nav_items?.find(
                              ({ key }) => key === 'insights'
                            )?.title,
                            titleProps: { gutterBottom: true },
                          },
                          {
                            type: 'body1',
                            title: site.nav_items?.find(
                              ({ key }) => key === 'insights'
                            )?.subtitle,
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
      href: routeConfig.ABOUT,
      fullWidth: true,
      isOpenOnHover: site.nav_is_open_on_hover,
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
                            title: site.nav_items?.find(
                              ({ key }) => key === 'company'
                            )?.title,
                            titleProps: { gutterBottom: true },
                          },
                          {
                            type: 'body1',
                            title: site.nav_items?.find(
                              ({ key }) => key === 'company'
                            )?.subtitle,
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
                              href: `/${routeConfig.ABOUT}`,
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
    site.nav_is_ecosystem_visible && {
      key: 'ecosystem',
      title: 'Ecosystem',
      fullWidth: true,
      isOpenOnHover: site.nav_is_open_on_hover,
      items: workspaces.map((workspace) => ({
        key: workspace.title,
        title: <Block {...renderHeaderMenuMobileBlockItem(workspace)} />,
      })),
      renderItems: () => {
        return (
          <Blocks
            items={[
              {
                key: 'grid',
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
                            title: site.nav_items?.find(
                              ({ key }) => key === 'ecosystem'
                            )?.title,
                            titleProps: { gutterBottom: true },
                          },
                          {
                            type: 'body1',
                            title: site.nav_items?.find(
                              ({ key }) => key === 'ecosystem'
                            )?.subtitle,
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
                              href: `/${routeConfig.WORKSPACES}`,
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
                            gridItems: workspaces.map((workspace) =>
                              renderHeaderMenuBlockItem(workspace)
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
  ]

  const footerNavConfig = [
    services?.length && {
      key: 'services',
      title: 'Services',
      href: routeConfig.SERVICES,
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
    },
    industrys?.length && {
      key: 'industrys',
      title: 'Industries',
      items: industrys,
    },
    technologys?.length && {
      key: 'technologies',
      title: 'Technologies',
      items: technologys,
    },
    site.nav_is_ecosystem_visible && {
      key: 'ecosystem',
      title: 'Ecosystem',
      items: workspaces,
    },
    {
      key: 'company',
      title: 'Company',
      href: routeConfig.ABOUT,
      items: [
        showcases?.length && {
          key: 'showcases',
          title: 'Portfolio',
          href: routeConfig.SHOWCASES,
        },
        ...pages,
      ].filter(Boolean),
    },
  ]

  const router = useRouter()
  const isHomeRoute = router.pathname === routeConfig.HOME

  // LandingLayoutProps
  const defaultLandingLayoutProps = {
    disableGutters: true,
    seo: {
      ...(isHomeRoute ? {} : { titleTemplate: `%s | ${site.title}` }),
      ...seo,
      openGraph: {
        ...seo.openGraph,
        url: `${site.absolute_url}${router.asPath}`,
      },
      canonical: `${site.absolute_url}${router.asPath.split('?')[0]}`,
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
            children: site.locales && (
              <LocalePicker
                locales={site.locales?.map(({ iso_alpha_2, ...rest }) => ({
                  ...rest,
                  isoAlpha2: iso_alpha_2,
                }))}
                disableBackdrop
                isOpenOnHover
              />
            ),
          },
          {
            key: 'toggle-dark-mode',
            children: toggleDarkModeIconButtonJsx,
          },
          {
            key: 'get-started',
            children: (
              <Button
                {...{
                  title: 'Get Started',
                  variant: 'text' as const,
                  color: 'inherit' as const,
                  size: 'small',
                  endIcon: <KeyboardArrowRightOutlinedIcon />,
                  sx: { ml: 1, minWidth: { xs: 115, md: 123 } },
                  dialogProps: {
                    fullScreen: true,
                    disableTitle: true,
                    transitionVariant: 'fade' as const,
                    children: (
                      <GetStartedPage
                        fullScreen
                        disableTestimonials={site.disable_testimonials}
                      />
                    ),
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
      callout: (
        <ContactCallout
          page={
            <GetStartedPage
              fullScreen
              disableTestimonials={site.disable_testimonials}
            />
          }
          {...calloutProps}
        />
      ),
      logo: <Image {...logoProps} />,
      companyName: site.company_title,
      accordionProps: {
        titleProps: { variant: 'h7' },
        itemTitleProps: {
          variant: 'body2',
          color: 'text.secondary',
          hoverColor: 'inherit',
        },
      },
      navItems: footerNavConfig,
      legalItems,
      socialMediaItems,
    },
  }
  const landingLayoutProps = merge({}, defaultLandingLayoutProps, rest)

  return <GvsLandingLayout {...landingLayoutProps} />
}

export default LandingLayout
