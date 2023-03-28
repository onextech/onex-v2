import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { PressReleasesPage, PressReleasesPageProps } from '@onex/pages'
import { PressRelease } from '@onex/types'
import { PressReleaseList } from '@onex/modules'
import configs from '@app/configs'

export const getStaticProps = PressReleaseList.getStaticProps({ configs })

export interface NextPressReleasesPageProps extends PressReleasesPageProps {
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
