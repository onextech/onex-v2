import type { Post } from '@onex/types'

import React from 'react'

import {
  Blocks,
  RenderPostBlockItemProps,
  renderPostBlockItem,
  useLayout,
} from '@onex/landing'
import orderBy from 'lodash/orderBy'

export interface PostsPageProps {
  posts: Post[]
}

const PostsPage: React.FC<PostsPageProps> = (props) => {
  const { posts } = props
  const { routeConfig } = useLayout()

  return (
    <Blocks
      items={[
        {
          id: 'hero',
          items: [
            { title: 'Insights', type: 'overline' },
            {
              title: 'Insights',
              type: 'h1',
            },
            {
              title:
                'Meet the moment with our posts and capabilities that help you define your vision for the future and make it happen.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
                sx: { mt: 2 },
              },
              type: 'subtitle1',
            },
            {
              title: '/images/about_working_in_office.png',
              disableContainer: true,
              titleProps: {
                alt: 'People working in office',
                background: true,
                backgroundHeight: { xs: 320, md: 450 },
                backgroundSx: { mt: 5 },
              },
              type: 'image',
            },
            {
              title:
                'We leverage deep insights and global expertise to achieve outcomes that are most important to you. As your trusted advisor, we bring the full depth and breadth of our firm to focus on your unique needs and challenges.',
              titleProps: { maxWidth: true, sx: { mt: { xs: 5, md: 10 } } },
              type: 'h4',
            },
          ],
          pb: 0,
          pt: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
        },
        {
          id: 'posts',
          items: [
            {
              gridItems: orderBy(posts, 'published_at', 'desc').map((post) =>
                renderPostBlockItem({
                  item: {
                    ...post,
                    href: `${routeConfig.POSTS}/${post.slug}`,
                  } as RenderPostBlockItemProps['item'],
                })
              ),
              gridProps: { rowSpacing: 8, spacing: 5 },
              type: 'grid',
            },
          ],
          sx: { backgroundColor: 'background.paper' },
        },
      ]}
    />
  )
}

export default PostsPage
