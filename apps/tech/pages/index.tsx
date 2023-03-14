import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ShowcasesPage } from '@onex/pages'
import { MOCK_SHOWCASES } from '@onex/common'

export interface NextHomePageProps {}

const NextHomePage: React.FC<NextHomePageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Home' }}>
      <ShowcasesPage showcases={MOCK_SHOWCASES} />
    </LandingLayout>
  )
}

export default NextHomePage
