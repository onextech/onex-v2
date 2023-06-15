import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { LegalPage } from '@onex/pages'
import { InferGetStaticPropsType } from 'next'
import { PageDetail } from '@onex/server'
import { PageProvider } from '@gravis-os/landing'

export const getStaticProps = PageDetail.getStaticProps({ slug: 'privacy' })

export interface NextPrivacyPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const NextPrivacyPage: React.FC<NextPrivacyPageProps> = (props) => {
  const { page, pageProviderProps } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={page.seo}>
        <LegalPage {...page} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextPrivacyPage
