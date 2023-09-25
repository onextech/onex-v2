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
            'Leverage our advisory, engineering, and data services for innovation and data-driven success. Partner with us to unlock your business potential.',
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
