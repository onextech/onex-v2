import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { PostPage, PostPageProps } from '@onex/pages'
import { PostDetail } from '@onex/server'

import { PageProvider } from '@onex/providers'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = PostDetail.getStaticProps()
export const getStaticPaths = PostDetail.getStaticPaths()

export interface NextPostPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    PostPageProps {}

const NextPostPage: React.FC<NextPostPageProps> = (props) => {
  const {
    post,
    postCategory,
    relatedPosts,
    relatedServices,
    pageProviderProps,
  } = props

  return (
    <PageProvider {...pageProviderProps}>
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
    </PageProvider>
  )
}

export default NextPostPage
