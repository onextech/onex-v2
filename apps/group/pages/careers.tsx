import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { CareersPage } from '@onex/pages'
import { MOCK_JOBS } from '@onex/mocks'
import { InferGetStaticPropsType, GetStaticProps } from 'next'
import { makeGetStaticProps } from '@onex/server'
import { PageProvider } from '@onex/providers'

export const getStaticProps: GetStaticProps = makeGetStaticProps()

export interface NextCareersPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const NextCareersPage: React.FC<NextCareersPageProps> = (props) => {
  const { pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        seo={{ title: 'Careers' }}
        headerProps={{
          disableBorderBottom: true,
          dark: true,
          transparent: true,
          position: 'fixed',
        }}
      >
        <CareersPage jobs={MOCK_JOBS} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextCareersPage
