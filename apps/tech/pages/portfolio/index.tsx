import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ShowcasesPage } from '@onex/pages'
import { MOCK_SHOWCASES } from '@onex/mocks'

export interface NextShowcasesPageProps {}

const NextShowcasesPage: React.FC<NextShowcasesPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Showcases' }}>
      <ShowcasesPage showcases={MOCK_SHOWCASES} />
    </LandingLayout>
  )
}

export default NextShowcasesPage
