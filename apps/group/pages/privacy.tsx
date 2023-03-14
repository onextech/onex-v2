import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { LegalPage } from '@onex/pages'
import { legalPages } from '@onex/common'
import { useRouter } from 'next/router'

export interface NextPrivacyPageProps {}

const NextPrivacyPage: React.FC<NextPrivacyPageProps> = () => {
  const router = useRouter()
  const { title, html } = legalPages.find(({ slug }) => slug === router.asPath)
  const legalPageProps = { title, html }
  return (
    <LandingLayout seo={{ title: 'Privacy' }}>
      <LegalPage {...legalPageProps} />
    </LandingLayout>
  )
}

export default NextPrivacyPage
