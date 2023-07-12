import React from 'react'
import { LandingLayout } from '@app/layouts'
import { ContactPage } from '@onex/pages'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PageDetail } from '@onex/server'
import { PageProvider } from '@gravis-os/landing'

export const getStaticProps: GetStaticProps = PageDetail.getStaticProps({
  slug: 'contact',
})

export interface NextContactPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const NextContactPage: React.FC<NextContactPageProps> = (props) => {
  const { page, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={page.seo}>
        <ContactPage />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextContactPage
