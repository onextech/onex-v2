import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@onex/landing'
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
      <LandingLayout
        autoBreadcrumbs
        seo={{
          title: industry.title,
          description: `Discover innovative ${industry.title.toLowerCase()} solutions with One X Group. We draw on strategic expertise and cutting-edge technology to drive growth in the industry.`,
        }}
      >
        <IndustryPage industry={industry} relatedPosts={relatedPosts} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextIndustryPage
