import type { Post, PostCategory } from '@gravis-os/types'

import React from 'react'

import { Blocks, renderPostsBlockItem } from '@gravis-os/landing'

export interface PostCategoryPageProps {
  postCategory: PostCategory
  posts: Post[]
}

const PostCategoryPage: React.FC<PostCategoryPageProps> = (props) => {
  const { postCategory, posts } = props

  if (!postCategory) return null

  const { title, subtitle } = postCategory

  return (
    <Blocks
      items={[
        {
          id: 'hero',
          items: [
            {
              title,
              type: 'h1',
            },
            {
              title: subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
                sx: { mt: 2 },
              },
              type: 'subtitle1',
            },
          ],
          pb: 0,
          pt: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
        },
        {
          id: 'post-categorys',
          items: [renderPostsBlockItem({ items: posts })],
          pt: { xs: 2, md: 5 },
          sx: { backgroundColor: 'background.paper' },
        },
      ]}
    />
  )
}

export default PostCategoryPage
