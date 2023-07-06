import React from 'react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { LandingLayout } from '@app/layouts'
import { GroupPage, GroupPageProps } from '@onex/pages'
import {
  fetchSite,
  getStaticPropsWithLayout,
  getDynamicPage,
} from '@onex/server'
import { PageProvider } from '@gravis-os/landing'
import dayjs from 'dayjs'
import {
  MOCK_INDUSTRYS,
  MOCK_PAGES,
  MOCK_POSTS,
  MOCK_SHOWCASES,
} from '@onex/mocks'
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
    .filter(({ is_hero, is_featured }) => is_featured && !is_hero)
    .slice(0, 3)
  const showcases = MOCK_SHOWCASES[MOCK_KEY].slice(0, 3)
  const industrys = MOCK_INDUSTRYS[MOCK_KEY].filter(
    ({ is_featured }) => is_featured
  ).slice(0, 3)
  return getStaticPropsWithLayout({
    props: {
      page,
      heroPosts,
      featuredPosts,
      showcases,
      industrys,
    },
  })(context)
}

export interface NextHomePageProps
  extends GroupPageProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const NextHomePage: React.FC<NextHomePageProps> = (props) => {
  const {
    page,
    showcases,
    featuredPosts,
    heroPosts,
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
        <GroupPage
          industrys={industrys}
          showcases={showcases}
          page={page}
          featuredPosts={featuredPosts}
          heroPosts={heroPosts}
        />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextHomePage
