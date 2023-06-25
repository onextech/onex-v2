import React from 'react'
import { LandingLayout } from '@app/layouts'
import { CareersPage } from '@onex/pages'
import { MOCK_JOBS } from '@onex/mocks'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PageDetail } from '@onex/server'
import { PageProvider } from '@gravis-os/landing'

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
        seo={page.seo}
        headerProps={{
          disableBorderBottom: true,
          dark: true,
          transparent: true,
          position: 'fixed',
        }}
      >
        <CareersPage jobs={MOCK_JOBS} page={page} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextCareersPage
