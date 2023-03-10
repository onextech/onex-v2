import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ContactPage } from '@onex/pages'

export interface NextContactPageProps {}

const NextContactPage: React.FC<NextContactPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Contact Us' }}>
      <ContactPage />
    </LandingLayout>
  )
}

export default NextContactPage
