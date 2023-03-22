import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Post, PostCategory, Service } from '@onex/types'
import {
  renderPostHeroBlockItem,
  renderRelatedPostsBlock,
  renderRelatedServicesBlock,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface PostPageProps {
  post: Post
  postCategory: PostCategory
  relatedPosts?: Post[]
  relatedServices?: Service[]
}

const PostPage: React.FC<PostPageProps> = (props) => {
  const { post, postCategory, relatedPosts, relatedServices } = props
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
        renderRelatedServicesBlock({
          items: relatedServices,
          py: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
        }),
        renderRelatedPostsBlock({ items: relatedPosts, py: { xs: 5, md: 10 } }),
      ]}
    />
  )
}

export default PostPage
