import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { PostsPage } from '@onex/pages'
import { MOCK_TECH_POSTS } from '@onex/mocks'

export interface NextPostsPageProps {}

const NextPostsPage: React.FC<NextPostsPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Posts' }}>
      <PostsPage services={MOCK_TECH_POSTS} />
    </LandingLayout>
  )
}

export default NextPostsPage
