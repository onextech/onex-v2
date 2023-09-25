import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@gravis-os/landing'
import { LegalPage } from '@onex/pages'
import { PageDetail } from '@onex/server'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = PageDetail.getStaticProps({ slug: 'cookies' })

export interface NextCookiesPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const NextCookiesPage: React.FC<NextCookiesPageProps> = (props) => {
  const { page, pageProviderProps } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={page.seo}>
        <LegalPage {...page} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextCookiesPage
