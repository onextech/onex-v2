import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { Blocks } from '@gravis-os/landing'
import { renderGhostButtonBlockItem } from '@onex/blocks'
import appConfig from '@app/configs/appConfig'

export interface HomePageProps {}

const commonBlockProps = { center: true, maxWidth: 'md' }

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <LandingLayout
      headerProps={{ translucent: true, position: 'fixed' }}
      seo={{ title: 'Company' }}
    >
      <Blocks
        items={[
          {
            dark: true,
            py: 30,
            key: 'growth-company',
            ...commonBlockProps,
            backgroundImageProps: {
              src: '/images/about_hero.png',
              alt: 'hero',
            },
            items: [
              { type: 'overline', title: 'Greetings' },
              {
                type: 'h2',
                title: (
                  <span>
                    We are {appConfig.title}, <br /> the Growth Company.
                  </span>
                ),
              },
              {
                type: 'stack',
                sx: { mt: 3 },
                stackProps: {
                  spacing: 0,
                  center: true,
                  direction: 'row',
                  reverseDirectionOnMobile: true,
                },
                stackItems: [
                  {
                    items: [
                      renderGhostButtonBlockItem({
                        overline: 'What we do',
                        title: 'Smarter Businesses',
                        size: 'lg',
                      }),
                    ],
                  },
                  {
                    items: [
                      renderGhostButtonBlockItem({
                        overline: 'Who we are',
                        title: 'Business Software Experts',
                        size: 'lg',
                      }),
                    ],
                  },
                ],
              },
            ],
          },
          {
            key: 'technology-is-the-superpower',
            ...commonBlockProps,
            sx: { backgroundColor: 'background.paper' },
            dark: true,
            pt: 5,
            pb: 10,
            items: [
              {
                type: 'h4',
                title:
                  'We believe technology is the superpower that changes everything about business.',
                titleProps: { gutterBottom: true },
              },
              {
                type: 'body1',
                title:
                  'One X Tech is a business technology partner, focused on building technological innovations for leading enterprises. We empower businesses with cutting-edge solutions by applying established and emerging technologies into their core business models.',
                titleProps: {
                  color: 'text.secondary',
                  maxWidth: true,
                },
              },
              renderGhostButtonBlockItem({
                overline: 'Who we are',
                title: 'Business Software Experts',
                boxProps: { mt: 4 },
              }),
            ],
          },
          {
            key: 'background-nodes',
            ...commonBlockProps,
            dark: true,
            pt: 45,
            pb: 0,
            backgroundImageProps: {
              src: '/images/about_nodes.png',
              alt: 'nodes',
            },
            items: [],
          },
          {
            key: 'awaken-digital-economy',
            ...commonBlockProps,
            dark: true,
            sx: { backgroundColor: 'background.paper' },
            pt: 12,
            pb: 26,
            backgroundImageProps: {
              src: '/images/about_man_with_laptop_in_city.png',
              alt: 'hero',
              fixedBackground: true,
              containerSx: { width: '100%', bottom: -8 },
            },
            items: [
              {
                type: 'h4',
                title:
                  'We are here to awaken the potential of a supercharged digital economy.',
                titleProps: { gutterBottom: true },
              },
              {
                type: 'h6',
                title:
                  'We deliver transformational outcomes for a demanding new digital world.',
                titleProps: {
                  color: 'text.secondary',
                  maxWidth: true,
                },
              },
              renderGhostButtonBlockItem({
                overline: 'Our Mission',
                title: 'Enabling Smarter Businesses',
                boxProps: { mt: 3 },
              }),
            ],
          },
          {
            key: 'we-transform-businesses',
            ...commonBlockProps,
            dark: true,
            backgroundImageProps: {
              src: '/images/about_binary.png',
              alt: 'about_binary',
              fixedBackground: true,
              containerSx: { width: '100%', top: 0 },
            },
            items: [
              { type: 'overline', title: 'What we do' },
              {
                type: 'h4',
                title: 'We Transform Businesses',
                titleProps: { gutterBottom: true },
              },
              {
                type: 'body1',
                title:
                  'We assist enterprise clients in their digital transformation by applying established and emerging technologies into their core business models.',
                titleProps: {
                  color: 'text.secondary',
                  maxWidth: true,
                },
              },
              {
                type: 'grid',
                sx: { mt: { xs: 5, md: 10 } },
                maxWidth: 'lg',
                gridProps: { spacing: 3 },
                gridItemProps: {
                  xs: 6,
                  md: 3,
                  sx: { textAlign: { xs: 'center', md: 'left' } },
                },
                gridItems: [
                  {
                    items: [
                      {
                        type: 'image',
                        title: '/images/about_shape_circle_radial.svg',
                        titleProps: {
                          alt: 'about_shape_circle_radial',
                          disableResponsive: true,
                          width: 101,
                          height: 101,
                          sx: { mb: 4 },
                        },
                      },
                      {
                        type: 'subtitle2',
                        title: '01',
                        titleProps: { color: 'text.secondary', sx: { mb: 3 } },
                      },
                      {
                        type: 'subtitle2',
                        title: 'Design a new product',
                        titleProps: { gutterBottom: true },
                      },
                      {
                        type: 'body1',
                        title:
                          'We create human-centred designs focused on driving conversions and achieving business goals.',
                        titleProps: { color: 'text.secondary' },
                      },
                    ],
                  },
                  {
                    items: [
                      {
                        type: 'image',
                        title: '/images/about_shape_squares.svg',
                        titleProps: {
                          alt: 'about_shape_squares',
                          disableResponsive: true,
                          width: 101,
                          height: 101,
                          sx: { mb: 4 },
                        },
                      },
                      {
                        type: 'subtitle2',
                        title: '02',
                        titleProps: { color: 'text.secondary', sx: { mb: 3 } },
                      },
                      {
                        type: 'subtitle2',
                        title: 'Launch a new company',
                        titleProps: { gutterBottom: true },
                      },
                      {
                        type: 'body1',
                        title:
                          'Launch your MVP at start-up speed with an expert team of designers and developers.',
                        titleProps: { color: 'text.secondary' },
                      },
                    ],
                  },
                  {
                    items: [
                      {
                        type: 'image',
                        title: '/images/about_shape_square_with_circle.svg',
                        titleProps: {
                          alt: 'about_shape_square_with_circle',
                          disableResponsive: true,
                          width: 101,
                          height: 101,
                          sx: { mb: 4 },
                        },
                      },
                      {
                        type: 'subtitle2',
                        title: '03',
                        titleProps: { color: 'text.secondary', sx: { mb: 3 } },
                      },
                      {
                        type: 'subtitle2',
                        title: 'Scale up development',
                        titleProps: { gutterBottom: true },
                      },
                      {
                        type: 'body1',
                        title:
                          'Our team works directly with you to boost your development speed and scale.',
                        titleProps: { color: 'text.secondary' },
                      },
                    ],
                  },
                  {
                    items: [
                      {
                        type: 'image',
                        title: '/images/about_shape_circles.svg',
                        titleProps: {
                          alt: 'about_shape_circles',
                          disableResponsive: true,
                          width: 101,
                          height: 101,
                          sx: { mb: 4 },
                        },
                      },
                      {
                        type: 'subtitle2',
                        title: '04',
                        titleProps: { color: 'text.secondary', sx: { mb: 3 } },
                      },
                      {
                        type: 'subtitle2',
                        title: 'Improve a current system',
                        titleProps: { gutterBottom: true },
                      },
                      {
                        type: 'body1',
                        title:
                          "Identify areas for automation and improve efficiency so you can spend more time on what's important.",
                        titleProps: { color: 'text.secondary' },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            key: 'we-design-develop',
            ...commonBlockProps,
            dark: true,
            pb: 46,
            backgroundImageProps: {
              src: '/images/about_nodes_above_city.png',
              alt: 'about_nodes_above_city',
            },
            items: [
              {
                type: 'h4',
                title: (
                  <span>
                    We Design & Develop <br /> Custom Software for Businesses
                  </span>
                ),
                titleProps: { gutterBottom: true },
              },
              {
                type: 'h6',
                title:
                  'Our team of consultants, designers and engineers live and breathe digital services to deliver best-in-class technological solutions.',
                titleProps: {
                  color: 'text.secondary',
                  maxWidth: true,
                },
              },
              renderGhostButtonBlockItem({
                overline: 'Our Mission',
                title: 'Enabling Smarter Businesses',
                boxProps: { mt: 3 },
              }),
            ],
          },
          {
            key: 'our-clients',
            ...commonBlockProps,
            dark: true,
            items: [
              { type: 'overline', title: 'Our Clients' },
              {
                type: 'h4',
                title: 'Our Clients',
                titleProps: { gutterBottom: true },
              },
              {
                type: 'body1',
                title:
                  'We assist enterprise clients in their digital transformation by applying established and emerging technologies into their core business models.',
                titleProps: {
                  color: 'text.secondary',
                  maxWidth: true,
                },
              },
              {
                type: 'grid',
                sx: { mt: { xs: 5, md: 10 } },
                maxWidth: 'lg',
                gridProps: { spacing: 1 },
                gridItemProps: { xs: 6, md: 4 },
                gridItems: [
                  {
                    items: [
                      {
                        type: 'image',
                        title: '/logos/logo_canon.png',
                        titleProps: {
                          alt: 'logo_canon',
                          disableResponsive: true,
                          width: 125,
                          height: 27,
                        },
                      },
                    ],
                  },
                  {
                    items: [
                      {
                        type: 'image',
                        title: '/logos/logo_ssa.png',
                        titleProps: {
                          alt: 'logo_ssa',
                          disableResponsive: true,
                          width: 130,
                          height: 30,
                        },
                      },
                    ],
                  },
                  {
                    items: [
                      {
                        type: 'image',
                        title: '/logos/logo_uob.png',
                        titleProps: {
                          alt: 'logo_uob',
                          disableResponsive: true,
                          width: 104,
                          height: 30,
                        },
                      },
                    ],
                  },
                  {
                    items: [
                      {
                        type: 'image',
                        title: '/logos/logo_julius_bar.png',
                        titleProps: {
                          alt: 'logo_julius_bar',
                          disableResponsive: true,
                          width: 144,
                          height: 28,
                        },
                      },
                    ],
                  },
                  {
                    items: [
                      {
                        type: 'image',
                        title: '/logos/logo_dxd.png',
                        titleProps: {
                          alt: 'logo_dxd',
                          disableResponsive: true,
                          width: 119,
                          height: 45,
                        },
                      },
                    ],
                  },
                  {
                    items: [
                      {
                        type: 'image',
                        title: '/logos/logo_mtj.png',
                        titleProps: {
                          alt: 'logo_mtj',
                          disableResponsive: true,
                          width: 155,
                          height: 30,
                        },
                      },
                    ],
                  },
                ].map((gridItem) => ({
                  ...gridItem,
                  boxProps: {
                    sx: {
                      backgroundColor: 'background.paper',
                      p: 3,
                      minHeight: { xs: 200, md: 260 },
                      lineHeight: 1,
                    },
                    center: true,
                  },
                })),
              },
            ],
          },
          {
            key: 'our-locations',
            ...commonBlockProps,
            dark: true,
            backgroundImageProps: {
              src: '/images/contact_world_map_in_dots.svg',
              alt: 'contact_world_map_in_dots',
              fixedBackground: true,
              containerSx: { bottom: 24 },
            },
            sx: { backgroundColor: 'background.paper' },
            items: [
              { type: 'overline', title: 'Our Locations' },
              {
                type: 'h4',
                title: 'Accelerating Asia',
                titleProps: { gutterBottom: true },
              },
              {
                type: 'body1',
                title:
                  'One X Tech is a global provider of business consulting services and IT solutions, enterprise application development and IT infrastructure services.',
                titleProps: {
                  color: 'text.secondary',
                  maxWidth: true,
                },
              },
              {
                type: 'grid',
                sx: { mt: 6 },
                maxWidth: 'sm',
                gridProps: { spacing: 2 },
                gridItemProps: { xs: 4 },
                gridItems: [
                  {
                    items: [
                      {
                        type: 'subtitle1',
                        title: '100+',
                      },
                      {
                        type: 'overline',
                        title: 'Projects',
                        titleProps: { color: 'text.secondary' },
                      },
                    ],
                  },
                  {
                    items: [
                      {
                        type: 'subtitle1',
                        title: '6+',
                      },
                      {
                        type: 'overline',
                        title: 'Years',
                        titleProps: { color: 'text.secondary' },
                      },
                    ],
                  },
                  {
                    items: [
                      {
                        type: 'subtitle1',
                        title: '∞',
                        titleProps: {
                          sx: {
                            '&&': { fontSize: 'h2.fontSize' },
                            width: '100%',
                            height: 24,
                            position: 'relative',
                            top: -8,
                            lineHeight: '1',
                          },
                        },
                      },
                      {
                        type: 'overline',
                        title: 'Possibilities',
                        titleProps: { color: 'text.secondary' },
                      },
                    ],
                  },
                ],
              },
              renderGhostButtonBlockItem({
                overline: 'Where we are',
                title: 'Locate an Office',
                boxProps: { mt: 16 },
              }),
            ],
          },
          {
            key: 'careers',
            ...commonBlockProps,
            sx: { backgroundColor: 'background.paper' },
            pt: 5,
            items: [
              {
                type: 'overline',
                title: 'Careers',
                titleProps: { color: 'text.secondary' },
              },
              {
                type: 'h3',
                title: (
                  <span>
                    Thinkers & Tinkerers <br /> Coming Together
                  </span>
                ),
              },
              {
                type: 'image',
                title: '/images/about_working_in_office.png',
                maxWidth: false,
                containerProps: { disableGutters: true },
                titleProps: {
                  alt: 'about_working_in_office',
                  fill: true,
                  sx: { my: 3 },
                },
              },
              {
                type: 'body1',
                title:
                  'We’ve assembled some of the brightest minds in business, technology and design. With our diversity of expertise, we’re able to deliver the highest quality software that our industry has seen.',
                titleProps: {
                  color: 'text.secondary',
                  maxWidth: true,
                },
              },
              renderGhostButtonBlockItem({
                overline: 'Careers',
                title: 'Explore Careers',
                boxProps: { mt: 3 },
              }),
            ],
          },
        ]}
      />
    </LandingLayout>
  )
}

export default HomePage
