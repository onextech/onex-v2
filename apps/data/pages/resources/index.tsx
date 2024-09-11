import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@onex/landing'
import { ResourcesPage, ResourcesPageProps } from '@onex/pages'
import { ResourceList } from '@onex/server'
import { Resource } from '@onex/types'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = ResourceList.getStaticProps()

export interface NextResourcesPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    ResourcesPageProps {
  resources: Resource[]
}

const NextResourcesPage: React.FC<NextResourcesPageProps> = (props) => {
  const { pageProviderProps, resources } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        seo={{
          title: 'Resources',
          description:
            'Unlock the key to business success with our comprehensive collection of resources.',
        }}
      >
        <ResourcesPage resources={resources} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextResourcesPage
