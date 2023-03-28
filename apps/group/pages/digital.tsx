import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { DigitalPage } from '@onex/pages'
import { MOCK_DIGITAL_PAGE } from '@onex/mocks'
import { GetStaticProps } from 'next'
import { Page } from '@onex/types'
import getDynamicPage from '../src/utils/getDynamicPage'

export const getStaticProps: GetStaticProps = () => {
  const digital = getDynamicPage(MOCK_DIGITAL_PAGE)
  return { props: { digital } }
}

export interface NextDigitalPageProps {
  digital: Page
}

const NextDigitalPage: React.FC<NextDigitalPageProps> = (props) => {
  const { digital } = props
  return (
    <LandingLayout
      seo={digital.seo}
      headerProps={{ dark: true, translucent: true, position: 'fixed' }}
    >
      <DigitalPage digital={digital} />
    </LandingLayout>
  )
}

export default NextDigitalPage
