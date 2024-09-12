import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@onex/landing'
import { PostCategorysPage, PostCategorysPageProps } from '@onex/pages'
import { PostCategoryList } from '@onex/server'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = PostCategoryList.getStaticProps()

export interface NextPostsPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    PostCategorysPageProps {}

const NextPostsPage: React.FC<NextPostsPageProps> = (props) => {
  const { pageProviderProps, postCategorys, posts } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={{ title: 'Insights' }}>
        <PostCategorysPage postCategorys={postCategorys} posts={posts} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextPostsPage
