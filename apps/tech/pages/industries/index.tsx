import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { IndustrysPage, IndustrysPageProps } from '@onex/pages'
import { IndustryList } from '@onex/server'
import { InferGetStaticPropsType } from 'next'
import { PageProvider } from '@onex/providers'

export const getStaticProps = IndustryList.getStaticProps()

export interface NextIndustrysPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    IndustrysPageProps {}

const NextIndustrysPage: React.FC<NextIndustrysPageProps> = (props) => {
  const { industrys, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={{ title: 'Industries' }}>
        <IndustrysPage industrys={industrys} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextIndustrysPage
