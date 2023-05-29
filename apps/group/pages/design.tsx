import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { DesignPage, DesignPageProps } from '@onex/pages'
import {
  MOCK_DESIGN_PAGE,
  MOCK_INDUSTRYS,
  MOCK_POSTS,
  MOCK_SHOWCASES,
} from '@onex/mocks'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { fetchSite, getDynamicPage, makeGetStaticProps } from '@onex/server'
import { PageProvider } from '@onex/providers'
import dayjs from 'dayjs'

const { MOCK_KEY } = process.env

export const getStaticProps: GetStaticProps = (context) => {
  const site = fetchSite()
  const page = getDynamicPage({ context, page: MOCK_DESIGN_PAGE, site })
  const showcases = MOCK_SHOWCASES[MOCK_KEY].slice(0, 3)
  // supabaseClient.from('post').select('*').limit(3).where('workspace_id', 1)
  const featuredPosts = MOCK_POSTS[MOCK_KEY].filter(
    ({ is_active }) => is_active
  )
    .filter(
      ({ published_at }) =>
        published_at && dayjs(published_at).isBefore(dayjs())
    )
    .filter(({ is_hero, is_featured }) => is_featured && !is_hero)
  // supabaseClient.from('industry').select('*').limit(6).where('workspace_id', 1)
  const industrys = MOCK_INDUSTRYS[MOCK_KEY].filter(
    ({ is_featured }) => is_featured
  ).slice(0, 3)

  return makeGetStaticProps({
    props: {
      page,
      showcases,
      featuredPosts,
      industrys,
    },
  })(context)
}

export interface NextDesignPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    DesignPageProps {}

const NextDesignPage: React.FC<NextDesignPageProps> = (props) => {
  const { page, showcases, featuredPosts, industrys, pageProviderProps } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={page.seo} darkHeader>
        <DesignPage
          page={page}
          showcases={showcases}
          featuredPosts={featuredPosts}
          industrys={industrys}
        />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextDesignPage
