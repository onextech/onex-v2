import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { TechnologysPage } from '@onex/pages'
import { MOCK_TECH_TECHNOLOGYS } from '@onex/mocks'

export interface NextTechnologysPageProps {}

const NextTechnologysPage: React.FC<NextTechnologysPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Technologies' }}>
      <TechnologysPage technologys={MOCK_TECH_TECHNOLOGYS} />
    </LandingLayout>
  )
}

export default NextTechnologysPage
