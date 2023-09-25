import React from 'react'

import {
  Blocks,
  LeadForm,
  renderContactLinksBlockItems,
  renderTestimonialBlockItem,
  useLayout,
} from '@gravis-os/landing'
import { Image } from '@gravis-os/ui'

export interface GetStartedPageProps {
  disableTestimonials?: boolean
  fullScreen?: boolean
}

const GetStartedPage: React.FC<GetStartedPageProps> = (props) => {
  const { disableTestimonials, fullScreen } = props

  const { clientTestimonials, logoProps, serviceCategorys } = useLayout()

  return (
    <Blocks
      items={[
        {
          id: 'form',
          items: [
            {
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
                    ...(logoProps
                      ? [
                          {
                            title: <Image {...logoProps} />,
                            boxProps: { sx: { mb: 5 } },
                            type: 'jsx',
                          },
                        ]
                      : []),
                    { title: 'Get Started', type: 'overline' },
                    {
                      title: 'Schedule A Call',
                      titleProps: { mb: 1 },
                      type: 'h2',
                    },
                    {
                      title:
                        'Thank you for your interest. So we can help serve you better, please complete the form below.',
                      titleProps: {
                        color: 'text.secondary',
                        maxWidth: true,
                        sx: { mb: 3 },
                      },
                      type: 'body1',
                    },
                    {
                      title: <LeadForm serviceCategorys={serviceCategorys} />,
                      type: 'jsx',
                    },
                  ],
                },
                {
                  md: 5,
                  lg: 4,
                  boxProps: {
                    reveal: true,
                    sx: {
                      backgroundColor: 'background.default',
                      height: { md: '100%' },
                      px: 5,
                      py: { xs: 5, md: 10 },
                      top: 0,
                      width: '100%',
                    },
                  },
                  items: [
                    ...(disableTestimonials
                      ? []
                      : renderTestimonialBlockItem({
                          item: clientTestimonials[0],
                        })),
                    ...renderContactLinksBlockItems(),
                  ],
                },
              ],
              gridProps: {
                spacing: { xs: 0, md: 5 },
                ...(fullScreen && { minWidth: '100%' }),
                px: 0,
              },
              type: 'grid',
            },
          ],
          py: 0,
          reveal: fullScreen && false,
          sx: {
            backgroundColor: 'background.paper',
            position: 'relative',
          },
        },
      ]}
    />
  )
}

export default GetStartedPage
