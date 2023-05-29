import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { TechPage, TechPageProps } from '@onex/pages'
import {
  MOCK_PAGES,
  MOCK_SHOWCASES,
  MOCK_TECHNOLOGYS,
  MOCK_POSTS,
  MOCK_INDUSTRYS,
} from '@onex/mocks'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { fetchSite, getDynamicPage, makeGetStaticProps } from '@onex/server'
import { PageProvider } from '@onex/providers'
import dayjs from 'dayjs'
import orderBy from 'lodash/orderBy'

export const getStaticProps: GetStaticProps = async (context) => {
  const { MOCK_KEY } = process.env
  // supabaseClient.from('site').select('*').single().where('workspace_id', 1)
  const site = fetchSite()
  // supabaseClient.from('page').select('*').single().where('slug', 'tech').where('workspace_id', 1)
  const prevPage = MOCK_PAGES[MOCK_KEY].find(({ slug }) => slug === 'home')
  const page = getDynamicPage({ page: prevPage, context, site })
  // supabaseClient.from('showcase').select('*').limit(3).where('workspace_id', 1)
  const showcases = MOCK_SHOWCASES[MOCK_KEY].slice(0, 3)
  // supabaseClient.from('technology').select('*').limit(8).where('workspace_id', 1)
  const technologys = MOCK_TECHNOLOGYS[MOCK_KEY].filter(
    ({ is_featured }) => is_featured
  ).slice(0, 8)
  // supabaseClient.from('post').select('*').limit(3).where('workspace_id', 1)
  const featuredPosts = orderBy(MOCK_POSTS[MOCK_KEY], 'published_at', 'desc')
    .filter(({ is_active }) => is_active)
    .filter(
      ({ published_at }) =>
        published_at && dayjs(published_at).isBefore(dayjs())
    )
    .filter(({ is_hero, is_featured }) => is_featured && !is_hero)
    .slice(0, 3)
  // supabaseClient.from('industry').select('*').limit(6).where('workspace_id', 1)
  const industrys = MOCK_INDUSTRYS[MOCK_KEY].filter(
    ({ is_featured }) => is_featured
  ).slice(0, 3)

  return makeGetStaticProps({
    props: {
      page,
      showcases,
      technologys,
      featuredPosts,
      industrys,
    },
  })(context)
}

export interface NextTechPageProps
  extends TechPageProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const NextTechPage: React.FC<NextTechPageProps> = (props) => {
  const {
    page,
    showcases,
    technologys,
    featuredPosts,
    industrys,
    pageProviderProps,
  } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        seo={page.seo}
        transparentHeader
        headerProps={{ translucentAtScrollY: 755 }}
      >
        <TechPage
          page={page}
          showcases={showcases}
          technologys={technologys}
          featuredPosts={featuredPosts}
          industrys={industrys}
        />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextTechPage
