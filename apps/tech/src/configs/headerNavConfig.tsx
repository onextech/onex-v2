import React from 'react'
import Logo from '@app/components/Logo'
import { Block, Blocks } from '@gravis-os/landing'
import {
  renderHeaderMenuBlockItem,
  renderHeaderMenuListBlockItem,
  renderHeaderMenuMobileBlockItem,
  RenderHeaderMenuMobileBlockItemProps,
} from '@onex/blocks'
import routeConfig from './routeConfig'
import appConfig from './appConfig'
import systemConfig from './systemConfig'
import { technologies, pages, services, postCategorys } from './navConfig'

const commonGridProps = { spacing: 0 }
const commonLeftGridItemProps = { md: 4, lg: 3 }
const commonRightGridItemProps = { md: 8, lg: 9 }

const { isOpenOnHover } = systemConfig

const headerNavConfig = [
  {
    key: 'logo',
    title: <Logo />,
    href: routeConfig.HOME,
    offsetLeft: true,
    showOnMobileBar: true,
  },
  { key: 'portfolio', title: 'Portfolio', href: routeConfig.PORTFOLIO },
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
              key: 'service-categorys-grid',
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
    key: 'technologies',
    title: 'Technologies',
    href: routeConfig.TECHNOLOGIES,
    fullWidth: true,
    isOpenOnHover,
    items: technologies.map((technology) => ({
      key: technology.title,
      title: <Block {...renderHeaderMenuMobileBlockItem(technology)} />,
    })),
    renderItems: () => {
      return (
        <Blocks
          items={[
            {
              key: 'technologies-grid',
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
                            href: routeConfig.TECHNOLOGIES,
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
                          gridItems: technologies.map((technology) =>
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
]

export default headerNavConfig
