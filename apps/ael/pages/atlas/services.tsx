import React from 'react'

import { LandingLayout } from '@app/layouts'
import {
  AtlasServiceCategorysPage,
  AtlasServiceCategorysPageProps,
} from '@app/pages'
import { PageProvider } from '@onex/landing'
import { ServiceCategoryList } from '@onex/server'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = ServiceCategoryList.getStaticProps()

export interface NextServicesPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    AtlasServiceCategorysPageProps {}

const NextServicesPage: React.FC<NextServicesPageProps> = (props) => {
  const { pageProviderProps, serviceCategorys, services } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        seo={{
          title: 'Services',
        }}
      >
        <AtlasServiceCategorysPage
          serviceCategorys={serviceCategorys}
          services={services}
        />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextServicesPage
