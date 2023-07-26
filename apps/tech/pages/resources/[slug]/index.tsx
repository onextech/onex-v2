import React from 'react'
import { LandingLayout } from '@app/layouts'
import { ResourcePage, ResourcePageProps } from '@onex/pages'

import { ResourceDetail } from '@onex/server'
import { PageProvider } from '@gravis-os/landing'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = ResourceDetail.getStaticProps()
export const getStaticPaths = ResourceDetail.getStaticPaths()

export interface NextResourcePageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    ResourcePageProps {}

const NextResourcePage: React.FC<NextResourcePageProps> = (props) => {
  const { resource, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={resource.seo}>
        <ResourcePage resource={resource} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextResourcePage
