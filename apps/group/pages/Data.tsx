import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { DataPage, DataPageProps } from '@onex/pages'
import { MOCK_DATA_PAGE, MOCK_TECH_SHOWCASES } from '@onex/mocks'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { fetchSite, getDynamicPage, makeGetStaticProps } from '@onex/server'
import { PageProvider } from '@onex/providers'

export const getStaticProps: GetStaticProps = (context) => {
  const site = fetchSite()
  const data = getDynamicPage({ context, page: MOCK_DATA_PAGE, site })
  const showcases = MOCK_TECH_SHOWCASES
  return makeGetStaticProps({ props: { data, showcases } })(context)
}

export interface NextDataPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    DataPageProps {}

const NextDataPage: React.FC<NextDataPageProps> = (props) => {
  const { data, showcases, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={data.seo} darkHeader>
        <DataPage data={data} showcases={showcases} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextDataPage
