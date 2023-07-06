import React from 'react'
import {
  Blocks,
  renderPostDetailBlock,
  renderPostHeroBlockItem,
  renderRelatedPostsBlock,
  renderRelatedServicesBlock,
  renderOtherPostsBlock,
} from '@gravis-os/landing'
import type { Post, PostCategory, Service } from '@gravis-os/types'

export interface PostPageProps {
  post: Post
  postCategory: PostCategory
  relatedPosts?: Post[]
  relatedServices?: Service[]
  otherPosts: Post[]
}

const PostPage: React.FC<PostPageProps> = (props) => {
  const { post, relatedPosts, relatedServices, otherPosts } = props

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
