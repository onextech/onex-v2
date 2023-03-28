import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { PressReleasePage, PressReleasePageProps } from '@onex/pages'
import { PressReleaseDetail } from '@onex/modules'
import configs from '@app/configs'

export const getStaticProps = PressReleaseDetail.getStaticProps({ configs })
export const getStaticPaths = PressReleaseDetail.getStaticPaths()

export interface NextPressReleasePageProps extends PressReleasePageProps {}

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
