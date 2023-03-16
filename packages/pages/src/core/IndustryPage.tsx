import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Industry } from '@onex/types'
import { renderHeroBlockItem } from '@onex/blocks'

export interface IndustryPageProps {
  industry: Industry
}

const IndustryPage: React.FC<IndustryPageProps> = (props) => {
  const { industry } = props
  const { title, subtitle } = industry || {}

  return (
    <Blocks
      items={[
        renderHeroBlockItem({ item: industry }),
        {
          key: 'benefits',
          sx: { backgroundColor: 'background.paper' },
          items: [
            {
              type: 'h4',
              title,
              titleProps: { gutterBottom: true },
            },
            {
              type: 'subtitle1',
              title: subtitle,
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
      ]}
    />
  )
}

export default IndustryPage
