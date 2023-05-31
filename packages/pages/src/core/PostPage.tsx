import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Post, PostCategory, Service } from '@onex/types'
import {
  renderPostDetailBlock,
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
  const { routeConfig } = useLayout()

  return (
    <Blocks
      items={[
        renderPostHeroBlockItem({
          item: post,
        }),
        renderPostDetailBlock({ item: post, pt: { xs: 3, md: 6 } }),
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
