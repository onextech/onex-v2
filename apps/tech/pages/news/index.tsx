import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { PressReleasesPage } from '@onex/pages'
import { MOCK_TECH_PRESS_RELEASES } from '@onex/mocks'
import { GetStaticProps } from 'next'
import { PressRelease } from '@onex/types'

export const getStaticProps: GetStaticProps = () => {
  const pressReleases = MOCK_TECH_PRESS_RELEASES
  return {
    props: {
      pressReleases,
    },
  }
}

export interface NextPressReleasesPageProps {
  pressReleases: PressRelease[]
}

const NextPressReleasesPage: React.FC<NextPressReleasesPageProps> = (props) => {
  const { pressReleases } = props

  return (
    <LandingLayout seo={{ title: 'News' }} autoBreadcrumbs>
      <PressReleasesPage pressReleases={pressReleases} />
    </LandingLayout>
  )
}

export default NextPressReleasesPage
