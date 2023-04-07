import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { EcosystemPage } from '@onex/pages'
import { MOCK_GROUP_INDUSTRYS } from '@onex/mocks'
import { GetStaticProps } from 'next'
import { Page } from '@onex/types'
import { getDynamicPage } from '@onex/server'
import configs from '@app/configs'

export const getStaticProps: GetStaticProps = () => {
  const ecosystem = getDynamicPage(
    {
      ...MOCK_GROUP_INDUSTRYS[0],
      title: 'Ecosystem',
    },
    configs
  )
  return { props: { ecosystem } }
}

export interface NextEcosystemPageProps {
  ecosystem: Page
}

const NextEcosystemPage: React.FC<NextEcosystemPageProps> = (props) => {
  const { ecosystem } = props
  return (
    <LandingLayout seo={{ title: 'Ecosystem' }} darkHeader>
      <EcosystemPage ecosystem={ecosystem} />
    </LandingLayout>
  )
}

export default NextEcosystemPage
