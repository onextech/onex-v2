import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { DesignPage, DesignPageProps } from '@onex/pages'
import { MOCK_DESIGN_PAGE, MOCK_TECH_SHOWCASES } from '@onex/mocks'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getDynamicPage, makeGetStaticProps } from '@onex/server'
import configs from '@app/configs'
import { PageProvider } from '@onex/providers'

export const getStaticProps: GetStaticProps = (context) => {
  const design = getDynamicPage(MOCK_DESIGN_PAGE, configs)
  const showcases = MOCK_TECH_SHOWCASES
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
