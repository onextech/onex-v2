import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { ResourcesPage, ResourcesPageProps } from '@onex/pages'
import { Resource } from '@onex/types'
import { ResourceList } from '@onex/server'
import { PageProvider } from '@onex/providers'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = ResourceList.getStaticProps()

export interface NextResourcesPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    ResourcesPageProps {
  resources: Resource[]
}

const NextResourcesPage: React.FC<NextResourcesPageProps> = (props) => {
  const { resources, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout seo={{ title: 'Resources' }}>
        <ResourcesPage resources={resources} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextResourcesPage
