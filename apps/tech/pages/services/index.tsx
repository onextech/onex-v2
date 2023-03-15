import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ServicesPage } from '@onex/pages'
import { MOCK_TECH_SERVICES } from '@onex/mocks'

export interface NextServicesPageProps {}

const NextServicesPage: React.FC<NextServicesPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Services' }}>
      <ServicesPage services={MOCK_TECH_SERVICES} />
    </LandingLayout>
  )
}

export default NextServicesPage
