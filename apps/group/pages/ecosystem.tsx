import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@onex/landing'
import { MOCK_GROUP_INDUSTRYS } from '@onex/mocks'
import { EcosystemPage } from '@onex/pages'
import {
  fetchSite,
  getDynamicPage,
  getStaticPropsWithLayout,
} from '@onex/server'
import { Page } from '@onex/types'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps = (context) => {
  const site = fetchSite()
  const ecosystem = getDynamicPage({
    context,
    page: { ...MOCK_GROUP_INDUSTRYS[0], title: 'Ecosystem' },
    site,
  })
  return getStaticPropsWithLayout({ props: { ecosystem } })(context)
}

export interface NextEcosystemPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {
  ecosystem: Page
}

const NextEcosystemPage: React.FC<NextEcosystemPageProps> = (props) => {
  const { ecosystem, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout darkHeader seo={{ title: 'Ecosystem' }}>
        <EcosystemPage ecosystem={ecosystem} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextEcosystemPage
