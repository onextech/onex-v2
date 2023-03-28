import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ServiceCategoryPage, ServiceCategoryPageProps } from '@onex/pages'
import { ServiceCategoryDetail } from '@onex/modules'
import configs from '@app/configs'

export const getStaticProps = ServiceCategoryDetail.getStaticProps({ configs })
export const getStaticPaths = ServiceCategoryDetail.getStaticPaths()

export interface NextServicesPageProps extends ServiceCategoryPageProps {}

const NextServicesPage: React.FC<NextServicesPageProps> = (props) => {
  const { serviceCategory, services, otherServiceCategorys } = props

  return (
    <LandingLayout
      seo={{
        title: serviceCategory.title,
        description: serviceCategory.subtitle,
      }}
      autoBreadcrumbs
    >
      <ServiceCategoryPage
        serviceCategory={serviceCategory}
        otherServiceCategorys={otherServiceCategorys}
        services={services}
      />
    </LandingLayout>
  )
}

export default NextServicesPage
