import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@gravis-os/landing'
import { ResourcePageProps, ResourceSuccessPage } from '@onex/pages'
import { ResourceDetail } from '@onex/server'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = ResourceDetail.getStaticProps()
export const getStaticPaths = ResourceDetail.getStaticPaths()

export interface NextResourceSuccessPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    ResourcePageProps {}

const NextResourceSuccessPage: React.FC<NextResourceSuccessPageProps> = (
  props
) => {
  const { pageProviderProps, relatedResources, resource } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={{ title: `${resource.title} Registration Success` }}>
        <ResourceSuccessPage
          relatedResources={relatedResources}
          resource={resource}
        />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextResourceSuccessPage
