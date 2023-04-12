import React from 'react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { LandingLayout } from '@onex/layouts'
import { AboutPage } from '@onex/pages'
import { makeGetStaticProps } from '@onex/server'
import { PageProvider } from '@onex/providers'

export const getStaticProps: GetStaticProps = makeGetStaticProps()

export interface NextHomePageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const NextHomePage: React.FC<NextHomePageProps> = (props) => {
  const { pageProviderProps } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={{ title: 'Home' }} darkHeader>
        <AboutPage />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextHomePage
