import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { DigitalPage, DigitalPageProps } from '@onex/pages'
import { MOCK_DIGITAL_PAGE } from '@onex/mocks'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getDynamicPage, makeGetStaticProps } from '@onex/server'
import configs from '@app/configs'
import { PageProvider } from '@onex/providers'

export const getStaticProps: GetStaticProps = (context) => {
  const digital = getDynamicPage(MOCK_DIGITAL_PAGE, configs)
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
