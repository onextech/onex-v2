import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { MissionPage } from '@onex/pages'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PageProvider } from '@onex/providers'
import { makeGetStaticProps } from '@onex/server'

export const getStaticProps: GetStaticProps = makeGetStaticProps()

export interface NextMissionPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const NextMissionPage: React.FC<NextMissionPageProps> = (props) => {
  const { pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={{ title: 'Mission' }} darkHeader>
        <MissionPage />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextMissionPage
