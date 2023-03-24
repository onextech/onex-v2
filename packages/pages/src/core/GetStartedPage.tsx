import React from 'react'
import { Blocks } from '@gravis-os/landing'
import { GetStartedForm } from '@onex/components'
import { useLayout } from '@onex/providers'
import {
  renderContactLinksBlockItems,
  renderTestimonialBlockItem,
} from '@onex/blocks'

export interface GetStartedPageProps {
  fullScreen?: boolean
}

const GetStartedPage: React.FC<GetStartedPageProps> = (props) => {
  const { fullScreen } = props

  const {
    logo: Logo,
    testimonials,
    routeConfig,
    serviceCategorys,
  } = useLayout()

  return (
    <Blocks
      items={[
        {
          key: 'form',
          py: 0,
          reveal: fullScreen && false,
          sx: {
            position: 'relative',
            backgroundColor: 'background.paper',
          },
          items: [
            {
              type: 'grid',
              boxProps: {
                sx: { backgroundColor: 'background.paper' },
              },
              gridProps: { spacing: { xs: 0, md: 5 } },
              gridItems: [
                {
                  md: 7,
                  lg: 8,
                  boxProps: {
                    sx: {
                      py: { xs: 5, md: 10 },
                      ...(fullScreen && { minHeight: { md: '100vh' } }),
                    },
                  },
                  items: [
                    ...(Logo
                      ? [
                          {
                            type: 'jsx',
                            title: <Logo href={routeConfig.HOME} />,
                            boxProps: { sx: { mb: 5 } },
                          },
                        ]
                      : []),
                    { type: 'overline', title: 'Get Started' },
                    {
                      type: 'h2',
                      title: 'Get Started',
                      titleProps: { mb: 1 },
                    },
                    {
                      type: 'body1',
                      title:
                        'Thank you for your interest. So we can help serve you better, please complete the form below.',
                      titleProps: {
                        color: 'text.secondary',
                        maxWidth: true,
                        sx: { mb: 3 },
                      },
                    },
                    {
                      type: 'jsx',
                      title: (
                        <GetStartedForm serviceCategorys={serviceCategorys} />
                      ),
                    },
                  ],
                },
                {
                  md: 5,
                  lg: 4,
                  boxProps: {
                    reveal: true,
                    sx: {
                      height: { md: '100%' },
                      backgroundColor: 'background.default',
                      top: 0,
                      px: 5,
                      py: { xs: 5, md: 10 },
                      position: { md: 'absolute' },
                    },
                  },
                  items: [
                    ...renderTestimonialBlockItem({
                      item: testimonials[0],
                    }),
                    ...renderContactLinksBlockItems(),
                  ],
                },
              ],
            },
          ],
        },
      ]}
    />
  )
}

export default GetStartedPage
