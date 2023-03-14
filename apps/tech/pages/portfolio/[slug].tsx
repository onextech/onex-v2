import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ShowcasePage } from '@onex/pages'
import { useRouter } from 'next/router'
import { MOCK_SHOWCASES } from '@onex/common'

export interface NextShowcasePageProps {}

const NextShowcasePage: React.FC<NextShowcasePageProps> = () => {
  const { query } = useRouter()
  const showcase = MOCK_SHOWCASES.find(({ slug }) => slug === query.slug)

  return (
    <LandingLayout seo={{ title: 'Portfolio' }} autoBreadcrumbs>
      <ShowcasePage showcase={showcase} />
    </LandingLayout>
  )
}

export default NextShowcasePage
