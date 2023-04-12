import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { ResourcePage, ResourcePageProps } from '@onex/pages'
import configs from '@app/configs'
import { ResourceDetail } from '@onex/server'
import { PageProvider } from '@onex/providers'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = ResourceDetail.getStaticProps({ configs })
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
