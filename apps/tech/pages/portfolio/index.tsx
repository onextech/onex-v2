import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ShowcasesPage, ShowcasesPageProps } from '@onex/pages'
import { ShowcaseList } from '@onex/server'
import configs from '@app/configs'

export const getStaticProps = ShowcaseList.getStaticProps({ configs })

export interface NextShowcasesPageProps extends ShowcasesPageProps {}

const NextShowcasesPage: React.FC<NextShowcasesPageProps> = (props) => {
  const { showcases } = props
  return (
    <LandingLayout seo={{ title: 'Showcases' }}>
      <ShowcasesPage showcases={showcases} />
    </LandingLayout>
  )
}

export default NextShowcasesPage
