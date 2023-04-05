import React from 'react'
import { ImageMarquee, Stack } from '@gravis-os/ui'
import { BlockProps } from '@gravis-os/landing'
import { ClientHighlight } from '@onex/types'

function splitArrayIntoTwo<T>(arr: T[]): [T[], T[]] | [] {
  if (!Array.isArray(arr)) return []
  const arrayLength = arr.length
  const halfLength = Math.ceil(arrayLength / 2)
  const firstArray = arr.slice(0, halfLength)
  const secondArray = arr.slice(halfLength)
  return [firstArray, secondArray]
}

export interface RenderClientHighlightsImageMarqueeBlockProps
  extends Omit<BlockProps, 'items'> {
  items?: ClientHighlight[]
}

const renderClientHighlightsImageMarqueeBlock = (
  props: RenderClientHighlightsImageMarqueeBlockProps
) => {
  const { items, ...rest } = props

  const [firstRowItems, secondRowItems] =
    splitArrayIntoTwo<ClientHighlight>(items)

  return {
    py: 2,
    disableContainer: true,
    dark: true,
    items: [
      {
        type: 'jsx',
        title: (
          <Stack spacing={2}>
            <ImageMarquee
              gradient
              imageProps={{ rounded: true }}
              items={firstRowItems?.map((firstRowItem, i) => ({
                ...firstRowItem,
                key: i,
              }))}
            />
            <ImageMarquee
              reverse
              gradient
              imageProps={{ rounded: true }}
              items={secondRowItems?.map((secondRowItem, i) => ({
                ...secondRowItem,
                key: i,
              }))}
            />
          </Stack>
        ),
      },
    ],
    ...rest,
  }
}

export default renderClientHighlightsImageMarqueeBlock
