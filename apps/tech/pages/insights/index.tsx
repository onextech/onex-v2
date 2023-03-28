import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { PostCategorysPage, PostCategorysPageProps } from '@onex/pages'
import { PostCategoryList } from '@onex/modules'
import configs from '@app/configs'

export const getStaticProps = PostCategoryList.getStaticProps({ configs })

export interface NextPostsPageProps extends PostCategorysPageProps {}

const NextPostsPage: React.FC<NextPostsPageProps> = (props) => {
  const { posts, postCategorys } = props
  return (
    <LandingLayout seo={{ title: 'Insights' }}>
      <PostCategorysPage posts={posts} postCategorys={postCategorys} />
    </LandingLayout>
  )
}

export default NextPostsPage
