import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { TechnologyPage, TechnologyPageProps } from '@onex/pages'
import { TechnologyDetail } from '@onex/server'
import configs from '@app/configs'

export const getStaticProps = TechnologyDetail.getStaticProps({ configs })
export const getStaticPaths = TechnologyDetail.getStaticPaths()

export interface NextTechnologyPageProps extends TechnologyPageProps {}

const NextTechnologyPage: React.FC<NextTechnologyPageProps> = (props) => {
  const { technology, relatedPosts } = props
  return (
    <LandingLayout seo={technology.seo} autoBreadcrumbs>
      <TechnologyPage technology={technology} relatedPosts={relatedPosts} />
    </LandingLayout>
  )
}

export default NextTechnologyPage
