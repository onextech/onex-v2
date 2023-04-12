import React from 'react'
import { LandingLayout } from '@onex/layouts'
import { ShowcasePage, ShowcasePageProps } from '@onex/pages'
import { ShowcaseDetail } from '@onex/server'
import configs from '@app/configs'
import { PageProvider } from '@onex/providers'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = ShowcaseDetail.getStaticProps({ configs })
export const getStaticPaths = ShowcaseDetail.getStaticPaths()

export interface NextShowcasePageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    ShowcasePageProps {}

const NextShowcasePage: React.FC<NextShowcasePageProps> = (props) => {
  const { showcase, pageProviderProps } = props

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        seo={{ title: showcase.title, description: showcase.subtitle }}
        autoBreadcrumbs
      >
        <ShowcasePage showcase={showcase} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextShowcasePage
