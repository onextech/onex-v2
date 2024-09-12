import type { Post, PostCategory } from '@onex/types'

import React from 'react'

import {
  Blocks,
  RenderPostCategoryBlockItemProps,
  renderPostCategoryBlockItem,
  useLayout,
} from '@onex/landing'
import { getCategoryWithItemsAndHref } from '@onex/utils'
import chunk from 'lodash/chunk'

export interface PostCategorysPageProps {
  postCategorys: PostCategory[]
  posts: Post[]
}

const PostCategorysPage: React.FC<PostCategorysPageProps> = (props) => {
  const { postCategorys, posts } = props

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
          id: 'hero',
          items: [
            { title: 'Insights', type: 'overline' },
            {
              title: 'Our Insights.',
              type: 'h1',
            },
            {
              title:
                'Gleam into key insights that empower enterprises with knowledge to enhance digital strategies.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
                sx: { mt: 2 },
              },
              type: 'subtitle1',
            },
          ],
          py: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
        },
        ...categoryWithPostsChunks.flatMap((categoryWithPostsChunk) => {
          const firstCategoryWithPosts: PostCategory = categoryWithPostsChunk[0]
          return [
            {
              id: 'background-nodes',
              backgroundImageProps: {
                alt: firstCategoryWithPosts.hero_alt,
                backgroundHeight: { xs: 240, md: 320 },
                src: firstCategoryWithPosts.hero_src,
              },
              py: 0,
            },
            {
              id: 'post-categorys',
              items: [
                {
                  gridItems: categoryWithPostsChunk.map((categoryWithPost) =>
                    renderPostCategoryBlockItem({
                      item: categoryWithPost as RenderPostCategoryBlockItemProps['item'],
                    })
                  ),
                  type: 'grid',
                },
              ],
              pt: { xs: 5, md: 10 },
              sx: { backgroundColor: 'background.paper' },
            },
          ]
        }),
      ]}
    />
  )
}

export default PostCategorysPage
