import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { LegalPage } from '@onex/pages'
import { legalPages } from '@onex/common'
import { useRouter } from 'next/router'

export interface NextCookiesPageProps {}

const NextCookiesPage: React.FC<NextCookiesPageProps> = () => {
  const router = useRouter()
  const { title, html } = legalPages.find(({ slug }) => slug === router.asPath)
  const legalPageProps = { title, html }

  return (
    <LandingLayout seo={{ title: 'Cookies' }}>
      <LegalPage {...legalPageProps} />
    </LandingLayout>
  )
}

export default NextCookiesPage
