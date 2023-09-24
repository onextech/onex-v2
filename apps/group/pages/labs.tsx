import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@gravis-os/landing'
import { MOCK_VENTURES_PAGE } from '@onex/mocks'
import { LabsPage, LabsPageProps } from '@onex/pages'
import {
  fetchSite,
  getDynamicPage,
  getStaticPropsWithLayout,
} from '@onex/server'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps = (context) => {
  const site = fetchSite()
  const page = getDynamicPage({ context, page: MOCK_VENTURES_PAGE, site })
  return getStaticPropsWithLayout({ props: { page } })(context)
}

export interface NextLabsPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    LabsPageProps {}

const NextLabsPage: React.FC<NextLabsPageProps> = (props) => {
  const { page, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout darkHeader seo={page.seo}>
        <LabsPage page={page} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextLabsPage
