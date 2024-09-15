import React from 'react'

import { Showcase } from '@onex/types'
import { Box, Slider } from '@onex/ui'

import Block, { BlockProps } from '../web/Block/Block'
import renderShowcaseCardBlockItem from './renderShowcaseCardBlockItem'

export interface RenderShowcaseSliderProps
  extends Omit<BlockProps, 'items' | 'title'> {
  items: Showcase[]
  overline?: React.ReactNode
  subtitle?: React.ReactNode
  title?: React.ReactNode
}

const renderShowcaseSlider = (props: RenderShowcaseSliderProps) => {
  const { title, items, overline, subtitle, ...rest } = props

  return {
    id: 'showcase-slider',
    items: [
      overline && {
        title: overline,
        type: 'overline',
      },
      title && {
        title,
        titleProps: { gutterBottom: true, maxWidth: '50%' },
        type: 'h3',
      },
      subtitle && {
        title: subtitle,
        titleProps: {
          color: 'text.secondary',
          maxWidth: '40%',
        },
        type: 'body1',
      },
      {
        title: (
          <Slider
            arrows
            autoplay
            dotProps={{ color: 'secondary.main' }}
            height={{ md: 600 }}
            items={items.map((item) => {
              return (
                <Box key={item.id} sx={{ width: '100%' }}>
                  <Block
                    py={0}
                    items={[
                      renderShowcaseCardBlockItem({
                        disableContainer: true,
                        item,
                        sx: { mt: 0 },
                      }),
                    ]}
                  />
                </Box>
              )
            })}
            loop
            options={{ slides: { perView: 1, spacing: 12 } }}
          />
        ),
        type: 'jsx',
      },
    ],
    maxWidth: 'xl',
    ...rest,
  }
}

export default renderShowcaseSlider
