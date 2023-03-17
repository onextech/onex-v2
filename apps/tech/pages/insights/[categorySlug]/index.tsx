import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { PostCategoryPage } from '@onex/pages'
import { MOCK_TECH_POST_CATEGORYS, MOCK_TECH_POSTS } from '@onex/mocks'
import { useRouter } from 'next/router'

export interface NextPostsPageProps {}

const NextPostsPage: React.FC<NextPostsPageProps> = () => {
  const { query } = useRouter()

  const postCategory = MOCK_TECH_POST_CATEGORYS.find(
    ({ slug }) => slug === query.categorySlug
  )

  const posts = MOCK_TECH_POSTS.filter(
    ({ category_id }) => category_id === postCategory?.id
  )

  return (
    <LandingLayout seo={{ title: 'Post Categorys' }} autoBreadcrumbs>
      <PostCategoryPage postCategory={postCategory} posts={posts} />
    </LandingLayout>
  )
}

export default NextPostsPage
