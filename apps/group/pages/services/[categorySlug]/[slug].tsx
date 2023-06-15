import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { ServicePage, ServicePageProps } from '@onex/pages'
import { ServiceDetail } from '@onex/server'
import { PageProvider } from '@gravis-os/landing'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = ServiceDetail.getStaticProps()
export const getStaticPaths = ServiceDetail.getStaticPaths()

export interface NextServicePageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    ServicePageProps {}

const NextServicePage: React.FC<NextServicePageProps> = (props) => {
  const {
    service,
    serviceCategory,
    relatedServices,
    relatedPosts,
    pageProviderProps,
  } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        seo={{
          title: service.title,
          description: `Leverage our expert ${service.category.title.toLowerCase()} services for ${service.title.toLowerCase()}. ${
            service.category.subtitle
          }`,
        }}
        autoBreadcrumbs
      >
        <ServicePage
          service={service}
          serviceCategory={serviceCategory}
          relatedServices={relatedServices}
          relatedPosts={relatedPosts}
        />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextServicePage
