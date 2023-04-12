import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { ContactPage } from '@onex/pages'
import { InferGetStaticPropsType, GetStaticProps } from 'next'
import { makeGetStaticProps } from '@onex/server'
import { PageProvider } from '@onex/providers'

export const getStaticProps: GetStaticProps = makeGetStaticProps()

export interface NextContactPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const NextContactPage: React.FC<NextContactPageProps> = (props) => {
  const { pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={{ title: 'Contact Us' }}>
        <ContactPage />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextContactPage
