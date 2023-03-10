import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ShowcasesPage } from '@onex/pages'

export interface NextHomePageProps {}

const NextHomePage: React.FC<NextHomePageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Home' }}>
      <ShowcasesPage />
    </LandingLayout>
  )
}

export default NextHomePage
