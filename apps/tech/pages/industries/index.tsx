import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { IndustrysPage } from '@onex/pages'
import { MOCK_INDUSTRYS } from '@onex/mocks'

export interface NextIndustrysPageProps {}

const NextIndustrysPage: React.FC<NextIndustrysPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Portfolio' }}>
      <IndustrysPage industrys={MOCK_INDUSTRYS} />
    </LandingLayout>
  )
}

export default NextIndustrysPage
