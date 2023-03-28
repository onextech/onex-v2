import React from 'react'
import { Blocks } from '@gravis-os/landing'
import { getCategoryWithItemsAndHref } from '@gravis-os/utils'
import type { Post, PostCategory } from '@onex/types'
import { useLayout } from '@onex/providers'
import {
  renderPostCategoryBlockItem,
  RenderPostCategoryBlockItemProps,
} from '@onex/blocks'
import chunk from 'lodash/chunk'

export interface PostCategorysPageProps {
  posts: Post[]
  postCategorys: PostCategory[]
}

const PostCategorysPage: React.FC<PostCategorysPageProps> = (props) => {
  const { posts, postCategorys } = props

  const { routeConfig } = useLayout()

  const categoryWithPosts = getCategoryWithItemsAndHref<Post, PostCategory>(
    posts,
    postCategorys,
    routeConfig.POSTS
  )

  const categoryWithPostsChunks = chunk(categoryWithPosts, 2)

  return (
    <Blocks
      items={[
        {
          key: 'hero',
          py: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
          items: [
            { type: 'overline', title: 'Insights' },
            {
              type: 'h1',
              title: 'Our Insights.',
            },
            {
              type: 'subtitle1',
              title:
                'Meet the moment with our posts and capabilities that help you define your vision for the future and make it happen.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
                sx: { mt: 2 },
              },
            },
          ],
        },
        ...categoryWithPostsChunks
          .map((categoryWithPostsChunk) => {
            const firstCategoryWithPosts = categoryWithPostsChunk[0]
            return [
              {
                key: 'background-nodes',
                py: 0,
                backgroundImageProps: {
                  src: firstCategoryWithPosts.hero_src,
                  alt: firstCategoryWithPosts.hero_alt,
                  backgroundHeight: { xs: 240, md: 320 },
                },
              },
              {
                key: 'post-categorys',
                sx: { backgroundColor: 'background.paper' },
                pt: { xs: 5, md: 10 },
                items: [
                  {
                    type: 'grid',
                    gridItems: categoryWithPostsChunk.map((categoryWithPost) =>
                      renderPostCategoryBlockItem({
                        item: categoryWithPost as RenderPostCategoryBlockItemProps['item'],
                      })
                    ),
                  },
                ],
              },
            ]
          })
          .flat(),
      ]}
    />
  )
}

export default PostCategorysPage
