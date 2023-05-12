import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { DataPage, DataPageProps } from '@onex/pages'
import { MOCK_DATA_PAGE, MOCK_SHOWCASES } from '@onex/mocks'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { fetchSite, getDynamicPage, makeGetStaticProps } from '@onex/server'
import { PageProvider } from '@onex/providers'

const { MOCK_KEY } = process.env

export const getStaticProps: GetStaticProps = (context) => {
  const site = fetchSite()
  const data = getDynamicPage({ context, page: MOCK_DATA_PAGE, site })
  const showcases = MOCK_SHOWCASES[MOCK_KEY]
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
