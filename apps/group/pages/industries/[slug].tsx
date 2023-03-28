import React from 'react'
import { IndustryPage, IndustryPageProps } from '@onex/pages'
import { IndustryDetail } from '@onex/modules'
import LandingLayout from '@app/layouts/LandingLayout'
import configs from '@app/configs'

export const getStaticProps = IndustryDetail.getStaticProps({ configs })
export const getStaticPaths = IndustryDetail.getStaticPaths()

export interface NextIndustryPageProps extends IndustryPageProps {}

const NextIndustryPage: React.FC<NextIndustryPageProps> = (props) => {
  const { industry, relatedPosts } = props
  return (
    <LandingLayout seo={industry.seo} autoBreadcrumbs>
      <IndustryPage industry={industry} relatedPosts={relatedPosts} />
    </LandingLayout>
  )
}

export default NextIndustryPage
