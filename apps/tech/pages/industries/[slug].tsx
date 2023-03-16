import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { IndustryPage } from '@onex/pages'
import { useRouter } from 'next/router'
import { MOCK_TECH_INDUSTRYS } from '@onex/mocks'

export interface NextIndustryPageProps {}

const NextIndustryPage: React.FC<NextIndustryPageProps> = () => {
  const { query } = useRouter()
  const industry = MOCK_TECH_INDUSTRYS.find(({ slug }) => slug === query.slug)

  return (
    <LandingLayout seo={{ title: 'Industry' }} autoBreadcrumbs>
      <IndustryPage industry={industry} />
    </LandingLayout>
  )
}

export default NextIndustryPage
