import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@onex/landing'
import { AboutPage } from '@onex/pages'
import { PageDetail } from '@onex/server'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps = PageDetail.getStaticProps({
  slug: 'about',
})

export interface NextAboutPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const NextAboutPage: React.FC<NextAboutPageProps> = (props) => {
  const { page, pageProviderProps } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout darkHeader seo={page.seo}>
        <AboutPage page={page} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextAboutPage
