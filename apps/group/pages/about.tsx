import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { AboutPage } from '@onex/pages'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { makeGetStaticProps } from '@onex/server'
import { PageProvider } from '@onex/providers'

export const getStaticProps: GetStaticProps = makeGetStaticProps()

export interface NextAboutPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const NextAboutPage: React.FC<NextAboutPageProps> = (props) => {
  const { pageProviderProps } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={{ title: 'About Us' }} darkHeader>
        <AboutPage />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextAboutPage
