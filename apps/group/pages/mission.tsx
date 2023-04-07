import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { MissionPage } from '@onex/pages'

export interface NextMissionPageProps {}

const NextMissionPage: React.FC<NextMissionPageProps> = () => {
  return (
    <LandingLayout
      seo={{ title: 'Mission' }}
      darkHeader
    >
      <MissionPage />
    </LandingLayout>
  )
}

export default NextMissionPage
