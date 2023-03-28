import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ShowcasesPage, ShowcasesPageProps } from '@onex/pages'
import configs from '@app/configs'
import { ShowcaseList } from '@onex/modules'

export const getStaticProps = ShowcaseList.getStaticProps({ configs })

export interface NextHomePageProps extends ShowcasesPageProps {}

const NextHomePage: React.FC<NextHomePageProps> = (props) => {
  const { showcases } = props
  return (
    <LandingLayout seo={{ title: 'Home' }}>
      <ShowcasesPage showcases={showcases} />
    </LandingLayout>
  )
}

export default NextHomePage
