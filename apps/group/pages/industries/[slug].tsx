import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'

export interface NextIndustryPageProps {}

const NextIndustryPage: React.FC<NextIndustryPageProps> = () => {
  return <LandingLayout seo={{ title: 'Industry' }} autoBreadcrumbs />
}

export default NextIndustryPage
