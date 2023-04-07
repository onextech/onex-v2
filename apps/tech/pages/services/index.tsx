import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ServiceCategorysPage, ServiceCategorysPageProps } from '@onex/pages'
import { ServiceCategoryList } from '@onex/server'
import configs from '@app/configs'

export const getStaticProps = ServiceCategoryList.getStaticProps({ configs })

export interface NextServicesPageProps extends ServiceCategorysPageProps {}

const NextServicesPage: React.FC<NextServicesPageProps> = (props) => {
  const { services, serviceCategorys } = props
  return (
    <LandingLayout seo={{ title: 'Services' }}>
      <ServiceCategorysPage
        services={services}
        serviceCategorys={serviceCategorys}
      />
    </LandingLayout>
  )
}

export default NextServicesPage
