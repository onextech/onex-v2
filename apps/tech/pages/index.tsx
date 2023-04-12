import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { TechPage, TechPageProps } from '@onex/pages'
import { MOCK_TECH_PAGE, MOCK_TECH_SHOWCASES } from '@onex/mocks'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getDynamicPage, makeGetStaticProps } from '@onex/server'
import configs from '@app/configs'
import { PageProvider } from '@onex/providers'

export const getStaticProps: GetStaticProps = async (context) => {
  const tech = getDynamicPage(MOCK_TECH_PAGE, configs)
  const showcases = MOCK_TECH_SHOWCASES
  return makeGetStaticProps({
    props: {
      tech,
      showcases,
    },
  })(context)
}

export interface NextTechPageProps
  extends TechPageProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const NextTechPage: React.FC<NextTechPageProps> = (props) => {
  const { tech, showcases, pageProviderProps } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={tech.seo} darkHeader>
        <TechPage tech={tech} showcases={showcases || MOCK_TECH_SHOWCASES} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextTechPage
