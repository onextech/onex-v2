import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { NewsletterPage } from '@onex/pages'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PageDetail } from '@onex/server'
import { PageProvider } from '@onex/providers'

export const getStaticProps: GetStaticProps = PageDetail.getStaticProps({
  slug: 'newsletter',
})

export interface NextNewsletterPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const NextNewsletterPage: React.FC<NextNewsletterPageProps> = (props) => {
  const { page, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={page.seo}>
        <NewsletterPage title="Join 5,329 executives discovering new ideas." />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextNewsletterPage
