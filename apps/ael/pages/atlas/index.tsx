import React from 'react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { LandingLayout } from '@app/layouts'
import {
  fetchSite,
  getStaticPropsWithLayout,
  getDynamicPage,
} from '@onex/server'
import { PageProvider } from '@gravis-os/landing'
import { MOCK_PAGES, MOCK_SHOWCASES } from '@onex/mocks'
import { AtlasHomePage, AtlasHomePageProps } from '@app/pages'

export const getStaticProps: GetStaticProps = async (context) => {
  const { MOCK_KEY = '' } = process.env

  const site = fetchSite()
  const page = getDynamicPage({
    context,
    page: MOCK_PAGES[MOCK_KEY].find(({ slug }) => slug === 'home'),
    site,
  })
  const showcases = MOCK_SHOWCASES[MOCK_KEY]
  return getStaticPropsWithLayout({
    props: {
      page,
      showcases,
    },
  })(context)
}

export interface NextHomePageProps
  extends AtlasHomePageProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const NextHomePage: React.FC<NextHomePageProps> = (props) => {
  const { page, showcases, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={page.seo}>
        <AtlasHomePage showcases={showcases} page={page} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextHomePage
