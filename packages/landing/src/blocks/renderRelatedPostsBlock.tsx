import { Post } from '@onex/types'

import { BlockProps } from '../web/Block/Block'
import renderPostsBlockItem from './renderPostsBlockItem'

export interface RenderRelatedPostsBlockProps
  extends Omit<BlockProps, 'items'> {
  items?: Post[]
  subtitle?: BlockProps['title']
}

const renderRelatedPostsBlock = (props: RenderRelatedPostsBlockProps) => {
  const { title, items, subtitle, ...rest } = props
  if (!items?.length) return
  return {
    id: 'related-posts',
    items: [
      {
        title: title || 'Related Insights',
        titleProps: {
          maxWidth: 'md',
          sx: { mb: 1 },
        },
        type: 'h4',
      },
      subtitle && {
        title: subtitle,
        titleProps: {
          color: 'text.secondary',
          maxWidth: 'md',
          sx: { mb: { xs: 2, md: 3 } },
        },
        type: 'body1',
      },
      renderPostsBlockItem({ items }),
    ],
    ...rest,
  }
}

export default renderRelatedPostsBlock
