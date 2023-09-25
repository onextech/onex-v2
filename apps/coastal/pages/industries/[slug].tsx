import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@gravis-os/landing'
import { IndustryPage, IndustryPageProps } from '@onex/pages'
import { IndustryDetail } from '@onex/server'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = IndustryDetail.getStaticProps()
export const getStaticPaths = IndustryDetail.getStaticPaths()

export interface NextIndustryPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    IndustryPageProps {}

const NextIndustryPage: React.FC<NextIndustryPageProps> = (props) => {
  const { industry, pageProviderProps, relatedPosts } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout autoBreadcrumbs seo={industry.seo}>
        <IndustryPage industry={industry} relatedPosts={relatedPosts} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextIndustryPage
