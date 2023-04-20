import React from 'react'
import { Post } from '@onex/types'
import { BlockProps } from '@gravis-os/landing'
import { renderPostsBlockItem } from './index'

export interface RenderFeaturedPostsBlockProps
  extends Omit<BlockProps, 'items'> {
  items?: Post[]
}

const renderFeaturedPostsBlock = (props: RenderFeaturedPostsBlockProps) => {
  const { items, ...rest } = props
  if (!items?.length) return
  return {
    key: 'featured-posts',
    items: [
      {
        type: 'h4',
        title: 'Featured Insights',
        titleProps: { sx: { mb: { xs: 3, md: 5 } } },
      },
      renderPostsBlockItem({ items }),
    ],
    ...rest,
  }
}

export default renderFeaturedPostsBlock
