import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { Blocks } from '@gravis-os/landing'
import {
  renderPortfolioCardBlockItem,
  renderPortfolioStickyGridBlockItem,
} from '@onex/blocks'

export interface PortfolioDetailPageProps {}

const PortfolioDetailPage: React.FC<PortfolioDetailPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Portfolio' }}>
      <Blocks
        items={[
          {
            key: 'portfolio-hero',
            maxWidth: 'xl',
            sx: { pt: { xs: 3, md: 6 } },
            pb: 0,
            items: [
              { type: 'overline', title: 'Portfolio' },
              {
                type: 'h1',
                title: 'Canon.',
                titleProps: { mb: 2, maxWidth: true },
              },
              {
                type: 'subtitle1',
                title:
                  'We assist enterprise clients in their digital transformation by applying established and emerging technologies into their core business models.',
                titleProps: {
                  color: 'text.secondary',
                  maxWidth: '60%',
                },
              },
            ],
          },
          {
            key: 'portfolio-card-list',
            maxWidth: 'xl',
            pt: 0,
            pb: 0,
            items: [
              renderPortfolioCardBlockItem({
                backgroundColor: '#c53333',
                mode: 'dark',
                title: 'Preparing the future of home-made meals with Canon.',
                subtitle:
                  'Promoting science by building the largest online conference platform.',
                imageSrc: '/images/portfolio_cover_1.png',
              }),
            ],
          },
          {
            key: 'portfolio-sticky-grid-left',
            pt: 10,
            items: [
              renderPortfolioStickyGridBlockItem({
                reverse: true,
                title: 'Preparing the future of home-made meals with Canon.',
                subtitle:
                  'Promoting science by building the largest online conference platform.',
                imageSrc: '/images/portfolio_detail_sticky_1.jpg',
              }),
            ],
          },
          {
            key: 'portfolio-grid',
            py: 5,
            items: [
              { type: 'overline', title: 'What we do' },
              {
                type: 'h4',
                title: 'We Transform Businesses',
                titleProps: { gutterBottom: true },
              },
              {
                type: 'subtitle1',
                title:
                  'We assist enterprise clients in their digital transformation by applying established and emerging technologies into their core business models.',
                titleProps: {
                  color: 'text.secondary',
                  maxWidth: '50%',
                },
              },
              {
                type: 'grid',
                sx: { mt: { xs: 4, md: 8 } },
                gridProps: { spacing: 6 },
                gridItemProps: {
                  xs: 12,
                  md: 6,
                  sx: { textAlign: { xs: 'center', md: 'left' } },
                },
                gridItems: [
                  {
                    items: [
                      {
                        type: 'image',
                        title: '/images/portfolio_detail_gallery_2.png',
                        titleProps: {
                          alt: 'portfolio_detail_gallery_2',
                          fill: true,
                          zoom: true,
                        },
                      },
                    ],
                  },
                  {
                    items: [
                      {
                        type: 'image',
                        title: '/images/portfolio_detail_gallery_1.png',
                        titleProps: {
                          alt: 'portfolio_detail_gallery_1',
                          fill: true,
                          zoom: true,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            key: 'portfolio-sticky-grid-right',
            items: [
              renderPortfolioStickyGridBlockItem({
                title: 'Preparing the future of home-made meals with Canon.',
                subtitle:
                  'Promoting science by building the largest online conference platform.',
                imageSrc: '/images/portfolio_detail_sticky_2.png',
              }),
            ],
          },
          {
            key: 'portfolio-grid',
            sx: { backgroundColor: 'background.paper' },
            items: [
              { type: 'overline', title: 'What we do' },
              {
                type: 'h4',
                title: 'We Transform Businesses',
                titleProps: { gutterBottom: true },
              },
              {
                type: 'subtitle1',
                title:
                  'We assist enterprise clients in their digital transformation by applying established and emerging technologies into their core business models.',
                titleProps: {
                  color: 'text.secondary',
                  maxWidth: true,
                },
              },
              {
                type: 'grid',
                sx: { mt: { xs: 4, md: 8 } },
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
            key: 'faqs',
            pt: 0,
            sx: { backgroundColor: 'background.paper' },
            items: [
              {
                type: 'grid',
                gridItems: [
                  {
                    md: 4,
                    items: [
                      {
                        type: 'h4',
                        title: 'FAQs',
                        titleProps: { gutterBottom: true },
                      },
                      {
                        type: 'body1',
                        title:
                          'One X Tech delivers effective, value-driven technological innovations for leading enterprises.',
                        titleProps: { color: 'text.secondary' },
                      },
                    ],
                  },
                  {
                    md: 8,
                    items: [
                      {
                        type: 'accordion',
                        titleProps: {
                          titleProps: { variant: 'h6' },
                          subtitleProps: { color: 'text.secondary' },
                        },
                        title: [
                          {
                            key: 'faq-1',
                            title:
                              'What are the advantages of developing web apps with ReactJS?',
                            content:
                              'ReactJS components allows to really embrace agile approach to ever-changing business requirements. It takes care of the inner workings of updating the browser and allows us to focus on developing the application’s features.',
                          },
                          {
                            key: 'faq-2',
                            title:
                              'How can ReactJS development benefit my existing system?',
                            content:
                              "ReactJS's sophisticated algorithms will help to boost system performance and improve user experience.",
                          },
                          {
                            key: 'faq-3',
                            title: 'What is the future of React?',
                            content:
                              'ReactJS is the fastest growing library used to create user interface in modern single-page applications. It is the driving force behind products of the most successful companies like Airbnb, Instagram and Netflix.',
                          },
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
    </LandingLayout>
  )
}

export default PortfolioDetailPage
