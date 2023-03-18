import React from 'react'
import { getCategoryFromCrudItem } from '@gravis-os/utils'
import LandingLayout from '@app/layouts/LandingLayout'
import { PostPage } from '@onex/pages'
import { useRouter } from 'next/router'
import { MOCK_GROUP_POST_CATEGORYS, MOCK_GROUP_POSTS } from '@onex/mocks'

export interface NextPostPageProps {}

const NextPostPage: React.FC<NextPostPageProps> = () => {
  const { query } = useRouter()
  const post = MOCK_GROUP_POSTS.find(({ slug }) => slug === query.slug)
  const postCategory = getCategoryFromCrudItem(post, MOCK_GROUP_POST_CATEGORYS)

  return (
    <LandingLayout seo={{ title: 'Post' }} autoBreadcrumbs>
      <PostPage post={post} postCategory={postCategory} />
    </LandingLayout>
  )
}

export default NextPostPage
