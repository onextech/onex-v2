import React from 'react'
import { BlockItemProps } from '@gravis-os/landing'

export interface RenderHeaderMenuBlockItemProps {
  title: BlockItemProps['title']
  subtitle?: BlockItemProps['title']
  href?: BlockItemProps['boxProps']['href']
  items?: BlockItemProps[]
}

const renderHeaderMenuBlockItem = (props: RenderHeaderMenuBlockItemProps) => {
  const { href = '/', title, subtitle, items = [] } = props
  return {
    boxProps: {
      href,
      sx: {
        py: 1.5,
        px: 2,
        borderRadius: 1,
        ...(href && {
          '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'action.hover',
          },
          '&:active': {
            backgroundColor: 'action.selected',
          },
        }),
      },
    },
    items: [
      {
        type: 'h6',
        title,
        titleProps: {
          mb: 0.5,
          ...(!href && { sx: { color: 'text.disabled' } }),
        },
      },
      {
        type: 'caption',
        title: subtitle,
        titleProps: {
          color: 'text.secondary',
          maxLines: 2,
          ...(!href && { sx: { color: 'text.disabled' } }),
        },
      },
      ...items,
    ],
  }
}

export default renderHeaderMenuBlockItem
