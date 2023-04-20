import React from 'react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { LandingLayout } from '@onex/layouts'
import { GroupPage, GroupPageProps } from '@onex/pages'
import { fetchSite, getDynamicPage, makeGetStaticProps } from '@onex/server'
import { PageProvider } from '@onex/providers'
import { MOCK_GROUP_PAGE, MOCK_GROUP_POSTS } from '@onex/mocks'

export const getStaticProps: GetStaticProps = async (context) => {
  const site = fetchSite()
  const page = getDynamicPage(MOCK_GROUP_PAGE, site)
  const posts = MOCK_GROUP_POSTS.slice(0, 3)
  return makeGetStaticProps({
    props: {
      page,
      posts,
    },
  })(context)
}

export interface NextHomePageProps
  extends GroupPageProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const NextHomePage: React.FC<NextHomePageProps> = (props) => {
  const { page, posts, pageProviderProps } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={page.seo} darkHeader>
        <GroupPage page={page} posts={posts} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextHomePage
