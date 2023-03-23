import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { LegalPage } from '@onex/pages'
import { legalPages } from '@onex/common'
import routeConfig from '@app/configs/routeConfig'
import { GetStaticProps } from 'next'
import { Page } from '@onex/types'
import getDynamicPage from '@app/utils/getDynamicPage'

export const getStaticProps: GetStaticProps = () => {
  const { title, html } = legalPages.find(
    ({ slug }) => slug === routeConfig.TERMS.slice(1)
  )
  const legalPage = getDynamicPage({ title, html })
  return { props: { legalPage } }
}

export interface NextTermsPageProps {
  legalPage: Page
}

const NextTermsPage: React.FC<NextTermsPageProps> = (props) => {
  const { legalPage } = props

  return (
    <LandingLayout seo={legalPage.seo}>
      <LegalPage {...legalPage} />
    </LandingLayout>
  )
}

export default NextTermsPage
