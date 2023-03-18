import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Post, PostCategory } from '@onex/types'
import {
  renderPostBlockItem,
  RenderPostBlockItemProps,
  renderPostHeroBlockItem,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface PostPageProps {
  post: Post
  postCategory: PostCategory
  relatedPosts?: Post[]
}

const PostPage: React.FC<PostPageProps> = (props) => {
  const { post, postCategory, relatedPosts } = props
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
        {
          key: 'related-by-category',
          py: { xs: 5, md: 10 },
          items: [
            {
              type: 'h4',
              title: 'Related Insights',
              titleProps: { sx: { mb: { xs: 3, md: 5 } } },
            },
            {
              type: 'grid',
              gridItems: relatedPosts?.map((relatedPost) =>
                renderPostBlockItem({
                  item: {
                    href: `${routeConfig.POSTS}/${postCategory.slug}/${relatedPost.slug}`,
                    ...(relatedPost as RenderPostBlockItemProps['item']),
                  },
                })
              ),
            },
          ],
        },
      ]}
    />
  )
}

export default PostPage
