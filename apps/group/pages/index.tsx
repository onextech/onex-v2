import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@onex/landing'
import {
  MOCK_INDUSTRYS,
  MOCK_PAGES,
  MOCK_POSTS,
  MOCK_PRESS_RELEASES,
  MOCK_RESOURCES,
  MOCK_SHOWCASES,
} from '@onex/mocks'
import { GroupPage, GroupPageProps } from '@onex/pages'
import {
  fetchSite,
  getDynamicPage,
  getStaticPropsWithLayout,
} from '@onex/server'
import dayjs from 'dayjs'
import orderBy from 'lodash/orderBy'

export const getStaticProps: GetStaticProps = async (context) => {
  const { MOCK_KEY = '' } = process.env

  const site = fetchSite()
  const page = getDynamicPage({
    context,
    page: MOCK_PAGES[MOCK_KEY].find(({ slug }) => slug === 'home'),
    site,
  })
  const heroPosts = MOCK_POSTS[MOCK_KEY].filter(({ is_active }) => is_active)
    .filter(
      ({ published_at }) =>
        published_at && dayjs(published_at).isBefore(dayjs())
    )
    .filter(({ is_hero }) => is_hero)
    .slice(0, 3)
  const featuredPosts = orderBy(MOCK_POSTS[MOCK_KEY], 'published_at', 'desc')
    .filter(({ is_active }) => is_active)
    .filter(
      ({ published_at }) =>
        published_at && dayjs(published_at).isBefore(dayjs())
    )
    .filter(({ is_featured, is_hero }) => is_featured && !is_hero)
    .slice(0, 3)
  const showcases = MOCK_SHOWCASES[MOCK_KEY].slice(0, 3)
  const industrys = MOCK_INDUSTRYS[MOCK_KEY].filter(
    ({ is_featured }) => is_featured
  ).slice(0, 3)
  const resources = orderBy(
    MOCK_RESOURCES[MOCK_KEY],
    'published_at',
    'desc'
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
      featuredPosts,
      featuredPressReleases,
      heroPosts,
      industrys,
      page,
      resources,
      showcases,
    },
  })(context)
}

export interface NextHomePageProps
  extends GroupPageProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const NextHomePage: React.FC<NextHomePageProps> = (props) => {
  const {
    featuredPosts,
    featuredPressReleases,
    heroPosts,
    industrys,
    page,
    pageProviderProps,
    resources,
    showcases,
  } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        headerProps={{ translucentAtScrollY: 755 }}
        seo={page.seo}
        transparentHeader
      >
        <GroupPage
          featuredPosts={featuredPosts}
          featuredPressReleases={featuredPressReleases}
          heroPosts={heroPosts}
          industrys={industrys}
          page={page}
          resources={resources}
          showcases={showcases}
        />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextHomePage
