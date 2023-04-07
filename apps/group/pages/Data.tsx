import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { DataPage, DataPageProps } from '@onex/pages'
import { MOCK_DATA_PAGE, MOCK_TECH_SHOWCASES } from '@onex/mocks'
import { GetStaticProps } from 'next'
import { getDynamicPage } from '@onex/server'
import configs from '@app/configs'

export const getStaticProps: GetStaticProps = () => {
  const data = getDynamicPage(MOCK_DATA_PAGE, configs)
  const showcases = MOCK_TECH_SHOWCASES
  return { props: { data, showcases } }
}

export interface NextDataPageProps extends DataPageProps {}

const NextDataPage: React.FC<NextDataPageProps> = (props) => {
  const { data, showcases } = props
  return (
    <LandingLayout seo={data.seo} darkHeader>
      <DataPage data={data} showcases={showcases} />
    </LandingLayout>
  )
}

export default NextDataPage
