import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { IndustryPage } from '@onex/pages'
import { useRouter } from 'next/router'
import { MOCK_TECH_INDUSTRYS, MOCK_TECH_POSTS } from '@onex/mocks'
import { getRelatedCrudItemsByTagTitle } from '@gravis-os/utils'

export interface NextIndustryPageProps {}

const NextIndustryPage: React.FC<NextIndustryPageProps> = () => {
  const { query } = useRouter()
  const industry = MOCK_TECH_INDUSTRYS.find(({ slug }) => slug === query.slug)

  const relatedPosts = getRelatedCrudItemsByTagTitle(
    MOCK_TECH_POSTS,
    industry?.title
  ).slice(0, 3)

  return (
    <LandingLayout seo={{ title: 'Industry' }} autoBreadcrumbs>
      <IndustryPage industry={industry} relatedPosts={relatedPosts} />
    </LandingLayout>
  )
}

export default NextIndustryPage
