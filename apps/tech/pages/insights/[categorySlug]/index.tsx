import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { PostCategoryPage, PostCategoryPageProps } from '@onex/pages'
import { PostCategoryDetail } from '@onex/server'
import configs from '@app/configs'
import { InferGetStaticPropsType } from 'next'
import { PageProvider } from '@onex/providers'

export const getStaticProps = PostCategoryDetail.getStaticProps({ configs })
export const getStaticPaths = PostCategoryDetail.getStaticPaths()

export interface NextPostCategoryPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    PostCategoryPageProps {}

const NextPostCategoryPage: React.FC<NextPostCategoryPageProps> = (props) => {
  const { posts, postCategory, pageProviderProps } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        seo={{ title: postCategory.title, description: postCategory.subtitle }}
        autoBreadcrumbs
      >
        <PostCategoryPage postCategory={postCategory} posts={posts} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextPostCategoryPage
