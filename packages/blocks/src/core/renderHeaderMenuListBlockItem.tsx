import React from 'react'
import { BlockItemProps } from '@gravis-os/landing'

export interface RenderHeaderMenuListBlockItemProps {
  title: BlockItemProps['title']
  items?: Array<{
    title: BlockItemProps['title']
    href?: BlockItemProps['boxProps']['href']
  }>
}

const renderHeaderMenuListBlockItem = (
  props: RenderHeaderMenuListBlockItemProps
) => {
  const { title, items = [] } = props
  return {
    items: [
      {
        type: 'h6',
        title,
        titleProps: { sx: { mb: 1.5 }, color: 'text.secondary' },
      },
      ...(items.map((item) => ({
        type: 'link',
        title: item.title,
        titleProps: {
          href: item.href,
          variant: 'body1',
          gutterBottom: true,
        },
        ...item,
      })) as BlockItemProps[]),
    ],
  }
}

export default renderHeaderMenuListBlockItem
