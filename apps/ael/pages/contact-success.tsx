import React from 'react'
import { LandingLayout } from '@app/layouts'
import { ContactSuccessPage } from '@onex/pages'
import { PageProvider } from '@gravis-os/landing'
import { PageDetail } from '@onex/server'
import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

export const getStaticProps = PageDetail.getStaticProps({
  slug: 'contact-success',
})

export interface SuccessPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const SuccessPage = (props: SuccessPageProps) => {
  const { page, pageProviderProps } = props
  const router = useRouter()
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout footerProps={{ disableCallout: true }} seo={page.seo}>
        <ContactSuccessPage {...router.query} />
      </LandingLayout>
    </PageProvider>
  )
}

export default SuccessPage
