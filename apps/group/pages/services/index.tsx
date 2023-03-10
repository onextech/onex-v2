import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'

export interface ServicesPageProps {}

const ServicesPage: React.FC<ServicesPageProps> = () => {
  return <LandingLayout seo={{ title: 'Services' }} />
}

export default ServicesPage
