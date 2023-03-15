import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { TechnologyPage } from '@onex/pages'
import { useRouter } from 'next/router'
import { MOCK_TECH_TECHNOLOGYS } from '@onex/mocks'

export interface NextTechnologyPageProps {}

const NextTechnologyPage: React.FC<NextTechnologyPageProps> = () => {
  const { query } = useRouter()
  const technology = MOCK_TECH_TECHNOLOGYS.find(({ slug }) => slug === query.slug)

  return (
    <LandingLayout seo={{ title: 'Portfolio' }} autoBreadcrumbs>
      <TechnologyPage technology={technology} />
    </LandingLayout>
  )
}

export default NextTechnologyPage
