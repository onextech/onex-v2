import React from 'react'

import { ClientHighlight } from '@onex/types'
import { ImageMarquee, Stack } from '@onex/ui'
import { getSplitArrayIntoTwo } from '@onex/utils'

import { BlockProps } from '../web/Block/Block'

export interface RenderClientHighlightsImageMarqueeBlockProps
  extends Omit<BlockProps, 'items'> {
  items?: ClientHighlight[]
}

const renderClientHighlightsImageMarqueeBlock = (
  props: RenderClientHighlightsImageMarqueeBlockProps
) => {
  const { items, ...rest } = props

  const [firstRowItems, secondRowItems] =
    getSplitArrayIntoTwo<ClientHighlight>(items)

  return {
    dark: true,
    disableContainer: true,
    items: [
      {
        title: (
          <Stack spacing={2}>
            <ImageMarquee
              imageProps={{ rounded: true }}
              items={firstRowItems?.map(({ alt, src }) => ({
                alt,
                src,
              }))}
            />
            <ImageMarquee
              imageProps={{ rounded: true }}
              items={secondRowItems?.map(({ alt, src }) => ({
                alt,
                src,
              }))}
              reverse
            />
          </Stack>
        ),
        type: 'jsx',
      },
    ],
    py: 2,
    ...rest,
  }
}

export default renderClientHighlightsImageMarqueeBlock
