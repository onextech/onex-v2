import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { DesignPage, DesignPageProps } from '@onex/pages'
import { MOCK_DESIGN_PAGE, MOCK_TECH_SHOWCASES } from '@onex/mocks'
import { GetStaticProps } from 'next'
import getDynamicPage from '@app/utils/getDynamicPage'

export const getStaticProps: GetStaticProps = () => {
  const design = getDynamicPage(MOCK_DESIGN_PAGE)
  const showcases = MOCK_TECH_SHOWCASES
  return { props: { design, showcases } }
}

export interface NextDesignPageProps extends DesignPageProps {}

const NextDesignPage: React.FC<NextDesignPageProps> = (props) => {
  const { design, showcases } = props
  return (
    <LandingLayout
      seo={design.seo}
      headerProps={{ dark: true, translucent: true, position: 'fixed' }}
    >
      <DesignPage design={design} showcases={showcases} />
    </LandingLayout>
  )
}

export default NextDesignPage
