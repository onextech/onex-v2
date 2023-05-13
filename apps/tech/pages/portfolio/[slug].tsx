import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { ShowcasePage, ShowcasePageProps } from '@onex/pages'
import { ShowcaseDetail } from '@onex/server'
import { PageProvider } from '@onex/providers'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = ShowcaseDetail.getStaticProps()
export const getStaticPaths = ShowcaseDetail.getStaticPaths()

export interface NextShowcasePageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    ShowcasePageProps {}

const NextShowcasePage: React.FC<NextShowcasePageProps> = (props) => {
  const { showcase, otherShowcases, pageProviderProps } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        seo={{ title: showcase.title, description: showcase.subtitle }}
        autoBreadcrumbs
      >
        <ShowcasePage showcase={showcase} otherShowcases={otherShowcases} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextShowcasePage
