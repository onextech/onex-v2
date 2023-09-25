import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@gravis-os/landing'
import { ServicePage, ServicePageProps } from '@onex/pages'
import { ServiceDetail } from '@onex/server'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = ServiceDetail.getStaticProps()
export const getStaticPaths = ServiceDetail.getStaticPaths()

export interface NextServicePageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    ServicePageProps {}

const NextServicePage: React.FC<NextServicePageProps> = (props) => {
  const {
    pageProviderProps,
    relatedPosts,
    relatedServices,
    service,
    serviceCategory,
  } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout autoBreadcrumbs seo={service.seo}>
        <ServicePage
          relatedPosts={relatedPosts}
          relatedServices={relatedServices}
          service={service}
          serviceCategory={serviceCategory}
        />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextServicePage
