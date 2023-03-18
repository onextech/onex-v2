import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ServiceCategorysPage } from '@onex/pages'
import { MOCK_TECH_SERVICES, MOCK_TECH_SERVICE_CATEGORYS } from '@onex/mocks'

export interface NextServicesPageProps {}

const NextServicesPage: React.FC<NextServicesPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Services' }}>
      <ServiceCategorysPage
        services={MOCK_TECH_SERVICES}
        serviceCategorys={MOCK_TECH_SERVICE_CATEGORYS}
      />
    </LandingLayout>
  )
}

export default NextServicesPage
