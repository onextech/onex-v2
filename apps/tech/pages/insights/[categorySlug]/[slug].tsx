import React from 'react'
import {
  getCategoryFromCrudItem,
  getRelatedCrudItemsByTagTitle,
} from '@gravis-os/utils'
import LandingLayout from '@app/layouts/LandingLayout'
import { PostPage } from '@onex/pages'
import {
  MOCK_TECH_SERVICES,
  MOCK_TECH_POSTS,
  MOCK_TECH_SERVICE_CATEGORYS,
} from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Post, PostCategory, Service } from '@onex/types'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: MOCK_TECH_POSTS.map(({ slug, category }) => ({
      params: { slug, categorySlug: category.slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = (context) => {
  const post = MOCK_TECH_POSTS.find(({ slug }) => slug === context.params.slug)
  const postCategory = getCategoryFromCrudItem(
    post,
    MOCK_TECH_SERVICE_CATEGORYS
  )
  const relatedServices = MOCK_TECH_SERVICES.filter(
    ({ category_id }) => category_id === post?.category_id
  )
  const relatedPosts = getRelatedCrudItemsByTagTitle(
    MOCK_TECH_POSTS,
    post?.title
  ).slice(0, 3)

  return {
    props: {
      post,
      postCategory,
      relatedServices,
      relatedPosts,
    },
  }
}

export interface NextPostPageProps {
  post: Post
  postCategory: PostCategory
  relatedPosts: Post[]
  relatedServices: Service[]
}

const NextPostPage: React.FC<NextPostPageProps> = (props) => {
  const { post, postCategory, relatedPosts, relatedServices } = props

  return (
    <LandingLayout
      seo={{ title: post.title, description: post.subtitle }}
      autoBreadcrumbs
    >
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
