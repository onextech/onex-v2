import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { TechPage, TechPageProps } from '@onex/pages'
import { MOCK_TECH_PAGE, MOCK_TECH_SHOWCASES } from '@onex/mocks'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getDynamicPage } from '@onex/server'
import configs from '@app/configs'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const tech = getDynamicPage(MOCK_TECH_PAGE, configs)
  const showcases = MOCK_TECH_SHOWCASES
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      tech,
      showcases,
    },
  }
}

export interface NextTechPageProps
  extends TechPageProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const NextTechPage: React.FC<NextTechPageProps> = (props) => {
  const { tech, showcases } = props

  return (
    <LandingLayout seo={tech.seo} darkHeader>
      <TechPage tech={tech} showcases={showcases || MOCK_TECH_SHOWCASES} />
    </LandingLayout>
  )
}

export default NextTechPage
