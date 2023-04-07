import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ShowcasePage, ShowcasePageProps } from '@onex/pages'
import { ShowcaseDetail } from '@onex/server'
import configs from '@app/configs'

export const getStaticProps = ShowcaseDetail.getStaticProps({ configs })
export const getStaticPaths = ShowcaseDetail.getStaticPaths()

export interface NextShowcasePageProps extends ShowcasePageProps {}

const NextShowcasePage: React.FC<NextShowcasePageProps> = (props) => {
  const { showcase } = props
  return (
    <LandingLayout
      seo={{ title: showcase.title, description: showcase.subtitle }}
      autoBreadcrumbs
    >
      <ShowcasePage showcase={showcase} />
    </LandingLayout>
  )
}

export default NextShowcasePage
