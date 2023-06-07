import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { ShowcasesPage, ShowcasesPageProps } from '@onex/pages'
import { ShowcaseList } from '@onex/server'
import { PageProvider } from '@onex/providers'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = ShowcaseList.getStaticProps()

export interface NextShowcasesPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    ShowcasesPageProps {}

const NextShowcasesPage: React.FC<NextShowcasesPageProps> = (props) => {
  const { showcases, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        seo={{
          title: 'Showcases',
          description:
            'Explore our portfolio of successful digital transformation projects. Invest with confidence in emerging technologies.',
        }}
      >
        <ShowcasesPage showcases={showcases} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextShowcasesPage
