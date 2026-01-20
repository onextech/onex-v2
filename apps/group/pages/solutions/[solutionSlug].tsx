import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@onex/landing'
import { SolutionPage, SolutionPageProps } from '@onex/pages'
import { SolutionDetail } from '@onex/server'
import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

export const getStaticProps = SolutionDetail.getStaticProps()
export const getStaticPaths = SolutionDetail.getStaticPaths()

export interface NextSolutionPageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    SolutionPageProps {}

const NextSolutionPage: React.FC<NextSolutionPageProps> = (props) => {
  const { pageProviderProps, relatedPosts, solution } = props
  const { site } = pageProviderProps.layoutProviderProps
  const { locale } = useRouter()
  const currentLocale = site?.locales?.find(
    (siteLocale) => siteLocale.key === (locale || '')
  )

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        autoBreadcrumbs
        seo={{
          title: `${solution.title} ${currentLocale?.title || ''}`.trim(),
          description: solution.seo?.description,
        }}
      >
        <SolutionPage relatedPosts={relatedPosts} solution={solution} />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextSolutionPage
