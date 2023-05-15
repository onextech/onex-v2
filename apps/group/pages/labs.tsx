import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { LabsPage, LabsPageProps } from '@onex/pages'
import { MOCK_VENTURES_PAGE } from '@onex/mocks'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { fetchSite, getDynamicPage, makeGetStaticProps } from '@onex/server'
import { PageProvider } from '@onex/providers'

export const getStaticProps: GetStaticProps = (context) => {
  const site = fetchSite()
  const page = getDynamicPage({ context, page: MOCK_VENTURES_PAGE, site })
  return makeGetStaticProps({ props: { page } })(context)
}

export interface NextLabsPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    LabsPageProps {}

const NextLabsPage: React.FC<NextLabsPageProps> = (props) => {
  const { page, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={page.seo} darkHeader>
        <LabsPage page={page} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextLabsPage
