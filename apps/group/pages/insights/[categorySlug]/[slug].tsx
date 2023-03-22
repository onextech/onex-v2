import React from 'react'
import {
  getCategoryFromCrudItem,
  getRelatedCrudItemsByTagTitles,
} from '@gravis-os/utils'
import LandingLayout from '@app/layouts/LandingLayout'
import { PostPage } from '@onex/pages'
import { useRouter } from 'next/router'
import {
  MOCK_GROUP_POST_CATEGORYS,
  MOCK_GROUP_POSTS,
  MOCK_GROUP_SERVICES,
} from '@onex/mocks'

export interface NextPostPageProps {}

const NextPostPage: React.FC<NextPostPageProps> = () => {
  const { query } = useRouter()
  const post = MOCK_GROUP_POSTS.find(({ slug }) => slug === query.slug)
  const postCategory = getCategoryFromCrudItem(post, MOCK_GROUP_POST_CATEGORYS)
  const relatedPosts = MOCK_GROUP_POSTS.filter(
    ({ category_id }) => category_id === post?.category_id
  )
  const relatedServices = getRelatedCrudItemsByTagTitles(
    MOCK_GROUP_SERVICES,
    post?.tags?.map(({ title }) => title)
  ).slice(0, 3)

  return (
    <LandingLayout seo={{ title: 'Post' }} autoBreadcrumbs>
      <PostPage
        post={post}
        postCategory={postCategory}
        relatedPosts={relatedPosts}
        relatedServices={relatedServices}
      />
    </LandingLayout>
  )
}

export default NextPostPage
