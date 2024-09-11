import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@onex/landing'
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
            'Empowering the finance industry through digital transformation. Partner with us to unlock your full potential and drive innovation.',
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
