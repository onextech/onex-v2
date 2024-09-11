import type { Post, PostCategory, Service } from '@onex/types'

import React from 'react'

import {
  Blocks,
  renderOtherPostsBlock,
  renderPostDetailBlock,
  renderPostHeroBlockItem,
  renderRelatedPostsBlock,
  renderRelatedServicesBlock,
} from '@onex/landing'

export interface PostPageProps {
  otherPosts: Post[]
  post: Post
  postCategory: PostCategory
  relatedPosts?: Post[]
  relatedServices?: Service[]
}

const PostPage: React.FC<PostPageProps> = (props) => {
  const { otherPosts, post, relatedPosts, relatedServices } = props

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
        renderOtherPostsBlock({ items: otherPosts, py: { xs: 5, md: 10 } }),
      ]}
    />
  )
}

export default PostPage
