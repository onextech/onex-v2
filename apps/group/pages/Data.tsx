import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { DataPage } from '@onex/pages'
import { MOCK_GROUP_INDUSTRYS } from '@onex/mocks'
import { GetStaticProps } from 'next'
import { Page } from '@onex/types'
import getDynamicPage from '../src/utils/getDynamicPage'

export const getStaticProps: GetStaticProps = () => {
  const data = getDynamicPage({
    ...MOCK_GROUP_INDUSTRYS[0],
    title: 'Data',
  })
  return { props: { data } }
}

export interface NextDataPageProps {
  data: Page
}

const NextDataPage: React.FC<NextDataPageProps> = (props) => {
  const { data } = props
  return (
    <LandingLayout
      seo={{ title: 'Data' }}
      headerProps={{ dark: true, translucent: true, position: 'fixed' }}
    >
      <DataPage data={data} />
    </LandingLayout>
  )
}

export default NextDataPage
