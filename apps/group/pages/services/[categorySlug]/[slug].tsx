import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ServicePage } from '@onex/pages'
import { useRouter } from 'next/router'
import { MOCK_GROUP_SERVICES, MOCK_GROUP_SERVICE_CATEGORYS } from '@onex/mocks'
import { getCategoryFromCrudItem } from '@gravis-os/utils'

export interface NextServicePageProps {}

const NextServicePage: React.FC<NextServicePageProps> = () => {
  const { query } = useRouter()
  const service = MOCK_GROUP_SERVICES.find(({ slug }) => slug === query.slug)
  const serviceCategory = getCategoryFromCrudItem(
    service,
    MOCK_GROUP_SERVICE_CATEGORYS
  )
  const relatedServices = MOCK_GROUP_SERVICES.filter(
    ({ category_id }) => category_id === service.category_id
  )

  return (
    <LandingLayout seo={{ title: 'Service' }} autoBreadcrumbs>
      <ServicePage
        service={service}
        serviceCategory={serviceCategory}
        relatedServices={relatedServices}
      />
    </LandingLayout>
  )
}

export default NextServicePage
