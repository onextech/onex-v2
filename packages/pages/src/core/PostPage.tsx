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
  const {
    html,
    author_avatar_src,
    author_avatar_alt,
    author_title,
    author_job_title,
  } = post || {}

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
          key: 'content',
          pt: { xs: 3, md: 6 },
          sx: { backgroundColor: 'background.paper' },
          items: [
            {
              type: 'grid',
              gridItems: [
                {
                  md: 3,
                  lg: 2,
                  items: [
                    {
                      type: 'image',
                      title: author_avatar_src,
                      titleProps: {
                        alt: author_avatar_alt,
                        width: 40,
                        height: 40,
                      },
                    },
                    { type: 'subtitle3', title: author_title },
                    { type: 'body1', title: author_job_title },
                  ],
                },
                {
                  items: [
                    {
                      type: 'html',
                      title: html,
                      titleProps: {
                        sx: {
                          '& h1, & h2, & h3, & h4, & h5, & h6': {
                            mt: 0,
                          },
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
              ],
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
