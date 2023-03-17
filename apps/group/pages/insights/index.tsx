import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { PostCategorysPage } from '@onex/pages'
import { MOCK_GROUP_POSTS, MOCK_GROUP_POST_CATEGORYS } from '@onex/mocks'

export interface NextPostsPageProps {}

const NextPostsPage: React.FC<NextPostsPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Posts' }}>
      <PostCategorysPage
        posts={MOCK_GROUP_POSTS}
        postCategorys={MOCK_GROUP_POST_CATEGORYS}
      />
    </LandingLayout>
  )
}

export default NextPostsPage
