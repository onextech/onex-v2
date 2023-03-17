import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ServiceCategoryPage } from '@onex/pages'
import { MOCK_GROUP_SERVICE_CATEGORYS, MOCK_GROUP_SERVICES } from '@onex/mocks'
import { useRouter } from 'next/router'

export interface NextServicesPageProps {}

const NextServicesPage: React.FC<NextServicesPageProps> = () => {
  const { query } = useRouter()

  const serviceCategory = MOCK_GROUP_SERVICE_CATEGORYS.find(
    ({ slug }) => slug === query.categorySlug
  )

  const services = MOCK_GROUP_SERVICES.filter(
    ({ category_id }) => category_id === serviceCategory?.id
  )

  return (
    <LandingLayout seo={{ title: 'Service Categorys' }} autoBreadcrumbs>
      <ServiceCategoryPage
        serviceCategory={serviceCategory}
        services={services}
      />
    </LandingLayout>
  )
}

export default NextServicesPage
