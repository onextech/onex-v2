import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { DesignPage, DesignPageProps } from '@onex/pages'
import { MOCK_DESIGN_PAGE, MOCK_TECH_SHOWCASES } from '@onex/mocks'
import { GetStaticProps } from 'next'
import { getDynamicPage } from '@onex/server'
import configs from '@app/configs'

export const getStaticProps: GetStaticProps = () => {
  const design = getDynamicPage(MOCK_DESIGN_PAGE, configs)
  const showcases = MOCK_TECH_SHOWCASES
  return { props: { design, showcases } }
}

export interface NextDesignPageProps extends DesignPageProps {}

const NextDesignPage: React.FC<NextDesignPageProps> = (props) => {
  const { design, showcases } = props
  return (
    <LandingLayout seo={design.seo} darkHeader>
      <DesignPage design={design} showcases={showcases} />
    </LandingLayout>
  )
}

export default NextDesignPage
