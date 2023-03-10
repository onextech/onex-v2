import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ShowcasePage } from '@onex/pages'

export interface NextShowcasePageProps {}

const NextShowcasePage: React.FC<NextShowcasePageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Portfolio' }} autoBreadcrumbs>
      <ShowcasePage />
    </LandingLayout>
  )
}

export default NextShowcasePage
