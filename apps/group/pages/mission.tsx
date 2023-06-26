import React from 'react'
import { LandingLayout } from '@app/layouts'
import { MissionPage } from '@onex/pages'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PageProvider } from '@gravis-os/landing'
import { PageDetail } from '@onex/server'

export const getStaticProps: GetStaticProps = PageDetail.getStaticProps({
  slug: 'mission',
})

export interface NextMissionPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const NextMissionPage: React.FC<NextMissionPageProps> = (props) => {
  const { page, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={page.seo} darkHeader>
        <MissionPage />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextMissionPage
