import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { PostPage } from '@onex/pages'
import { useRouter } from 'next/router'
import { MOCK_GROUP_POSTS } from '@onex/mocks'

export interface NextPostPageProps {}

const NextPostPage: React.FC<NextPostPageProps> = () => {
  const { query } = useRouter()
  const service = MOCK_GROUP_POSTS.find(({ slug }) => slug === query.slug)

  return (
    <LandingLayout seo={{ title: 'Post' }} autoBreadcrumbs>
      <PostPage service={service} />
    </LandingLayout>
  )
}

export default NextPostPage
