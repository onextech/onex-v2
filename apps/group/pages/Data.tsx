import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { DataPage, DataPageProps } from '@onex/pages'
import { MOCK_DATA_PAGE, MOCK_TECH_SHOWCASES } from '@onex/mocks'
import { GetStaticProps } from 'next'
import getDynamicPage from '@app/utils/getDynamicPage'

export const getStaticProps: GetStaticProps = () => {
  const data = getDynamicPage(MOCK_DATA_PAGE)
  const showcases = MOCK_TECH_SHOWCASES
  return { props: { data, showcases } }
}

export interface NextDataPageProps extends DataPageProps {}

const NextDataPage: React.FC<NextDataPageProps> = (props) => {
  const { data, showcases } = props
  return (
    <LandingLayout
      seo={data.seo}
      headerProps={{ dark: true, translucent: true, position: 'fixed' }}
    >
      <DataPage data={data} showcases={showcases} />
    </LandingLayout>
  )
}

export default NextDataPage
