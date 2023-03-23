import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { PostCategoryPage } from '@onex/pages'
import { MOCK_GROUP_POST_CATEGORYS, MOCK_GROUP_POSTS } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Post, PostCategory } from '@onex/types'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: MOCK_GROUP_POST_CATEGORYS.map(({ slug }) => ({
      params: { categorySlug: slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = (context) => {
  const postCategory = MOCK_GROUP_POST_CATEGORYS.find(
    ({ slug }) => slug === context.params.categorySlug
  )
  const posts = MOCK_GROUP_POSTS.filter(
    ({ category_id }) => category_id === postCategory?.id
  )

  return {
    props: {
      posts,
      postCategory,
    },
  }
}

export interface NextPostsPageProps {
  posts: Post[]
  postCategory: PostCategory
}

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
