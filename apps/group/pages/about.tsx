import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { AboutPage } from '@onex/pages'

export interface NextAboutPageProps {}

const NextAboutPage: React.FC<NextAboutPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'About Us' }} darkHeader>
      <AboutPage />
    </LandingLayout>
  )
}

export default NextAboutPage
