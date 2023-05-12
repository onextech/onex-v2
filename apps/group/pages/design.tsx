import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { DesignPage, DesignPageProps } from '@onex/pages'
import { MOCK_DESIGN_PAGE, MOCK_SHOWCASES } from '@onex/mocks'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { fetchSite, getDynamicPage, makeGetStaticProps } from '@onex/server'
import { PageProvider } from '@onex/providers'

const { MOCK_KEY } = process.env

export const getStaticProps: GetStaticProps = (context) => {
  const site = fetchSite()
  const design = getDynamicPage({ context, page: MOCK_DESIGN_PAGE, site })
  const showcases = MOCK_SHOWCASES[MOCK_KEY]
  return makeGetStaticProps({ props: { design, showcases } })(context)
}

export interface NextDesignPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    DesignPageProps {}

const NextDesignPage: React.FC<NextDesignPageProps> = (props) => {
  const { design, showcases, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={design.seo} darkHeader>
        <DesignPage design={design} showcases={showcases} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextDesignPage
