import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@onex/landing'
import { PressReleasesPage, PressReleasesPageProps } from '@onex/pages'
import { PressReleaseList } from '@onex/server'
import { PressRelease } from '@onex/types'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = PressReleaseList.getStaticProps()

export interface NextPressReleasesPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    PressReleasesPageProps {
  pressReleases: PressRelease[]
}

const NextPressReleasesPage: React.FC<NextPressReleasesPageProps> = (props) => {
  const { pageProviderProps, pressReleases } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        seo={{
          title: 'News',
          description:
            'Explore our featured articles and discover how our innovative solutions are making waves in the business world.',
        }}
      >
        <PressReleasesPage pressReleases={pressReleases} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextPressReleasesPage
