import React from 'react'
import merge from 'lodash/merge'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import { Button, Image, LocalePicker } from '@gravis-os/ui'
import {
  Block,
  Blocks,
  LandingLayout as GvsLandingLayout,
  LandingLayoutProps as GvsLandingLayoutProps,
  ContactCalloutProps,
  useLayout,
  renderHeaderMenuBlockItem,
  renderHeaderMenuListBlockItem,
  renderHeaderMenuMobileBlockItem,
  RenderHeaderMenuMobileBlockItemProps,
  useUserPreferences,
  ContactCallout,
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
    postCategorys,
    technologys,
    pages,
    showcases,
    workspaces,
  } = onUseLayout

  // Navs
  const headerNavConfig = [
    {
      id: 'logo',
      preset: { type: 'logo', logoProps },
    },
    showcases?.length && {
      id: 'showcase',
      title: 'Portfolio',
      href: routeConfig.SHOWCASES,
    },
    services?.length && {
      id: 'services',
      title: 'Services',
      href: routeConfig.SERVICES,
      fullWidth: true,
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
                              ({ id }) => id === 'services'
                            )?.title,
                            titleProps: { gutterBottom: true },
                          },
                          {
                            type: 'body1',
                            title: site.nav_items?.find(
                              ({ id }) => id === 'services'
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
      id: 'technologys',
      title: 'Technologies',
      href: routeConfig.TECHNOLOGYS,
      fullWidth: true,
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
                              ({ id }) => id === 'technologies'
                            )?.title,
                            titleProps: { gutterBottom: true },
                          },
                          {
                            type: 'body1',
                            title: site.nav_items?.find(
                              ({ id }) => id === 'technologies'
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
      id: 'industrys',
      title: 'Industries',
      href: routeConfig.INDUSTRYS,
      fullWidth: true,
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
                              ({ id }) => id === 'industries'
                            )?.title,
                            titleProps: { gutterBottom: true },
                          },
                          {
                            type: 'body1',
                            title: site.nav_items?.find(
                              ({ id }) => id === 'industries'
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
    postCategorys?.length && {
      id: 'insights',
      title: 'Insights',
      href: routeConfig.POSTS,
      fullWidth: true,
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
                              ({ id }) => id === 'insights'
                            )?.title,
                            titleProps: { gutterBottom: true },
                          },
                          {
                            type: 'body1',
                            title: site.nav_items?.find(
                              ({ id }) => id === 'insights'
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
    pages?.length && {
      id: 'company',
      title: 'Company',
      href: routeConfig.ABOUT,
      fullWidth: true,
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
                              ({ id }) => id === 'company'
                            )?.title,
                            titleProps: { gutterBottom: true },
                          },
                          {
                            type: 'body1',
                            title: site.nav_items?.find(
                              ({ id }) => id === 'company'
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
                              ({ id }) => id === 'ecosystem'
                            )?.title,
                            titleProps: { gutterBottom: true },
                          },
                          {
                            type: 'body1',
                            title: site.nav_items?.find(
                              ({ id }) => id === 'ecosystem'
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
    seo: {
      ...(isHomeRoute ? {} : { titleTemplate: `%s | ${site.title}` }),
      ...seo,
      openGraph: {
        ...seo.openGraph,
        url: `${site.absolute_url}${router.asPath}`,
      },
      canonical: `${site.absolute_url}${router.asPath.split('?')[0]}`,
      // Add hreflang tags if locales are available
      ...(Boolean(site.locales?.length) && {
        languageAlternates: [
          // Add default region-independant link for that language
          // @link https://webmasters.stackexchange.com/a/125337
          {
            hrefLang: 'en',
            href: `${site.absolute_url}/${site.locales[0].iso_alpha_2}${router.asPath}`,
          },
          // Add other regions
          ...site.locales?.map(({ iso_alpha_2 }) => ({
            hrefLang: `en-${iso_alpha_2}`,
            href: `${site.absolute_url}/${iso_alpha_2}${router.asPath}`,
          })),
        ],
      }),
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
            id: 'toggle-dark-mode',
            children: toggleDarkModeIconButtonJsx,
          },
          {
            id: 'get-started',
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
