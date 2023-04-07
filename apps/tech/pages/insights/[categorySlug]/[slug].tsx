import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { PostPage, PostPageProps } from '@onex/pages'
import { PostDetail } from '@onex/server'
import configs from '@app/configs'

export const getStaticProps = PostDetail.getStaticProps({ configs })
export const getStaticPaths = PostDetail.getStaticPaths()

export interface NextPostPageProps extends PostPageProps {}

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
