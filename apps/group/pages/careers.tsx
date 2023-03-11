import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { CareersPage } from '@onex/pages'
import { jobs } from '@app/configs/navConfig'

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
      <CareersPage jobs={jobs} />
    </LandingLayout>
  )
}

export default NextCareersPage
