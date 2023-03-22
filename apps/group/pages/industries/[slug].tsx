import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { IndustryPage } from '@onex/pages'
import { useRouter } from 'next/router'
import { getRelatedCrudItemsByTagTitle } from '@gravis-os/utils'
import { MOCK_GROUP_INDUSTRYS, MOCK_GROUP_POSTS } from '@onex/mocks'

export interface NextIndustryPageProps {}

const NextIndustryPage: React.FC<NextIndustryPageProps> = () => {
  const { query } = useRouter()
  const industry = MOCK_GROUP_INDUSTRYS.find(({ slug }) => slug === query.slug)

  const relatedPosts = getRelatedCrudItemsByTagTitle(
    MOCK_GROUP_POSTS,
    industry?.title
  ).slice(0, 3)

  return (
    <LandingLayout seo={{ title: 'Industry' }} autoBreadcrumbs>
      <IndustryPage industry={industry} relatedPosts={relatedPosts} />
    </LandingLayout>
  )
}

export default NextIndustryPage
