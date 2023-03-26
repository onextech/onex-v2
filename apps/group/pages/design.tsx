import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { DesignPage } from '@onex/pages'
import { MOCK_GROUP_INDUSTRYS } from '@onex/mocks'
import { GetStaticProps } from 'next'
import { Page } from '@onex/types'
import getDynamicPage from '../src/utils/getDynamicPage'

export const getStaticProps: GetStaticProps = () => {
  const design = getDynamicPage({
    ...MOCK_GROUP_INDUSTRYS[0],
    title: 'Design',
  })
  return { props: { design } }
}

export interface NextDesignPageProps {
  design: Page
}

const NextDesignPage: React.FC<NextDesignPageProps> = (props) => {
  const { design } = props
  return (
    <LandingLayout
      seo={{ title: 'Design' }}
      headerProps={{ dark: true, translucent: true, position: 'fixed' }}
    >
      <DesignPage design={design} />
    </LandingLayout>
  )
}

export default NextDesignPage
