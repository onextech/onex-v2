import React from 'react'
import { BlockProps } from '@gravis-os/landing'

export interface RenderParagraphBlockItemProps
  extends Omit<BlockProps, 'items'> {
  title: string
  items?: string[]
}

const renderParagraphBlockItem = (props: RenderParagraphBlockItemProps) => {
  const { title, items, ...rest } = props
  return {
    key: 'paragraph',
    ...rest,
    items: [
      {
        type: 'h4',
        title,
        titleProps: { sx: { mb: 4 } },
      },
      ...items.map((item) => ({
        type: 'subtitle3',
        title: item,
        titleProps: { sx: { mb: 3 }, maxWidth: true },
      })),
    ],
  }
}

export default renderParagraphBlockItem
