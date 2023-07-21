import React from 'react'
import { LandingLayout } from '@app/layouts'
import { AelPage, AelPageProps } from '@onex/pages'
import {
  MOCK_PAGES,
  MOCK_SHOWCASES,
  MOCK_POSTS,
  MOCK_INDUSTRYS,
  MOCK_TECHNOLOGYS,
  MOCK_PRESS_RELEASES,
} from '@onex/mocks'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import {
  fetchSite,
  getStaticPropsWithLayout,
  getDynamicPage,
} from '@onex/server'
import { PageProvider } from '@gravis-os/landing'
import dayjs from 'dayjs'
import orderBy from 'lodash/orderBy'

export const getStaticProps: GetStaticProps = async (context) => {
  const { MOCK_KEY = '' } = process.env
  // supabaseClient.from('site').select('*').single().where('workspace_id', 1)
  const site = fetchSite()
  // supabaseClient.from('page').select('*').single().where('slug', 'tech').where('workspace_id', 1)
  const prevPage = MOCK_PAGES[MOCK_KEY].find(({ slug }) => slug === 'home')
  const page = getDynamicPage({ page: prevPage, context, site })
  // supabaseClient.from('showcase').select('*').limit(3).where('workspace_id', 1)
  const showcases = MOCK_SHOWCASES[MOCK_KEY].slice(1, 4)
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
  const featuredPressReleases = orderBy(
    MOCK_PRESS_RELEASES[MOCK_KEY],
    'published_at',
    'desc'
  )
    .filter(({ is_active }) => is_active)
    .filter(
      ({ published_at }) =>
        published_at && dayjs(published_at).isBefore(dayjs())
    )
    .filter(({ is_featured }) => is_featured)
    .slice(0, 3)
  return getStaticPropsWithLayout({
    props: {
      page,
      showcases,
      featuredPosts,
      industrys,
      featuredPressReleases,
    },
  })(context)
}

export interface NextAelPageProps
  extends AelPageProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const NextGovxPage: React.FC<NextGovxPageProps> = (props) => {
  const {
    page,
    showcases,
    technologys,
    featuredPosts,
    industrys,
    pageProviderProps,
    featuredPressReleases,
  } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        seo={page.seo}
        transparentHeader
        headerProps={{ translucentAtScrollY: 755 }}
      >
        <AelPage
          showcases={showcases}
          featuredPosts={featuredPosts}
          industrys={industrys}
          page={page}
          featuredPressReleases={featuredPressReleases}
        />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextAelPage
