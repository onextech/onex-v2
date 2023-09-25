import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@gravis-os/landing'
import { ShowcasePage, ShowcasePageProps } from '@onex/pages'
import { ShowcaseDetail } from '@onex/server'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = ShowcaseDetail.getStaticProps()
export const getStaticPaths = ShowcaseDetail.getStaticPaths()

export interface NextShowcasePageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    ShowcasePageProps {}

const NextShowcasePage: React.FC<NextShowcasePageProps> = (props) => {
  const { otherShowcases, pageProviderProps, showcase } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        autoBreadcrumbs
        seo={{ title: showcase.title, description: showcase.subtitle }}
      >
        <ShowcasePage otherShowcases={otherShowcases} showcase={showcase} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextShowcasePage
