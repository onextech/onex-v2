import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { ResourcePageProps, ResourceSuccessPage } from '@onex/pages'

import { ResourceDetail, ResourceList } from '@onex/server'
import { PageProvider } from '@onex/providers'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = ResourceDetail.getStaticProps(true)
export const getStaticPaths = ResourceDetail.getStaticPaths()

export interface NextResourceSuccessPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    ResourcePageProps {}

const NextResourceSuccessPage: React.FC<NextResourceSuccessPageProps> = (props) => {
  const { resource, relatedResources, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={{ title: 'Thank You' }}>
        <ResourceSuccessPage resource={resource} relatedResources={relatedResources} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextResourceSuccessPage
