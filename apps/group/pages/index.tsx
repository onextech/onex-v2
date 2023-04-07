import React from 'react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import LandingLayout from '@app/layouts/LandingLayout'
import { AboutPage } from '@onex/pages'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer'])),
  },
})

export interface NextHomePageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const NextHomePage: React.FC<NextHomePageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Home' }} darkHeader>
      <AboutPage />
    </LandingLayout>
  )
}

export default NextHomePage
