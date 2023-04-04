import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { TechPage, TechPageProps } from '@onex/pages'
import { MOCK_TECH_PAGE, MOCK_TECH_SHOWCASES } from '@onex/mocks'
import { GetStaticProps } from 'next'
import getDynamicPage from '@app/utils/getDynamicPage'

export const getStaticProps: GetStaticProps = () => {
  const tech = getDynamicPage(MOCK_TECH_PAGE)
  const showcases = MOCK_TECH_SHOWCASES
  return { props: { tech, showcases } }
}

export interface NextTechPageProps extends TechPageProps {}

const NextTechPage: React.FC<NextTechPageProps> = (props) => {
  const { tech, showcases } = props
  return (
    <LandingLayout
      seo={tech.seo}
      headerProps={{ dark: true, translucent: true, position: 'fixed' }}
    >
      <TechPage tech={tech} showcases={showcases || MOCK_TECH_SHOWCASES} />
    </LandingLayout>
  )
}

export default NextTechPage
