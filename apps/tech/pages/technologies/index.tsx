import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { TechnologysPage, TechnologysPageProps } from '@onex/pages'
import { TechnologyList } from '@onex/server'
import configs from '@app/configs'
import { InferGetStaticPropsType } from 'next'
import { PageProvider } from '@onex/providers'

export const getStaticProps = TechnologyList.getStaticProps({ configs })

export interface NextTechnologysPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    TechnologysPageProps {}

const NextTechnologysPage: React.FC<NextTechnologysPageProps> = (props) => {
  const { technologys, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={{ title: 'Technologies' }}>
        <TechnologysPage technologys={technologys} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextTechnologysPage
