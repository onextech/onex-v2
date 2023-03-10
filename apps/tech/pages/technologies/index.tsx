import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'

export interface TechnologiesPageProps {}

const TechnologiesPage: React.FC<TechnologiesPageProps> = () => {
  return <LandingLayout seo={{ title: 'Technologies' }} />
}

export default TechnologiesPage
