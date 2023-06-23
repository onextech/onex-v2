import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { ServiceCategorysPage, ServiceCategorysPageProps } from '@onex/pages'
import { ServiceCategoryList } from '@onex/server'
import { InferGetStaticPropsType } from 'next'
import { PageProvider } from '@gravis-os/landing'

export const getStaticProps = ServiceCategoryList.getStaticProps()

export interface NextServicesPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    ServiceCategorysPageProps {}

const NextServicesPage: React.FC<NextServicesPageProps> = (props) => {
  const { services, serviceCategorys, pageProviderProps } = props
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
          services={services}
          serviceCategorys={serviceCategorys}
        />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextServicesPage
