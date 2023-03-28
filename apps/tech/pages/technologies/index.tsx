import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { TechnologysPage, TechnologysPageProps } from '@onex/pages'
import { TechnologyList } from '@onex/modules'
import configs from '@app/configs'

export const getStaticProps = TechnologyList.getStaticProps({ configs })

export interface NextTechnologysPageProps extends TechnologysPageProps {}

const NextTechnologysPage: React.FC<NextTechnologysPageProps> = (props) => {
  const { technologys } = props
  return (
    <LandingLayout seo={{ title: 'Technologies' }}>
      <TechnologysPage technologys={technologys} />
    </LandingLayout>
  )
}

export default NextTechnologysPage
