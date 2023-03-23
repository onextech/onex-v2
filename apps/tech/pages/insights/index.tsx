import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { PostCategorysPage } from '@onex/pages'
import { MOCK_TECH_POSTS, MOCK_TECH_POST_CATEGORYS } from '@onex/mocks'

export interface NextPostsPageProps {}

const NextPostsPage: React.FC<NextPostsPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Insights' }}>
      <PostCategorysPage
        posts={MOCK_TECH_POSTS}
        postCategorys={MOCK_TECH_POST_CATEGORYS}
      />
    </LandingLayout>
  )
}

export default NextPostsPage
