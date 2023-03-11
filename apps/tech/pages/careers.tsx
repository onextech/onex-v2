import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { CareersPage } from '@onex/pages'
import { jobs } from '@app/configs/navConfig'

export interface NextCareersPageProps {}

const NextCareersPage: React.FC<NextCareersPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Careers' }}>
      <CareersPage jobs={jobs} />
    </LandingLayout>
  )
}

export default NextCareersPage
