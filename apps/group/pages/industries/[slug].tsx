import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { IndustryPage } from '@onex/pages'
import { getRelatedCrudItemsByTagTitle } from '@gravis-os/utils'
import { MOCK_GROUP_POSTS, MOCK_GROUP_INDUSTRYS } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Post, Industry } from '@onex/types'
import getDynamicPage from '@app/utils/getDynamicPage'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: MOCK_GROUP_INDUSTRYS.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = (context) => {
  const industry = MOCK_GROUP_INDUSTRYS.find(
    ({ slug }) => slug === context.params.slug
  )

  const industryPage = getDynamicPage(industry)

  const relatedPosts = getRelatedCrudItemsByTagTitle(
    MOCK_GROUP_POSTS,
    industry?.title
  ).slice(0, 3)

  return { props: { industry: industryPage, relatedPosts } }
}

export interface NextIndustryPageProps {
  industry: Industry
  relatedPosts: Post[]
}

const NextIndustryPage: React.FC<NextIndustryPageProps> = (props) => {
  const { industry, relatedPosts } = props
  return (
    <LandingLayout seo={industry.seo} autoBreadcrumbs>
      <IndustryPage industry={industry} relatedPosts={relatedPosts} />
    </LandingLayout>
  )
}

export default NextIndustryPage
