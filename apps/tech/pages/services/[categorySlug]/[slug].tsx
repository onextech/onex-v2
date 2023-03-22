import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ServicePage } from '@onex/pages'
import { useRouter } from 'next/router'
import {
  MOCK_TECH_SERVICES,
  MOCK_TECH_SERVICE_CATEGORYS,
  MOCK_TECH_POSTS,
} from '@onex/mocks'
import {
  getCategoryFromCrudItem,
  getRelatedCrudItemsByTagTitle,
} from '@gravis-os/utils'

export interface NextServicePageProps {}

const NextServicePage: React.FC<NextServicePageProps> = () => {
  const { query } = useRouter()
  const service = MOCK_TECH_SERVICES.find(({ slug }) => slug === query.slug)
  const serviceCategory = getCategoryFromCrudItem(
    service,
    MOCK_TECH_SERVICE_CATEGORYS
  )
  const relatedServices = MOCK_TECH_SERVICES.filter(
    ({ category_id }) => category_id === service?.category_id
  )
  const relatedPosts = getRelatedCrudItemsByTagTitle(
    MOCK_TECH_POSTS,
    service?.title
  ).slice(0, 3)

  return (
    <LandingLayout seo={{ title: 'Service' }} autoBreadcrumbs>
      <ServicePage
        service={service}
        serviceCategory={serviceCategory}
        relatedPosts={relatedPosts}
        relatedServices={relatedServices}
      />
    </LandingLayout>
  )
}

export default NextServicePage
