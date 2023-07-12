import React from 'react'
import { LandingLayout } from '@app/layouts'
import { PostCategorysPage, PostCategorysPageProps } from '@onex/pages'
import { PostCategoryList } from '@onex/server'
import { PageProvider } from '@gravis-os/landing'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = PostCategoryList.getStaticProps()

export interface NextPostsPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    PostCategorysPageProps {}

const NextPostsPage: React.FC<NextPostsPageProps> = (props) => {
  const { posts, postCategorys, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={{ title: 'Insights' }}>
        <PostCategorysPage posts={posts} postCategorys={postCategorys} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextPostsPage
