import React from 'react'
import { LandingLayout } from '@app/layouts'
import { ServiceCategoryPage, ServiceCategoryPageProps } from '@onex/pages'
import { ServiceCategoryDetail } from '@onex/server'
import { PageProvider } from '@gravis-os/landing'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = ServiceCategoryDetail.getStaticProps()
export const getStaticPaths = ServiceCategoryDetail.getStaticPaths()

export interface NextServicesPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    ServiceCategoryPageProps {}

const NextServicesPage: React.FC<NextServicesPageProps> = (props) => {
  const {
    serviceCategory,
    services,
    otherServiceCategorys,
    pageProviderProps,
  } = props

  return (
    <PageProvider {...pageProviderProps}>
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
    </PageProvider>
  )
}

export default NextServicesPage
