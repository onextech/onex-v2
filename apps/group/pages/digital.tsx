import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { DigitalPage, DigitalPageProps } from '@onex/pages'
import { MOCK_DIGITAL_PAGE } from '@onex/mocks'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { fetchSite, getDynamicPage, makeGetStaticProps } from '@onex/server'
import { PageProvider } from '@onex/providers'

export const getStaticProps: GetStaticProps = (context) => {
  const site = fetchSite()
  const digital = getDynamicPage(MOCK_DIGITAL_PAGE, site)
  return makeGetStaticProps({ props: { digital } })(context)
}

export interface NextDigitalPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    DigitalPageProps {}

const NextDigitalPage: React.FC<NextDigitalPageProps> = (props) => {
  const { digital, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={digital.seo} darkHeader>
        <DigitalPage digital={digital} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextDigitalPage
