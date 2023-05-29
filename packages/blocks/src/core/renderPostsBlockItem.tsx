import React from 'react'
import { Post } from '@onex/types'
import { useLayout } from '@onex/providers'
import renderPostBlockItem, {
  RenderPostBlockItemProps,
} from './renderPostBlockItem'
import orderBy from 'lodash/orderBy'

export interface RenderPostsBlockItemProps {
  items: Post[]
  isFeatured?: boolean
}

const renderPostsBlockItem = (props: RenderPostsBlockItemProps) => {
  const { items, isFeatured } = props
  const { routeConfig } = useLayout()
  const limit = isFeatured ? 3 : items.length
  return {
    type: 'grid',
    gridItems: orderBy(items, 'published_at', 'desc').slice(0, limit).map((item) => {
      return renderPostBlockItem({
        item: {
          href: `${routeConfig.POSTS}/${item.category.slug}/${item.slug}`,
          ...(item as RenderPostBlockItemProps['item']),
        },
      })
    }),
  }
}

export default renderPostsBlockItem
