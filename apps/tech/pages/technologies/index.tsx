import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { TechnologysPage, TechnologysPageProps } from '@onex/pages'
import { TechnologyList } from '@onex/server'

import { InferGetStaticPropsType } from 'next'
import { PageProvider } from '@onex/providers'

export const getStaticProps = TechnologyList.getStaticProps()

export interface NextTechnologysPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    TechnologysPageProps {}

const NextTechnologysPage: React.FC<NextTechnologysPageProps> = (props) => {
  const { technologys, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        seo={{
          title: 'Technologies',
          description:
            'This page showcases the cutting-edge technologies we use for future-proof solutions, including JavaScript, TypeScript, React and Node.js',
        }}
      >
        <TechnologysPage technologys={technologys} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextTechnologysPage
