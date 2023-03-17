import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ServicePage } from '@onex/pages'
import { useRouter } from 'next/router'
import { MOCK_GROUP_SERVICES } from '@onex/mocks'

export interface NextServicePageProps {}

const NextServicePage: React.FC<NextServicePageProps> = () => {
  const { query } = useRouter()
  const service = MOCK_GROUP_SERVICES.find(({ slug }) => slug === query.slug)

  return (
    <LandingLayout seo={{ title: 'Service' }} autoBreadcrumbs>
      <ServicePage service={service} />
    </LandingLayout>
  )
}

export default NextServicePage
