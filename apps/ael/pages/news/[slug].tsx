import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@gravis-os/landing'
import { PressReleasePage, PressReleasePageProps } from '@onex/pages'
import { PressReleaseDetail } from '@onex/server'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = PressReleaseDetail.getStaticProps()
export const getStaticPaths = PressReleaseDetail.getStaticPaths()

export interface NextPressReleasePageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    PressReleasePageProps {}

const NextPressReleasePage: React.FC<NextPressReleasePageProps> = (props) => {
  const { otherPressReleases, pageProviderProps, pressRelease } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        autoBreadcrumbs
        seo={{ title: pressRelease.title, description: pressRelease.subtitle }}
      >
        <PressReleasePage
          otherPressReleases={otherPressReleases}
          pressRelease={pressRelease}
        />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextPressReleasePage
