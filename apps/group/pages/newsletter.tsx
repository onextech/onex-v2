import React from 'react'
import { LandingLayout } from '@app/layouts'
import { NewsletterPage } from '@onex/pages'
import { InferGetStaticPropsType, GetStaticProps } from 'next'
import { PageDetail } from '@onex/server'
import { PageProvider } from '@gravis-os/landing'

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
