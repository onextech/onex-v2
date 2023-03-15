import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { CareersPage } from '@onex/pages'
import { MOCK_JOBS } from '@onex/mocks'

export interface NextCareersPageProps {}

const NextCareersPage: React.FC<NextCareersPageProps> = () => {
  return (
    <LandingLayout
      seo={{ title: 'Careers' }}
      headerProps={{
        disableBorderBottom: true,
        dark: true,
        transparent: true,
        position: 'fixed',
      }}
    >
      <CareersPage jobs={MOCK_JOBS} />
    </LandingLayout>
  )
}

export default NextCareersPage
