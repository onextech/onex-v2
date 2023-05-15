import React from 'react'
import { Post } from '@onex/types'
import { useLayout } from '@onex/providers'
import renderPostBlockItem, {
  RenderPostBlockItemProps,
} from './renderPostBlockItem'

export interface RenderPostsBlockItemProps {
  items: Post[]
}

const renderPostsBlockItem = (props: RenderPostsBlockItemProps) => {
  const { items } = props
  const { routeConfig } = useLayout()
  return {
    type: 'grid',
    gridItems: items.sort((x, y) => Date.parse(y.published_at) - Date.parse(x.published_at)).map((item) => {
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
