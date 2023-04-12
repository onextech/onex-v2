import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { NewsletterPage } from '@onex/pages'
import { InferGetStaticPropsType, GetStaticProps } from 'next'
import { makeGetStaticProps } from '@onex/server'
import { PageProvider } from '@onex/providers'

export const getStaticProps: GetStaticProps = makeGetStaticProps()

export interface NextNewsletterPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const NextNewsletterPage: React.FC<NextNewsletterPageProps> = (props) => {
  const { pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={{ title: 'Newsletter' }}>
        <NewsletterPage title="Join 5,329 executives discovering new ideas." />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextNewsletterPage
