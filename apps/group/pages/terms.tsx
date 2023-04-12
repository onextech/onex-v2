import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { LegalPage } from '@onex/pages'
import { legalPages } from '@onex/common'
import routeConfig from '@app/configs/routeConfig'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Page } from '@onex/types'
import { getDynamicPage, makeGetStaticProps } from '@onex/server'
import configs from '@app/configs'
import { PageProvider } from '@onex/providers'

export const getStaticProps: GetStaticProps = (context) => {
  const { title, html } = legalPages.find(
    ({ slug }) => slug === routeConfig.TERMS.slice(1)
  )
  const legalPage = getDynamicPage({ title, html }, configs)
  return makeGetStaticProps({ props: { legalPage } })(context)
}

export interface NextTermsPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {
  legalPage: Page
}

const NextTermsPage: React.FC<NextTermsPageProps> = (props) => {
  const { legalPage, pageProviderProps } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={legalPage.seo}>
        <LegalPage {...legalPage} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextTermsPage
