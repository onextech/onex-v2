import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { AboutPage } from '@onex/pages'

export interface NextAboutPageProps {}

const NextAboutPage: React.FC<NextAboutPageProps> = () => {
  return (
    <LandingLayout
      seo={{ title: 'Home' }}
      headerProps={{ dark: true, translucent: true, position: 'fixed' }}
    >
      <AboutPage />
    </LandingLayout>
  )
}

export default NextAboutPage
