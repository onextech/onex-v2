import React from 'react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { LandingLayout } from '@onex/layouts'
import { GroupPage, GroupPageProps } from '@onex/pages'
import { fetchSite, getDynamicPage, makeGetStaticProps } from '@onex/server'
import { PageProvider } from '@onex/providers'
import dayjs from 'dayjs'
import {
  MOCK_INDUSTRYS,
  MOCK_PAGES,
  MOCK_POSTS,
  MOCK_SHOWCASES,
} from '@onex/mocks'

export const getStaticProps: GetStaticProps = async (context) => {
  const { MOCK_KEY } = process.env

  const site = fetchSite()
  const page = getDynamicPage({
    context,
    page: MOCK_PAGES[MOCK_KEY].find(({ slug }) => slug === 'home'),
    site,
  })
  const posts = MOCK_POSTS[MOCK_KEY].filter(({ is_active }) => is_active)
    .filter(
      ({ published_at }) =>
        published_at && dayjs(published_at).isBefore(dayjs())
    )
    .reduce((result, post) => {
      const currCatSize = result.filter(
        (res) => res.is_featured === post.is_featured
      ).length
      return currCatSize < 3 ? [...result, post] : result
    }, [])
  const showcases = MOCK_SHOWCASES[MOCK_KEY].slice(0, 3)
  const industrys = MOCK_INDUSTRYS[MOCK_KEY].filter(
    ({ is_featured }) => is_featured
  ).slice(0, 3)
  return makeGetStaticProps({
    props: {
      page,
      posts,
      showcases,
      industrys,
    },
  })(context)
}

export interface NextHomePageProps
  extends GroupPageProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const NextHomePage: React.FC<NextHomePageProps> = (props) => {
  const { page, showcases, posts, industrys, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={page.seo} darkHeader>
        <GroupPage
          industrys={industrys}
          showcases={showcases}
          page={page}
          posts={posts}
        />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextHomePage
