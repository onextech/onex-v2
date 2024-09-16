import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@onex/landing'
import { TechnologysPage, TechnologysPageProps } from '@onex/pages'
import { TechnologyList } from '@onex/server'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = TechnologyList.getStaticProps()

export interface NextTechnologysPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    TechnologysPageProps {}

const NextTechnologysPage: React.FC<NextTechnologysPageProps> = (props) => {
  const { pageProviderProps, technologys } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        seo={{
          title: 'Technologies',
          description:
            'Unlock enterprise potential with cutting-edge technologies like JavaScript, React, and Node.js for scalable, dynamic, user-friendly frontend solutions.',
        }}
      >
        <TechnologysPage technologys={technologys} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextTechnologysPage
