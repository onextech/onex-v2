import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ServiceCategorysPage } from '@onex/pages'
import { MOCK_GROUP_SERVICES, MOCK_GROUP_SERVICE_CATEGORYS } from '@onex/mocks'

export interface NextServicesPageProps {}

const NextServicesPage: React.FC<NextServicesPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Services' }}>
      <ServiceCategorysPage
        services={MOCK_GROUP_SERVICES}
        serviceCategorys={MOCK_GROUP_SERVICE_CATEGORYS}
      />
    </LandingLayout>
  )
}

export default NextServicesPage
