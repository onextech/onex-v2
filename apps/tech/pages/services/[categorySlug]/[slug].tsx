import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ServicePage, ServicePageProps } from '@onex/pages'
import { ServiceDetail } from '@onex/modules'
import configs from '@app/configs'

export const getStaticProps = ServiceDetail.getStaticProps({
  configs,
})
export const getStaticPaths = ServiceDetail.getStaticPaths()

export interface NextServicePageProps extends ServicePageProps {}

const NextServicePage: React.FC<NextServicePageProps> = (props) => {
  const { service, serviceCategory, relatedServices, relatedPosts } = props
  return (
    <LandingLayout seo={service.seo} autoBreadcrumbs>
      <ServicePage
        service={service}
        serviceCategory={serviceCategory}
        relatedServices={relatedServices}
        relatedPosts={relatedPosts}
      />
    </LandingLayout>
  )
}

export default NextServicePage
