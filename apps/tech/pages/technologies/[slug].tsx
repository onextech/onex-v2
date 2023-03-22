import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { TechnologyPage } from '@onex/pages'
import { getRelatedCrudItemsByTagTitle } from '@gravis-os/utils'
import { useRouter } from 'next/router'
import { MOCK_TECH_POSTS, MOCK_TECH_TECHNOLOGYS } from '@onex/mocks'

export interface NextTechnologyPageProps {}

const NextTechnologyPage: React.FC<NextTechnologyPageProps> = () => {
  const { query } = useRouter()

  const technology = MOCK_TECH_TECHNOLOGYS.find(
    ({ slug }) => slug === query.slug
  )

  const relatedPosts = getRelatedCrudItemsByTagTitle(
    MOCK_TECH_POSTS,
    technology?.title
  ).slice(0, 3)

  return (
    <LandingLayout seo={{ title: 'Technologies' }} autoBreadcrumbs>
      <TechnologyPage technology={technology} relatedPosts={relatedPosts} />
    </LandingLayout>
  )
}

export default NextTechnologyPage
