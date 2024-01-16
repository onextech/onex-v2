import React from 'react'

import {
  Block,
  Blocks,
  ContactCallout,
  ContactCalloutProps,
  LandingLayout as GvsLandingLayout,
  LandingLayoutProps as GvsLandingLayoutProps,
  RenderHeaderMenuMobileBlockItemProps,
  renderHeaderMenuBlockItem,
  renderHeaderMenuListBlockItem,
  renderHeaderMenuMobileBlockItem,
  useLayout,
  useUserPreferences,
} from '@gravis-os/landing'
import { Button, Image, LocalePicker } from '@gravis-os/ui'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import { GetStartedPage } from '@onex/pages'
import merge from 'lodash/merge'
import { useRouter } from 'next/router'

// Style Constants
const commonGridProps = { spacing: 0 }
const commonLeftGridItemProps = { md: 4, lg: 3 }
const commonRightGridItemProps = { md: 8, lg: 9 }

export interface LandingLayoutProps
  extends Omit<GvsLandingLayoutProps, 'footerProps' | 'headerProps'> {
  calloutProps?: ContactCalloutProps
  footerProps?: Partial<GvsLandingLayoutProps['footerProps']>
  headerProps?: Partial<GvsLandingLayoutProps['headerProps']>
  useLayout?: typeof useLayout
  useUserPreferences?: typeof useUserPreferences
}

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  const {
    calloutProps,
    seo,
    useLayout: injectedUseLayout,
    useUserPreferences: injectedUseUserPreferences,
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
    industrys,
    legalItems,

    // Calculated
    logoProps,
    pages,
    postCategorys,

    routeConfig,
    // Modules
    services,
    showcases,
    // Configs
    site,
    socialMediaItems,
    technologys,
    workspaces,
  } = onUseLayout

  // Navs
  const headerNavConfig = [
    {
      id: 'logo',
      preset: { logoProps, type: 'logo' },
    },
    showcases?.length && {
      id: 'showcase',
      title: 'Portfolio',
      href: routeConfig.SHOWCASES,
    },
    services?.length && {
      id: 'services',
      title: 'Services',
      fullWidth: true,
      href: routeConfig.SERVICES,
      isOpenOnHover: site.nav_is_open_on_hover,
      items: services.map((service) => ({
        id: service.title,
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
                id: 'services-grid',
                items: [
                  {
                    gridItems: [
                      {
                        ...commonLeftGridItemProps,
                        items: [
                          {
                            title: site.nav_items?.find(
                              ({ id }) => id === 'services'
                            )?.title,
                            titleProps: { gutterBottom: true },
                            type: 'h5',
                          },
                          {
                            title: site.nav_items?.find(
                              ({ id }) => id === 'services'
                            )?.subtitle,
                            titleProps: {
                              color: 'text.secondary',
                              maxWidth: true,
                            },
                            type: 'body1',
                          },
                          {
                            title: 'View Services',
                            titleProps: {
                              color: 'secondary',
                              href: routeConfig.SERVICES,
                              rightCaret: true,
                              sx: { mt: 2 },
                              variant: 'body2',
                            },
                            type: 'link',
                          },
                        ],
                      },
                      {
                        ...commonRightGridItemProps,
                        items: [
                          {
                            gridItemProps: { xs: 6, md: 4 },
                            gridItems: services.map((service) =>
                              renderHeaderMenuListBlockItem(service)
                            ),
                            gridProps: { rowSpacing: 4, spacing: 2 },
                            type: 'grid',
                          },
                        ],
                      },
                    ],
                    gridProps: { ...commonGridProps, spacing: 4 },
                    type: 'grid',
                  },
                ],
                pb: 6,
                pt: { xs: 10, md: 5 },
                reveal: false,
                sx: { backgroundColor: 'background.paper' },
              },
            ]}
          />
        )
      },
    },
    technologys?.length && {
      id: 'technologys',
      title: 'Technologies',
      fullWidth: true,
      href: routeConfig.TECHNOLOGYS,
      isOpenOnHover: site.nav_is_open_on_hover,
      items: technologys.map((technology) => ({
        id: technology.title,
        title: <Block {...renderHeaderMenuMobileBlockItem(technology)} />,
      })),
      renderItems: () => {
        return (
          <Blocks
            items={[
              {
                id: 'technologys-grid',
                items: [
                  {
                    gridItems: [
                      {
                        ...commonLeftGridItemProps,
                        items: [
                          {
                            title: site.nav_items?.find(
                              ({ id }) => id === 'technologies'
                            )?.title,
                            titleProps: { gutterBottom: true },
                            type: 'h5',
                          },
                          {
                            title: site.nav_items?.find(
                              ({ id }) => id === 'technologies'
                            )?.subtitle,
                            titleProps: {
                              color: 'text.secondary',
                              maxWidth: true,
                            },
                            type: 'body1',
                          },
                          {
                            title: 'View Technologies',
                            titleProps: {
                              color: 'secondary',
                              href: routeConfig.TECHNOLOGYS,
                              rightCaret: true,
                              sx: { mt: 2 },
                              variant: 'body2',
                            },
                            type: 'link',
                          },
                        ],
                      },
                      {
                        ...commonRightGridItemProps,
                        items: [
                          {
                            gridItemProps: { xs: 6, md: 6, lg: 4 },
                            gridItems: technologys.map((technology) =>
                              renderHeaderMenuBlockItem(technology)
                            ),
                            gridProps: { spacing: 2 },
                            type: 'grid',
                          },
                        ],
                      },
                    ],
                    gridProps: commonGridProps,
                    type: 'grid',
                  },
                ],
                pb: 6,
                pt: { xs: 10, md: 5 },
                reveal: false,
                sx: { backgroundColor: 'background.paper' },
              },
            ]}
          />
        )
      },
    },
    industrys?.length && {
      id: 'industrys',
      title: 'Industries',
      fullWidth: true,
      href: routeConfig.INDUSTRYS,
      isOpenOnHover: site.nav_is_open_on_hover,
      items: industrys.map((industry) => ({
        id: industry.title,
        title: <Block {...renderHeaderMenuMobileBlockItem(industry)} />,
      })),
      renderItems: () => {
        return (
          <Blocks
            items={[
              {
                id: 'industrys-grid',
                items: [
                  {
                    gridItems: [
                      {
                        ...commonLeftGridItemProps,
                        items: [
                          {
                            title: site.nav_items?.find(
                              ({ id }) => id === 'industries'
                            )?.title,
                            titleProps: { gutterBottom: true },
                            type: 'h5',
                          },
                          {
                            title: site.nav_items?.find(
                              ({ id }) => id === 'industries'
                            )?.subtitle,
                            titleProps: {
                              color: 'text.secondary',
                              maxWidth: true,
                            },
                            type: 'body1',
                          },
                          {
                            title: 'View Industries',
                            titleProps: {
                              color: 'secondary',
                              href: routeConfig.INDUSTRYS,
                              rightCaret: true,
                              sx: { mt: 2 },
                              variant: 'body2',
                            },
                            type: 'link',
                          },
                        ],
                      },
                      {
                        ...commonRightGridItemProps,
                        items: [
                          {
                            gridItemProps: { xs: 6, md: 6, lg: 4 },
                            gridItems: industrys.map((industry) =>
                              renderHeaderMenuBlockItem(industry)
                            ),
                            gridProps: { spacing: 2 },
                            type: 'grid',
                          },
                        ],
                      },
                    ],
                    gridProps: commonGridProps,
                    type: 'grid',
                  },
                ],
                pb: 6,
                pt: { xs: 10, md: 5 },
                reveal: false,
                sx: { backgroundColor: 'background.paper' },
              },
            ]}
          />
        )
      },
    },
    postCategorys?.length && {
      id: 'insights',
      title: 'Insights',
      fullWidth: true,
      href: routeConfig.POSTS,
      isOpenOnHover: site.nav_is_open_on_hover,
      items: postCategorys.map((postCategory) => ({
        id: postCategory.title,
        title: <Block {...renderHeaderMenuMobileBlockItem(postCategory)} />,
      })),
      renderItems: () => {
        return (
          <Blocks
            items={[
              {
                id: 'post-categorys-grid',
                items: [
                  {
                    gridItems: [
                      {
                        ...commonLeftGridItemProps,
                        items: [
                          {
                            title: site.nav_items?.find(
                              ({ id }) => id === 'insights'
                            )?.title,
                            titleProps: { gutterBottom: true },
                            type: 'h5',
                          },
                          {
                            title: site.nav_items?.find(
                              ({ id }) => id === 'insights'
                            )?.subtitle,
                            titleProps: {
                              color: 'text.secondary',
                              maxWidth: true,
                            },
                            type: 'body1',
                          },
                          {
                            title: 'View Insights',
                            titleProps: {
                              color: 'secondary',
                              href: routeConfig.POSTS,
                              rightCaret: true,
                              sx: { mt: 2 },
                              variant: 'body2',
                            },
                            type: 'link',
                          },
                        ],
                      },
                      {
                        ...commonRightGridItemProps,
                        items: [
                          {
                            gridItemProps: { xs: 6, md: 6, lg: 4 },
                            gridItems: postCategorys.map((industry) =>
                              renderHeaderMenuBlockItem(industry)
                            ),
                            gridProps: { spacing: 2 },
                            type: 'grid',
                          },
                        ],
                      },
                    ],
                    gridProps: commonGridProps,
                    type: 'grid',
                  },
                ],
                pb: 6,
                pt: { xs: 10, md: 5 },
                reveal: false,
                sx: { backgroundColor: 'background.paper' },
              },
            ]}
          />
        )
      },
    },
    pages?.length && {
      id: 'company',
      title: 'Company',
      fullWidth: true,
      href: routeConfig.ABOUT,
      isOpenOnHover: site.nav_is_open_on_hover,
      items: pages.map((page) => ({
        id: page.title,
        title: <Block {...renderHeaderMenuMobileBlockItem(page)} />,
      })),
      renderItems: () => {
        return (
          <Blocks
            items={[
              {
                id: 'company-grid',
                items: [
                  {
                    gridItems: [
                      {
                        ...commonLeftGridItemProps,
                        items: [
                          {
                            title: site.nav_items?.find(
                              ({ id }) => id === 'company'
                            )?.title,
                            titleProps: { gutterBottom: true },
                            type: 'h5',
                          },
                          {
                            title: site.nav_items?.find(
                              ({ id }) => id === 'company'
                            )?.subtitle,
                            titleProps: {
                              color: 'text.secondary',
                              maxWidth: true,
                            },
                            type: 'body1',
                          },
                          {
                            title: 'Learn More',
                            titleProps: {
                              color: 'secondary',
                              href: `/${routeConfig.ABOUT}`,
                              rightCaret: true,
                              sx: { mt: 2 },
                              variant: 'body2',
                            },
                            type: 'link',
                          },
                        ],
                      },
                      {
                        ...commonRightGridItemProps,
                        items: [
                          {
                            gridItemProps: { xs: 6, md: 6, lg: 4 },
                            gridItems: pages.map((page) =>
                              renderHeaderMenuBlockItem(page)
                            ),
                            gridProps: { spacing: 2 },
                            type: 'grid',
                          },
                        ],
                      },
                    ],
                    gridProps: commonGridProps,
                    type: 'grid',
                  },
                ],
                pb: 6,
                pt: { xs: 10, md: 5 },
                reveal: false,
                sx: { backgroundColor: 'background.paper' },
              },
            ]}
          />
        )
      },
    },
    site.nav_is_ecosystem_visible && {
      id: 'ecosystem',
      title: 'Ecosystem',
      fullWidth: true,
      isOpenOnHover: site.nav_is_open_on_hover,
      items: workspaces.map((workspace) => ({
        id: workspace.title,
        title: <Block {...renderHeaderMenuMobileBlockItem(workspace)} />,
      })),
      renderItems: () => {
        return (
          <Blocks
            items={[
              {
                id: 'grid',
                items: [
                  {
                    gridItems: [
                      {
                        ...commonLeftGridItemProps,
                        items: [
                          {
                            title: site.nav_items?.find(
                              ({ id }) => id === 'ecosystem'
                            )?.title,
                            titleProps: { gutterBottom: true },
                            type: 'h5',
                          },
                          {
                            title: site.nav_items?.find(
                              ({ id }) => id === 'ecosystem'
                            )?.subtitle,
                            titleProps: {
                              color: 'text.secondary',
                              maxWidth: true,
                            },
                            type: 'body1',
                          },
                          {
                            title: 'Learn More',
                            titleProps: {
                              color: 'secondary',
                              href: `/${routeConfig.WORKSPACES}`,
                              rightCaret: true,
                              sx: { mt: 2 },
                              variant: 'body2',
                            },
                            type: 'link',
                          },
                        ],
                      },
                      {
                        ...commonRightGridItemProps,
                        items: [
                          {
                            gridItemProps: { xs: 6, md: 6, lg: 4 },
                            gridItems: workspaces.map((workspace) =>
                              renderHeaderMenuBlockItem(workspace)
                            ),
                            gridProps: { spacing: 2 },
                            type: 'grid',
                          },
                        ],
                      },
                    ],
                    gridProps: commonGridProps,
                    type: 'grid',
                  },
                ],
                pb: 6,
                pt: { xs: 10, md: 5 },
                reveal: false,
                sx: { backgroundColor: 'background.paper' },
              },
            ]}
          />
        )
      },
    },
  ]

  const footerNavConfig = [
    services?.length && {
      id: 'services',
      title: 'Services',
      href: routeConfig.SERVICES,
      items: services,
    },
    industrys?.length && {
      id: 'industrys',
      title: 'Industries',
      items: industrys,
    },
    technologys?.length && {
      id: 'technologies',
      title: 'Technologies',
      items: technologys,
    },
    site.nav_is_ecosystem_visible && {
      id: 'ecosystem',
      title: 'Ecosystem',
      items: workspaces,
    },
    {
      id: 'company',
      title: 'Company',
      href: routeConfig.ABOUT,
      items: [
        showcases?.length && {
          id: 'showcases',
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
    footerProps: {
      accordionProps: {
        itemTitleProps: {
          color: 'text.secondary',
          hoverColor: 'inherit',
          variant: 'body2',
        },
        titleProps: { variant: 'h7' },
      },
      callout: (
        <ContactCallout
          page={
            <GetStartedPage
              disableTestimonials={site.disable_testimonials}
              fullScreen
            />
          }
          {...calloutProps}
        />
      ),
      companyName: site.company_title,
      legalItems,
      logo: <Image {...logoProps} />,
      navItems: footerNavConfig,
      socialMediaItems,
    },
    headerProps: {
      accordionProps: { titleProps: { variant: 'h5' } },
      disableBoxShadow: true,
      drawerWidth: '100vw',
      navItems: {
        left: headerNavConfig,
        right: [
          {
            title: 'Locale',
            children: site.locales && (
              <LocalePicker
                disableBackdrop
                isOpenOnHover
                locales={site.locales?.map(({ iso_alpha_2, ...rest }) => ({
                  ...rest,
                  isoAlpha2: iso_alpha_2,
                }))}
              />
            ),
            hideInMobileDrawer: true,
            name: 'locale-picker',
            showOnMobileBar: true,
          },
          {
            id: 'toggle-dark-mode',
            children: toggleDarkModeIconButtonJsx,
          },
          {
            id: 'get-started',
            children: (
              <Button
                {...{
                  title: 'Get Started',
                  color: 'inherit' as const,
                  dialogProps: {
                    children: (
                      <GetStartedPage
                        // @ts-ignore
                        // TODO@Joel: Type site and remove this ignore
                        disableServiceCategorys={site.disable_service_categorys}
                        disableTestimonials={site.disable_testimonials}
                        fullScreen
                      />
                    ),
                    disableTitle: true,
                    fullScreen: true,
                    transitionVariant: 'fade' as const,
                  },
                  endIcon: <KeyboardArrowRightOutlinedIcon />,
                  size: 'small',
                  sx: { minWidth: { xs: 115, md: 123 }, ml: 1 },
                  variant: 'text' as const,
                }}
              />
            ),
            hideInMobileDrawer: true,
            showOnMobileBar: true,
          },
        ],
      },
    },
    seo: {
      ...(isHomeRoute ? {} : { titleTemplate: `%s | ${site.title}` }),
      ...seo,
      openGraph: {
        ...seo.openGraph,
        url: `${site.absolute_url}${router.asPath}`,
      },
      // Add hreflang tags if locales are available
      ...(Boolean(site.locales?.length) && {
        languageAlternates: [
          // Add default region-independant link for that language
          // @link https://webmasters.stackexchange.com/a/125337
          {
            href: `${site.absolute_url}/${site.locales[0].iso_alpha_2}${router.asPath}`,
            hrefLang: 'en',
          },
          // Add other regions
          ...site.locales?.map(({ iso_alpha_2 }) => ({
            href: `${site.absolute_url}/${iso_alpha_2}${router.asPath}`,
            hrefLang: `en-${iso_alpha_2}`,
          })),
        ],
      }),
    },
  }
  const landingLayoutProps = merge({}, defaultLandingLayoutProps, rest)

  return <GvsLandingLayout {...landingLayoutProps} />
}

export default LandingLayout
