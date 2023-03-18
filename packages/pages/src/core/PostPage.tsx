import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Post, PostCategory } from '@onex/types'
import { renderPostHeroBlockItem } from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface PostPageProps {
  post: Post
  postCategory: PostCategory
}

const PostPage: React.FC<PostPageProps> = (props) => {
  const { post, postCategory } = props
  const { html } = post || {}

  const { routeConfig } = useLayout()

  return (
    <Blocks
      items={[
        renderPostHeroBlockItem({
          item: post,
          overline: postCategory.title,
          overlineProps: { href: `${routeConfig.POSTS}/${postCategory?.slug}` },
        }),
        {
          key: 'html',
          pt: 3,
          sx: { backgroundColor: 'background.paper' },
          items: [
            {
              type: 'html',
              title: html,
              titleProps: {
                sx: {
                  '& p': { mb: 3 },
                  fontSize: {
                    xs: 'subtitle2.fontSize',
                    md: 'subtitle1.fontSize',
                  },
                },
              },
            },
          ],
        },
      ]}
    />
  )
}

export default PostPage
