import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { MissionPage } from '@onex/pages'

export interface NextMissionPageProps {}

const NextMissionPage: React.FC<NextMissionPageProps> = () => {
  return (
    <LandingLayout
      seo={{ title: 'Mission' }}
      headerProps={{ dark: true, translucent: true, position: 'fixed' }}
    >
      <MissionPage />
    </LandingLayout>
  )
}

export default NextMissionPage
