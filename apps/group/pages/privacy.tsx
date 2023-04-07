import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { LegalPage } from '@onex/pages'
import { legalPages } from '@onex/common'
import routeConfig from '@app/configs/routeConfig'
import { GetStaticProps } from 'next'
import { Page } from '@onex/types'
import { getDynamicPage } from '@onex/server'
import configs from '@app/configs'

export const getStaticProps: GetStaticProps = () => {
  const { title, html } = legalPages.find(
    ({ slug }) => slug === routeConfig.PRIVACY.slice(1)
  )
  const legalPage = getDynamicPage({ title, html }, configs)
  return { props: { legalPage } }
}

export interface NextPrivacyPageProps {
  legalPage: Page
}

const NextPrivacyPage: React.FC<NextPrivacyPageProps> = (props) => {
  const { legalPage } = props

  return (
    <LandingLayout seo={legalPage.seo}>
      <LegalPage {...legalPage} />
    </LandingLayout>
  )
}

export default NextPrivacyPage
