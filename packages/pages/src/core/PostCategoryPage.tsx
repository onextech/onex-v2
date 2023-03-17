import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Post, PostCategory } from '@onex/types'
import { renderPostBlockItem, RenderPostBlockItemProps } from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface PostCategoryPageProps {
  posts: Post[]
  postCategory: PostCategory
}

const PostCategoryPage: React.FC<PostCategoryPageProps> = (props) => {
  const { posts, postCategory } = props
  const { routeConfig } = useLayout()

  if (!postCategory) return null

  const { title, subtitle } = postCategory

  return (
    <Blocks
      items={[
        {
          key: 'hero',
          py: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
          items: [
            { type: 'overline', title: 'Post Category' },
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
          pt: { xs: 5, md: 10 },
          items: [
            {
              type: 'grid',
              gridItems: posts.map((post) =>
                renderPostBlockItem({
                  item: {
                    href: `${routeConfig.POSTS}/${postCategory.slug}/${post.slug}`,
                    ...(post as RenderPostBlockItemProps['item']),
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

export default PostCategoryPage
