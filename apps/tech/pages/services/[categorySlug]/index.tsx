import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@onex/landing'
import { ServiceCategoryPage, ServiceCategoryPageProps } from '@onex/pages'
import { ServiceCategoryDetail } from '@onex/server'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = ServiceCategoryDetail.getStaticProps()
export const getStaticPaths = ServiceCategoryDetail.getStaticPaths()

export interface NextServicesPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    ServiceCategoryPageProps {}

const NextServicesPage: React.FC<NextServicesPageProps> = (props) => {
  const {
    otherServiceCategorys,
    pageProviderProps,
    serviceCategory,
    services,
  } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        autoBreadcrumbs
        seo={{
          title: serviceCategory.title,
          description: serviceCategory.subtitle,
        }}
      >
        <ServiceCategoryPage
          otherServiceCategorys={otherServiceCategorys}
          serviceCategory={serviceCategory}
          services={services}
        />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextServicesPage
