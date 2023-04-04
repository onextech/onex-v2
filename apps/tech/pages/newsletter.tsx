import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { NewsletterPage } from '@onex/pages'

export interface NextNewsletterPageProps {}

const NextNewsletterPage: React.FC<NextNewsletterPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Newsletter' }}>
      <NewsletterPage title="Join 5,329 business owners discovering new ideas." />
    </LandingLayout>
  )
}

export default NextNewsletterPage
