import React, { useEffect, useState } from 'react'
import {
  Blocks,
  renderPostDetailBlock,
  renderPostHeroBlockItem,
  renderRelatedPostsBlock,
  renderRelatedServicesBlock,
  renderOtherPostsBlock,
} from '@gravis-os/landing'
import type { Post, PostCategory, Service } from '@gravis-os/types'
import { getNRandomPosts } from '../utils'

export interface PostPageProps {
  post: Post
  postCategory: PostCategory
  relatedPosts?: Post[]
  relatedServices?: Service[]
  otherPosts: Post[]
}

const NUMBER_OF_OTHER_POSTS = 3

const PostPage: React.FC<PostPageProps> = (props) => {
  const { post, relatedPosts, relatedServices, otherPosts } = props

  // randomising posts on every render leads to hydration errors, so we dont render anything on the first render
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, [])
  if (!hydrated) {
    return null
  }

  const randomPosts = getNRandomPosts(
    otherPosts.filter((value) => value.id !== post.id),
    NUMBER_OF_OTHER_POSTS
  )

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
        renderOtherPostsBlock({ items: randomPosts, py: { xs: 5, md: 10 } }),
      ]}
    />
  )
}

export default PostPage
