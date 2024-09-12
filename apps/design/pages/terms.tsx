import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@onex/landing'
import { LegalPage } from '@onex/pages'
import { PageDetail } from '@onex/server'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = PageDetail.getStaticProps({ slug: 'terms' })

export interface NextTermsPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const NextTermsPage: React.FC<NextTermsPageProps> = (props) => {
  const { page, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={page.seo}>
        <LegalPage {...page} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextTermsPage
