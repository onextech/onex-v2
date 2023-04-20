import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { TechPage, TechPageProps } from '@onex/pages'
import { MOCK_TECH_PAGE, MOCK_TECH_SHOWCASES } from '@onex/mocks'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { fetchSite, getDynamicPage, makeGetStaticProps } from '@onex/server'
import { PageProvider } from '@onex/providers'

export const getStaticProps: GetStaticProps = async (context) => {
  // supabaseClient.from('site').select('*').single().where('workspace_id', 1)
  const site = fetchSite()
  // supabaseClient.from('page').select('*').single().where('slug', 'tech').where('workspace_id', 1)
  const page = getDynamicPage(MOCK_TECH_PAGE, site)
  // supabaseClient.from('showcase').select('*').limit(3).where('workspace_id', 1)
  const showcases = MOCK_TECH_SHOWCASES
  return makeGetStaticProps({
    props: {
      page,
      showcases,
    },
  })(context)
}

export interface NextTechPageProps
  extends TechPageProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const NextTechPage: React.FC<NextTechPageProps> = (props) => {
  const { page, showcases, pageProviderProps } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={page.seo} darkHeader>
        <TechPage page={page} showcases={showcases || MOCK_TECH_SHOWCASES} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextTechPage
