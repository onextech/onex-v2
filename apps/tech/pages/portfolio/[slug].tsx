import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ShowcasePage } from '@onex/pages'
import { MOCK_SHOWCASES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Showcase } from '@onex/types'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: MOCK_SHOWCASES.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = (context) => {
  const showcase = MOCK_SHOWCASES.find(
    ({ slug }) => slug === context.params.slug
  )

  return { props: { showcase } }
}

export interface NextShowcasePageProps {
  showcase: Showcase
}

const NextShowcasePage: React.FC<NextShowcasePageProps> = (props) => {
  const { showcase } = props
  return (
    <LandingLayout seo={{ title: showcase.title, description: showcase.subtitle }} autoBreadcrumbs>
      <ShowcasePage showcase={showcase} />
    </LandingLayout>
  )
}

export default NextShowcasePage
