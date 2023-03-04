import React from 'react'
import Logo from '@app/components/Logo'
import { Blocks } from '@gravis-os/landing'
import {
  renderHeaderMenuBlockItem,
  renderHeaderMenuListBlockItem,
} from '@onex/blocks'
import routeConfig from './routeConfig'

const commonGridProps = { spacing: 0 }
const commonLeftGridItemProps = { md: 4, lg: 3 }
const commonRightGridItemProps = { md: 8, lg: 9 }

const navConfig = [
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
                          gridItems: [
                            renderHeaderMenuListBlockItem({
                              title: 'Applications',
                              items: [
                                {
                                  title: 'Enterprise Applications',
                                  href: routeConfig.ABOUT,
                                },
                                { title: 'Managed Applications' },
                                { title: 'Application Modernization' },
                              ],
                            }),
                            renderHeaderMenuListBlockItem({
                              title: 'Engineering',
                              items: [
                                { title: 'Research & Development' },
                                { title: 'API Development' },
                                { title: 'Microfrontend Development' },
                              ],
                            }),
                            renderHeaderMenuListBlockItem({
                              title: 'Infrastructure & Cloud',
                              items: [
                                { title: 'Managed DevOps' },
                                { title: 'Infrastructure Managed Services' },
                                { title: 'Cloud Strategy & Design' },
                              ],
                            }),
                            renderHeaderMenuListBlockItem({
                              title: 'Advisory',
                              items: [
                                { title: 'Digital Strategy' },
                                { title: 'Transformation & Delivery' },
                                { title: 'Architecture Design' },
                              ],
                            }),
                            renderHeaderMenuListBlockItem({
                              title: 'Modern Workplace',
                              items: [
                                { title: 'Staff Augmentation' },
                                { title: 'Managed Product Teams' },
                                { title: 'Service Automation' },
                              ],
                            }),
                            renderHeaderMenuListBlockItem({
                              title: 'Quality Assurance',
                              items: [
                                { title: 'Performance Optimization' },
                                { title: 'Production Readiness' },
                                { title: 'Testing Automation' },
                              ],
                            }),
                          ],
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
                          gridItems: [
                            renderHeaderMenuBlockItem({
                              title: 'Financial Services',
                              subtitle:
                                'Support in cloud adoption and automation for startups and finance institutions.',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'Government & Public Sectors',
                              subtitle:
                                'Support in cloud adoption and automation for startups and finance institutions.',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'Maritime',
                              subtitle:
                                'Work with product experts with the know-how tested in 7+ industries.',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'Real Estate',
                              subtitle:
                                'Let certified engineers kick-start your cloud operations',
                            }),
                          ],
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
    isOpenOnHover: true,
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
                          gridItems: [
                            renderHeaderMenuBlockItem({
                              title: 'About Us',
                              subtitle:
                                'Learn how we keep our employees happy and see our values, culture, and initiatives.',
                              href: routeConfig.ABOUT,
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'Our Approach',
                              subtitle:
                                'Discover the Agile process that makes 98% of tech executives recommend us',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'Careers',
                              subtitle:
                                'Discover the Agile process that makes 98% of tech executives recommend us',
                            }),
                          ],
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
    key: 'Ecosystem',
    title: 'Ecosystem',
    fullWidth: true,
    isOpenOnHover: true,
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
                          gridItems: [
                            renderHeaderMenuBlockItem({
                              title: 'One X Tech',
                              subtitle:
                                'Learn how we keep our employees happy and see our values, culture, and initiatives.',
                              href: routeConfig.ABOUT,
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'One X Design',
                              subtitle:
                                'Discover the Agile process that makes 98% of tech executives recommend us',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'One X Data',
                              subtitle:
                                'Discover the Agile process that makes 98% of tech executives recommend us',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'One X Digital',
                              subtitle:
                                'Learn how we keep our employees happy and see our values, culture, and initiatives.',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'One X Studio',
                              subtitle:
                                'Discover the Agile process that makes 98% of tech executives recommend us',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'One X Labs',
                              subtitle:
                                'Discover the Agile process that makes 98% of tech executives recommend us',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'One X Ventures',
                              subtitle:
                                'Learn how we keep our employees happy and see our values, culture, and initiatives.',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'Fin X',
                              subtitle:
                                'Discover the Agile process that makes 98% of tech executives recommend us',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'Gov X',
                              subtitle:
                                'Discover the Agile process that makes 98% of tech executives recommend us',
                            }),
                          ],
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

export default navConfig
