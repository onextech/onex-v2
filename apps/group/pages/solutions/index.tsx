import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@onex/landing'
import { SolutionsPage, SolutionsPageProps } from '@onex/pages'
import { SolutionList } from '@onex/server'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = SolutionList.getStaticProps()

export interface NextSolutionsPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    SolutionsPageProps {}

const NextSolutionsPage: React.FC<NextSolutionsPageProps> = (props) => {
  const { pageProviderProps, solutions } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        seo={{
          title: 'Solutions',
          description:
            'Discover our innovative solutions designed to transform your business operations and enhance customer experiences through AI and automation.',
        }}
      >
        <SolutionsPage solutions={solutions} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextSolutionsPage
