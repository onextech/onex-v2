import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@gravis-os/landing'
import { TechnologyPage, TechnologyPageProps } from '@onex/pages'
import { TechnologyDetail } from '@onex/server'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = TechnologyDetail.getStaticProps()
export const getStaticPaths = TechnologyDetail.getStaticPaths()

export interface NextTechnologyPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    TechnologyPageProps {}

const NextTechnologyPage: React.FC<NextTechnologyPageProps> = (props) => {
  const { pageProviderProps, relatedPosts, technology } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout autoBreadcrumbs seo={technology.seo}>
        <TechnologyPage relatedPosts={relatedPosts} technology={technology} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextTechnologyPage
