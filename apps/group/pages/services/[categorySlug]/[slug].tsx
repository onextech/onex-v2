import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@onex/landing'
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
    showcases,
  } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        autoBreadcrumbs
        seo={{
          title: service.title,
          description: `Leverage our expert ${service.category.title.toLowerCase()} services for ${service.title.toLowerCase()}. ${
            service.category.subtitle
          }`,
        }}
      >
        <ServicePage
          relatedPosts={relatedPosts}
          relatedServices={relatedServices}
          service={service}
          serviceCategory={serviceCategory}
          showcases={showcases}
        />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextServicePage
