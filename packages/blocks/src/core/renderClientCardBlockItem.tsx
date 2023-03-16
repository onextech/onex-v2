import React from 'react'
import { BlockItemProps } from '@gravis-os/landing'

export interface RenderClientCardBlockItemProps {
  title: BlockItemProps['title']
  titleProps?: BlockItemProps['titleProps']
}

const renderClientCardBlockItem = (props: RenderClientCardBlockItemProps) => {
  const { title, titleProps } = props

  return {
    items: [
      {
        type: 'image',
        title,
        titleProps,
      },
    ],
    boxProps: {
      sx: {
        backgroundColor: 'background.paper',
        p: 3,
        minHeight: { xs: 200, md: 260 },
        lineHeight: 1,
      },
      center: true,
    },
  }
}

export default renderClientCardBlockItem
