import React from 'react'
import { IndustryPage, IndustryPageProps } from '@onex/pages'
import { IndustryDetail } from '@onex/server'
import { LandingLayout } from '@app/layouts'

import { InferGetStaticPropsType } from 'next'
import { PageProvider } from '@gravis-os/landing'

export const getStaticProps = IndustryDetail.getStaticProps()
export const getStaticPaths = IndustryDetail.getStaticPaths()

export interface NextIndustryPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    IndustryPageProps {}

const NextIndustryPage: React.FC<NextIndustryPageProps> = (props) => {
  const { industry, relatedPosts, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={industry.seo} autoBreadcrumbs>
        <IndustryPage industry={industry} relatedPosts={relatedPosts} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextIndustryPage
