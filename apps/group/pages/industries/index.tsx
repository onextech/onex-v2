import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'

export interface NextIndustriesPageProps {}

const NextIndustriesPage: React.FC<NextIndustriesPageProps> = () => {
  return <LandingLayout seo={{ title: 'Industries' }} />
}

export default NextIndustriesPage
