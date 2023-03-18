import React from 'react'
import { getCategoryFromCrudItem } from '@gravis-os/utils'
import LandingLayout from '@app/layouts/LandingLayout'
import { PostPage } from '@onex/pages'
import { useRouter } from 'next/router'
import {
  MOCK_GROUP_POSTS,
  MOCK_TECH_POST_CATEGORYS,
  MOCK_TECH_POSTS,
} from '@onex/mocks'

export interface NextPostPageProps {}

const NextPostPage: React.FC<NextPostPageProps> = () => {
  const { query } = useRouter()
  const post = MOCK_TECH_POSTS.find(({ slug }) => slug === query.slug)
  const postCategory = getCategoryFromCrudItem(post, MOCK_TECH_POST_CATEGORYS)
  const relatedPosts = MOCK_GROUP_POSTS.filter(
    ({ category_id }) => category_id === post?.category_id
  )

  return (
    <LandingLayout seo={{ title: 'Post' }} autoBreadcrumbs>
      <PostPage
        post={post}
        postCategory={postCategory}
        relatedPosts={relatedPosts}
      />
    </LandingLayout>
  )
}

export default NextPostPage
