import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ShowcasesPage } from '@onex/pages'
import { MOCK_SHOWCASES } from '@onex/common'

export interface NextShowcasesPageProps {}

const NextShowcasesPage: React.FC<NextShowcasesPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Portfolio' }}>
      <ShowcasesPage showcases={MOCK_SHOWCASES} />
    </LandingLayout>
  )
}

export default NextShowcasesPage
