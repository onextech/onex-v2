import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Post, PostCategory } from '@onex/types'
import { renderPostsBlockItem } from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface PostCategoryPageProps {
  posts: Post[]
  postCategory: PostCategory
}

const PostCategoryPage: React.FC<PostCategoryPageProps> = (props) => {
  const { posts, postCategory } = props

  if (!postCategory) return null

  const { title, subtitle } = postCategory

  return (
    <Blocks
      items={[
        {
          key: 'hero',
          pt: { xs: 5, md: 10 },
          pb: 0,
          sx: { backgroundColor: 'background.paper' },
          items: [
            {
              type: 'h1',
              title,
            },
            {
              type: 'subtitle1',
              title: subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
                sx: { mt: 2 },
              },
            },
          ],
        },
        {
          key: 'post-categorys',
          sx: { backgroundColor: 'background.paper' },
          pt: { xs: 2, md: 5 },
          items: [renderPostsBlockItem({ items: posts })],
        },
      ]}
    />
  )
}

export default PostCategoryPage
