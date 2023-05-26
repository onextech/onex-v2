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
          description: `Discover how One X Design revolutionizes ${industry.title.toLowerCase()} with unique design solutions. Explore insights and stay ahead in the market.`,
        }}
        autoBreadcrumbs
      >
        <IndustryPage industry={industry} relatedPosts={relatedPosts} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextIndustryPage
