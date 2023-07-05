import React, { useState, useEffect } from 'react'
import {
  Blocks,
  renderPostDetailBlock,
  renderPostHeroBlockItem,
  renderRelatedPostsBlock,
  renderRelatedServicesBlock,
  renderOtherPostsBlock,
} from '@gravis-os/landing'
import type { Post, PostCategory, Service } from '@gravis-os/types'
import isNil from 'lodash/isNil'
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

  const [randomPosts, setRandomPosts] = useState<Post[]>([])

  useEffect(() => {
    if (isNil(otherPosts)) return
    setRandomPosts(
      getNRandomPosts(
        otherPosts.filter((value) => value.id !== post.id),
        NUMBER_OF_OTHER_POSTS
      )
    )
  }, [otherPosts])

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
