import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { CareersPage } from '@onex/pages'

export interface NextCareersPageProps {}

const NextCareersPage: React.FC<NextCareersPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Careers' }}>
      <CareersPage />
    </LandingLayout>
  )
}

export default NextCareersPage
