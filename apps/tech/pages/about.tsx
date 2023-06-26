import React from 'react'
import { LandingLayout } from '@app/layouts'
import { AboutPage } from '@onex/pages'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PageDetail } from '@onex/server'
import { PageProvider } from '@gravis-os/landing'

export const getStaticProps: GetStaticProps = PageDetail.getStaticProps({
  slug: 'about',
})

export interface NextAboutPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const NextAboutPage: React.FC<NextAboutPageProps> = (props) => {
  const { page, pageProviderProps } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={page.seo} darkHeader>
        <AboutPage page={page} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextAboutPage
