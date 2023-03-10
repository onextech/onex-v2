import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'

export interface ServicePageProps {}

const ServicePage: React.FC<ServicePageProps> = () => {
  return <LandingLayout seo={{ title: 'Service' }} autoBreadcrumbs />
}

export default ServicePage
