import React from 'react'
import { Blocks } from '@gravis-os/landing'
import { LeadForm } from '@onex/components'
import { useLayout } from '@onex/providers'
import {
  renderContactLinksBlockItems,
  renderTestimonialBlockItem,
} from '@onex/blocks'
import { Image } from '@gravis-os/ui'

export interface GetStartedPageProps {
  fullScreen?: boolean
  disableTestimonials?: boolean
}

const GetStartedPage: React.FC<GetStartedPageProps> = (props) => {
  const { fullScreen, disableTestimonials } = props

  const { logoProps, clientTestimonials, serviceCategorys } = useLayout()

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
              gridProps: { spacing: { xs: 0, md: 5, }, },
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
                            type: 'jsx',
                            title: <Image {...logoProps} />,
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
                      title: <LeadForm serviceCategorys={serviceCategorys} />,
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
                    ...(disableTestimonials ? [] : renderTestimonialBlockItem({
                      item: clientTestimonials[0],
                    })),
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
