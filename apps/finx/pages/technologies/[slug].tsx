import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { TechnologyPage, TechnologyPageProps } from '@onex/pages'
import { TechnologyDetail } from '@onex/server'
import { PageProvider } from '@gravis-os/landing'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = TechnologyDetail.getStaticProps()
export const getStaticPaths = TechnologyDetail.getStaticPaths()

export interface NextTechnologyPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    TechnologyPageProps {}

const NextTechnologyPage: React.FC<NextTechnologyPageProps> = (props) => {
  const { technology, relatedPosts, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={technology.seo} autoBreadcrumbs>
        <TechnologyPage technology={technology} relatedPosts={relatedPosts} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextTechnologyPage
