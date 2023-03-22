import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { TechnologyPage } from '@onex/pages'
import { getRelatedCrudItemsByTagTitle } from '@gravis-os/utils'
import { MOCK_TECH_POSTS, MOCK_TECH_TECHNOLOGYS } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Post, Technology } from '@onex/types'
import getDynamicPage from '@app/utils/getDynamicPage'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: MOCK_TECH_TECHNOLOGYS.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = (context) => {
  const technology = MOCK_TECH_TECHNOLOGYS.find(
    ({ slug }) => slug === context.params.slug
  )

  const technologyPage = getDynamicPage(technology)

  const relatedPosts = getRelatedCrudItemsByTagTitle(
    MOCK_TECH_POSTS,
    technology?.title
  ).slice(0, 3)

  return { props: { technology: technologyPage, relatedPosts } }
}

export interface NextTechnologyPageProps {
  technology: Technology
  relatedPosts: Post[]
}

const NextTechnologyPage: React.FC<NextTechnologyPageProps> = (props) => {
  const { technology, relatedPosts } = props
  return (
    <LandingLayout seo={technology.seo} autoBreadcrumbs>
      <TechnologyPage technology={technology} relatedPosts={relatedPosts} />
    </LandingLayout>
  )
}

export default NextTechnologyPage
