import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { PressReleasePage } from '@onex/pages'
import { MOCK_TECH_PRESS_RELEASES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { PressRelease } from '@onex/types'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: MOCK_TECH_PRESS_RELEASES.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = (context) => {
  const pressRelease = MOCK_TECH_PRESS_RELEASES.find(
    ({ slug }) => slug === context.params.slug
  )
  const otherPressReleases = MOCK_TECH_PRESS_RELEASES.filter(
    ({ slug }) => slug !== context.params.slug
  ).slice(0, 3)

  return {
    props: {
      pressRelease,
      otherPressReleases,
    },
  }
}

export interface NextPressReleasePageProps {
  pressRelease: PressRelease
  otherPressReleases: PressRelease[]
}

const NextPressReleasePage: React.FC<NextPressReleasePageProps> = (props) => {
  const { pressRelease, otherPressReleases } = props

  return (
    <LandingLayout
      seo={{ title: pressRelease.title, description: pressRelease.subtitle }}
      autoBreadcrumbs
    >
      <PressReleasePage
        pressRelease={pressRelease}
        otherPressReleases={otherPressReleases}
      />
    </LandingLayout>
  )
}

export default NextPressReleasePage
