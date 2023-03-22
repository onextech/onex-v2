import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ServicePage } from '@onex/pages'
import { useRouter } from 'next/router'
import {
  MOCK_GROUP_SERVICES,
  MOCK_GROUP_SERVICE_CATEGORYS,
  MOCK_GROUP_POSTS,
} from '@onex/mocks'
import {
  getCategoryFromCrudItem,
  getRelatedCrudItemsByTagTitle,
} from '@gravis-os/utils'

export interface NextServicePageProps {}

const NextServicePage: React.FC<NextServicePageProps> = () => {
  const { query } = useRouter()
  const service = MOCK_GROUP_SERVICES.find(({ slug }) => slug === query.slug)
  const serviceCategory = getCategoryFromCrudItem(
    service,
    MOCK_GROUP_SERVICE_CATEGORYS
  )
  const relatedServices = MOCK_GROUP_SERVICES.filter(
    ({ category_id }) => category_id === service?.category_id
  )
  const relatedPosts = getRelatedCrudItemsByTagTitle(
    MOCK_GROUP_POSTS,
    service?.title
  ).slice(0, 3)

  return (
    <LandingLayout seo={{ title: 'Service' }} autoBreadcrumbs>
      <ServicePage
        service={service}
        serviceCategory={serviceCategory}
        relatedServices={relatedServices}
        relatedPosts={relatedPosts}
      />
    </LandingLayout>
  )
}

export default NextServicePage
