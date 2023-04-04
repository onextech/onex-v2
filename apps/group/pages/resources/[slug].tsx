import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ResourcePage, ResourcePageProps } from '@onex/pages'
import configs from '@app/configs'
import { ResourceDetail } from '@onex/modules'

export const getStaticProps = ResourceDetail.getStaticProps({ configs })
export const getStaticPaths = ResourceDetail.getStaticPaths()

export interface NextResourcePageProps extends ResourcePageProps {}

const NextResourcePage: React.FC<NextResourcePageProps> = (props) => {
  const { resource } = props
  return (
    <LandingLayout seo={resource.seo}>
      <ResourcePage resource={resource} />
    </LandingLayout>
  )
}

export default NextResourcePage
