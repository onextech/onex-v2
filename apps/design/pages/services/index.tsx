import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@gravis-os/landing'
import { ServiceCategorysPage, ServiceCategorysPageProps } from '@onex/pages'
import { ServiceCategoryList } from '@onex/server'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = ServiceCategoryList.getStaticProps()

export interface NextServicesPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    ServiceCategorysPageProps {}

const NextServicesPage: React.FC<NextServicesPageProps> = (props) => {
  const { pageProviderProps, serviceCategorys, services } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        seo={{
          title: 'Services',
          description:
            "Elevate your business with One X Design's comprehensive services. Unlock growth opportunities, enhance user experiences, and achieve your goals.",
        }}
      >
        <ServiceCategorysPage
          serviceCategorys={serviceCategorys}
          services={services}
        />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextServicesPage
