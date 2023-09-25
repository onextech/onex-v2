import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@gravis-os/landing'
import { MOCK_JOBS } from '@onex/mocks'
import { CareersPage } from '@onex/pages'
import { PageDetail } from '@onex/server'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps = PageDetail.getStaticProps({
  slug: 'careers',
})

export interface NextCareersPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const NextCareersPage: React.FC<NextCareersPageProps> = (props) => {
  const { page, pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        headerProps={{
          dark: true,
          disableBorderBottom: true,
          position: 'fixed',
          transparent: true,
        }}
        seo={page.seo}
      >
        <CareersPage jobs={MOCK_JOBS} page={page} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextCareersPage
