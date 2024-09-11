import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@onex/landing'
import { PostPage, PostPageProps } from '@onex/pages'
import { PostDetail } from '@onex/server'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = PostDetail.getStaticProps()
export const getStaticPaths = PostDetail.getStaticPaths()
export interface NextPostPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    PostPageProps {}

const NextPostPage: React.FC<NextPostPageProps> = (props) => {
  const {
    otherPosts,
    pageProviderProps,
    post,
    postCategory,
    relatedPosts,
    relatedServices,
  } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        autoBreadcrumbs
        breadcrumbsProps={{ hideLastItem: true }}
        seo={{
          title: post.title,
          description: post.subtitle,
          openGraph: {
            images: [{ url: post.hero_src }],
          },
        }}
      >
        <PostPage
          otherPosts={otherPosts}
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
