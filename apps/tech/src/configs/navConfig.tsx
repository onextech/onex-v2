import React from 'react'
import Logo from '@app/components/Logo'
import { Blocks } from '@gravis-os/landing'
import { renderHeaderMenuBlockItem } from '@onex/blocks'
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
  { key: 'portfolio', title: 'Portfolio', href: '/portfolio' },
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
                          gridItems: [
                            renderHeaderMenuBlockItem({
                              title: 'Digital Product Design',
                              subtitle:
                                'Make your product the first choice for users with designers who built dozens of them.',
                              href: routeConfig.ABOUT,
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'Agile Development Teams',
                              subtitle:
                                'Work with product experts with the know-how tested in 7+ industries.',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'Cloud Engineering & DevOps',
                              subtitle:
                                'Let certified engineers kick-start your cloud operations',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'Web Development',
                              subtitle:
                                'Build or scale competitive products ready for future growth and millions of users.',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'Software Architecture',
                              subtitle:
                                'Reach the software flexibility needed to scale by optimizing your architecture.',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'Mobile Development',
                              subtitle:
                                'Offer your customers an iOS/Android hybride mobile app they will want to use.',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'Quality Assurance',
                              subtitle:
                                'Secure the highest ratings for your product by running extensive QA tests.',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'Data Engineering',
                              subtitle:
                                'Collect your data, filter it, and take out game-changing insights on your product and team productivity.',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'App Modernization',
                              subtitle:
                                'Make your systems fast, efficient, and scalable to prepare for further product growth.',
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
    key: 'technologies',
    title: 'Technologies',
    fullWidth: true,
    isOpenOnHover: true,
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
                          gridItems: [
                            renderHeaderMenuBlockItem({
                              title: 'JavaScript',
                              subtitle:
                                'Make your product the first choice for users with designers who built dozens of them.',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'TypeScript',
                              subtitle:
                                'Build or scale competitive products ready for future growth and millions of users.',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'Node.js',
                              subtitle:
                                'Let certified engineers kick-start your cloud operations',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'React',
                              subtitle:
                                'Work with product experts with the know-how tested in 7+ industries.',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'Next.js',
                              subtitle:
                                'Reach the software flexibility needed to scale by optimizing your architecture.',
                            }),
                            renderHeaderMenuBlockItem({
                              title: 'Express',
                              subtitle:
                                'Reach the software flexibility needed to scale by optimizing your architecture.',
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
]

export default navConfig
