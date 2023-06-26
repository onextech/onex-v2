import React from 'react'
import { LandingLayout } from '@app/layouts'
import { LegalPage } from '@onex/pages'
import { InferGetStaticPropsType } from 'next'
import { PageDetail } from '@onex/server'
import { PageProvider } from '@gravis-os/landing'

export const getStaticProps = PageDetail.getStaticProps({ slug: 'pdpa' })

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
