import React from 'react'
import Logo from '@app/components/Logo'
import { Blocks, Block } from '@gravis-os/landing'
import {
  renderHeaderMenuBlockItem,
  renderHeaderMenuListBlockItem,
  renderHeaderMenuMobileBlockItem,
  RenderHeaderMenuMobileBlockItemProps,
  headerNavConfig as commonHeaderNavConfig,
} from '@onex/blocks'
import appConfig from './appConfig'
import routeConfig from './routeConfig'
import systemConfig from './systemConfig'
import { services, industries, pages, postCategorys } from './navConfig'

const commonGridProps = { spacing: 0 }
const commonLeftGridItemProps = { md: 4, lg: 3 }
const commonRightGridItemProps = { md: 8, lg: 9 }

const { isOpenOnHover } = systemConfig

const headerNavConfig = [
  {
    key: 'logo',
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
    renderItems: ({ popupState }) => {
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
  {
    key: 'industries',
    title: 'Industries',
    fullWidth: true,
    isOpenOnHover,
    items: industries.map((industry) => ({
      key: industry.title,
      title: <Block {...renderHeaderMenuMobileBlockItem(industry)} />,
    })),
    renderItems: () => {
      return (
        <Blocks
          items={[
            {
              key: 'industries-grid',
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
                          gridItems: industries.map((industry) =>
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
    renderItems: ({ popupState }) => {
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

export default headerNavConfig
