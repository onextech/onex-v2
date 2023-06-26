import React from 'react'
import { LandingLayout } from '@app/layouts'
import { PressReleasePage, PressReleasePageProps } from '@onex/pages'
import { PressReleaseDetail } from '@onex/server'
import { PageProvider } from '@gravis-os/landing'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = PressReleaseDetail.getStaticProps()
export const getStaticPaths = PressReleaseDetail.getStaticPaths()

export interface NextPressReleasePageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    PressReleasePageProps {}

const NextPressReleasePage: React.FC<NextPressReleasePageProps> = (props) => {
  const { pressRelease, otherPressReleases, pageProviderProps } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        seo={{ title: pressRelease.title, description: pressRelease.subtitle }}
        autoBreadcrumbs
      >
        <PressReleasePage
          pressRelease={pressRelease}
          otherPressReleases={otherPressReleases}
        />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextPressReleasePage
