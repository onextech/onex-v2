import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@gravis-os/landing'
import { MissionPage } from '@onex/pages'
import { PageDetail } from '@onex/server'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps = PageDetail.getStaticProps({
  slug: 'mission',
})

export interface NextMissionPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const NextMissionPage: React.FC<NextMissionPageProps> = (props) => {
  const { page, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout darkHeader seo={page.seo}>
        <MissionPage />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextMissionPage
