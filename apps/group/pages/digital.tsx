import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { DigitalPage, DigitalPageProps } from '@onex/pages'
import { MOCK_DIGITAL_PAGE } from '@onex/mocks'
import { GetStaticProps } from 'next'
import { getDynamicPage } from '@onex/server'
import configs from '@app/configs'

export const getStaticProps: GetStaticProps = () => {
  const digital = getDynamicPage(MOCK_DIGITAL_PAGE, configs)
  return { props: { digital } }
}

export interface NextDigitalPageProps extends DigitalPageProps {}

const NextDigitalPage: React.FC<NextDigitalPageProps> = (props) => {
  const { digital } = props
  return (
    <LandingLayout
      seo={digital.seo}
      darkHeader
    >
      <DigitalPage digital={digital} />
    </LandingLayout>
  )
}

export default NextDigitalPage
