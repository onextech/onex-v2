import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { PressReleasesPage, PressReleasesPageProps } from '@onex/pages'
import { PressRelease } from '@onex/types'
import { PressReleaseList } from '@onex/server'

import { InferGetStaticPropsType } from 'next'
import { PageProvider } from '@onex/providers'

export const getStaticProps = PressReleaseList.getStaticProps()

export interface NextPressReleasesPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    PressReleasesPageProps {
  pressReleases: PressRelease[]
}

const NextPressReleasesPage: React.FC<NextPressReleasesPageProps> = (props) => {
  const { pressReleases, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={{ title: 'News' }}>
        <PressReleasesPage pressReleases={pressReleases} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextPressReleasesPage
