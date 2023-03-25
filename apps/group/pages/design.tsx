import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { DesignPage } from '@onex/pages'
import { MOCK_GROUP_INDUSTRYS } from '@onex/mocks'

export interface NextDesignPageProps {}

const NextDesignPage: React.FC<NextDesignPageProps> = () => {
  return (
    <LandingLayout
      seo={{ title: 'Design' }}
      headerProps={{ dark: true, translucent: true, position: 'fixed' }}
    >
      <DesignPage design={MOCK_GROUP_INDUSTRYS[0]} />
    </LandingLayout>
  )
}

export default NextDesignPage
