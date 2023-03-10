import React from 'react'
import Logo from '@app/components/Logo'
import { Block, Blocks } from '@gravis-os/landing'
import {
  renderHeaderMenuBlockItem,
  renderHeaderMenuMobileBlockItem,
} from '@onex/blocks'
import { headerNavConfig as commonHeaderNavConfig } from '@onex/common'
import routeConfig from './routeConfig'
import { technologies, pages, services } from './navConfig'

const commonGridProps = { spacing: 0 }
const commonLeftGridItemProps = { md: 4, lg: 3 }
const commonRightGridItemProps = { md: 8, lg: 9 }

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
    href: routeConfig.SERVICES,
    fullWidth: true,
    isOpenOnHover: true,
    items: services.map((service) => ({
      key: service.title,
      title: <Block {...renderHeaderMenuMobileBlockItem(service)} />,
    })),
    renderItems: ({ popupState }) => {
      return (
        <Blocks
          items={[
            {
              key: 'service-grid',
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
                          title: 'View All Services',
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
                          gridProps: { spacing: 2 },
                          gridItemProps: { xs: 6, md: 6, lg: 4 },
                          gridItems: services.map((service) =>
                            renderHeaderMenuBlockItem(service)
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
    isOpenOnHover: true,
    items: technologies.map((technology) => ({
      key: technology.title,
      title: <Block {...renderHeaderMenuMobileBlockItem(technology)} />,
    })),
    renderItems: ({ popupState }) => {
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
                          title: 'View All Technologies',
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
    key: 'company',
    title: 'Company',
    href: routeConfig.ABOUT,
    fullWidth: true,
    isOpenOnHover: true,
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
                          title: 'View Company',
                          titleProps: {
                            rightCaret: true,
                            href: routeConfig.ABOUT,
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
