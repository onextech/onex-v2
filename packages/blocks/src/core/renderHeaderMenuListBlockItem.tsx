import React from 'react'
import { BlockItemProps } from '@gravis-os/landing'

export interface RenderHeaderMenuListBlockItemProps {
  title: BlockItemProps['title']
  href?: string
  items?: Array<{
    title: BlockItemProps['title']
    href?: BlockItemProps['boxProps']['href']
  }>
}

const renderHeaderMenuListBlockItem = (
  props: RenderHeaderMenuListBlockItemProps
) => {
  const { title, href, items = [] } = props
  return {
    items: [
      {
        type: 'link',
        title,
        titleProps: {
          variant: 'h6' as const,
          href,
          sx: { mb: 1.5 },
          color: 'text.secondary',
        },
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
