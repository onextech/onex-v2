import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@onex/landing'
import { PostCategoryPage, PostCategoryPageProps } from '@onex/pages'
import { PostCategoryDetail } from '@onex/server'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = PostCategoryDetail.getStaticProps()
export const getStaticPaths = PostCategoryDetail.getStaticPaths()

export interface NextPostCategoryPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    PostCategoryPageProps {}

const NextPostCategoryPage: React.FC<NextPostCategoryPageProps> = (props) => {
  const { pageProviderProps, postCategory, posts } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        autoBreadcrumbs
        seo={{
          title: postCategory.title,
          description: `Gain valuable insights about ${postCategory.title.toLowerCase()} on One X Data. Discover trends, strategies, and innovations for today's dynamic business landscape.`,
        }}
      >
        <PostCategoryPage postCategory={postCategory} posts={posts} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextPostCategoryPage
