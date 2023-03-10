import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'

export interface TechnologyPageProps {}

const TechnologyPage: React.FC<TechnologyPageProps> = () => {
  return <LandingLayout seo={{ title: 'Technology' }} autoBreadcrumbs />
}

export default TechnologyPage
