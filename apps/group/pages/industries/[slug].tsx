import React from 'react'
import { IndustryPage, IndustryPageProps } from '@onex/pages'
import { IndustryDetail } from '@onex/server'
import { LandingLayout } from '@onex/layouts'

import { InferGetStaticPropsType } from 'next'
import { PageProvider } from '@onex/providers'

export const getStaticProps = IndustryDetail.getStaticProps()
export const getStaticPaths = IndustryDetail.getStaticPaths()

export interface NextIndustryPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    IndustryPageProps {}

const NextIndustryPage: React.FC<NextIndustryPageProps> = (props) => {
  const { industry, relatedPosts, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        seo={{
          title: industry.title,
          description: `Discover innovative ${industry.title.toLowerCase()} solutions with One X Group. We draw on strategic expertise and cutting-edge technology to drive growth in the industry.`,
        }}
        autoBreadcrumbs
      >
        <IndustryPage industry={industry} relatedPosts={relatedPosts} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextIndustryPage
