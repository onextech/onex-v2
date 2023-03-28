import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { PostCategoryPage, PostCategoryPageProps } from '@onex/pages'
import { PostCategoryDetail } from '@onex/modules'
import configs from '@app/configs'

export const getStaticProps = PostCategoryDetail.getStaticProps({ configs })
export const getStaticPaths = PostCategoryDetail.getStaticPaths()

export interface NextPostsPageProps extends PostCategoryPageProps {}

const NextPostsPage: React.FC<NextPostsPageProps> = (props) => {
  const { posts, postCategory } = props

  return (
    <LandingLayout
      seo={{ title: postCategory.title, description: postCategory.subtitle }}
      autoBreadcrumbs
    >
      <PostCategoryPage postCategory={postCategory} posts={posts} />
    </LandingLayout>
  )
}

export default NextPostsPage
