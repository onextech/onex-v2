import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { EcosystemPage } from '@onex/pages'
import { MOCK_GROUP_INDUSTRYS } from '@onex/mocks'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Page } from '@onex/types'
import { getDynamicPage, makeGetStaticProps } from '@onex/server'
import configs from '@app/configs'
import { PageProvider } from '@onex/providers'

export const getStaticProps: GetStaticProps = (context) => {
  const ecosystem = getDynamicPage(
    {
      ...MOCK_GROUP_INDUSTRYS[0],
      title: 'Ecosystem',
    },
    configs
  )
  return makeGetStaticProps({ props: { ecosystem } })(context)
}

export interface NextEcosystemPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {
  ecosystem: Page
}

const NextEcosystemPage: React.FC<NextEcosystemPageProps> = (props) => {
  const { ecosystem, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={{ title: 'Ecosystem' }} darkHeader>
        <EcosystemPage ecosystem={ecosystem} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextEcosystemPage
