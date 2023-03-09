import React from 'react'
import Logo from '@app/components/Logo'
import { Blocks, Block } from '@gravis-os/landing'
import {
  renderHeaderMenuBlockItem,
  renderHeaderMenuListBlockItem,
  renderHeaderMenuMobileBlockItem,
} from '@onex/blocks'
import routeConfig from './routeConfig'
import { services, industries, pages, brands } from './navConfig'

const commonGridProps = { spacing: 0 }
const commonLeftGridItemProps = { md: 4, lg: 3 }
const commonRightGridItemProps = { md: 8, lg: 9 }

const headerNavConfig = [
  {
    key: 'logo',
    title: <Logo />,
    href: '/',
    offsetLeft: true,
    showOnMobileBar: true,
  },
  {
    key: 'services',
    title: 'Services',
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
    isOpenOnHover: true,
    items: industries.map((industry) => ({
      key: industry.title,
      title: <Block {...renderHeaderMenuMobileBlockItem(industry)} />,
    })),
    renderItems: ({ popupState }) => {
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
                          title: 'View All Industries',
                          titleProps: {
                            rightCaret: true,
                            href: routeConfig.INDUSTRIES,
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
  {
    key: 'ecosystem',
    title: 'Ecosystem',
    fullWidth: true,
    isOpenOnHover: true,
    items: brands.map((brand) => ({
      key: brand.title,
      title: <Block {...renderHeaderMenuMobileBlockItem(brand)} />,
    })),
    renderItems: ({ popupState }) => {
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
                          title: 'Our Ecosystem',
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
                          gridItems: brands.map((brand) =>
                            renderHeaderMenuBlockItem(brand)
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
