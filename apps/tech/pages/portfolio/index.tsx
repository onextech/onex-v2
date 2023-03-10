import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ShowcasesPage } from '@onex/pages'

export interface NextShowcasesPageProps {}

const NextShowcasesPage: React.FC<NextShowcasesPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Portfolio' }}>
      <ShowcasesPage />
    </LandingLayout>
  )
}

export default NextShowcasesPage
