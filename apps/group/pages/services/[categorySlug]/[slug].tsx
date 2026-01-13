import React from 'react'

import { LandingLayout } from '@app/layouts'
import { PageProvider } from '@onex/landing'
import { ServicePage, ServicePageProps } from '@onex/pages'
import { ServiceDetail } from '@onex/server'
import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

export const getStaticProps = ServiceDetail.getStaticProps()
export const getStaticPaths = ServiceDetail.getStaticPaths()

export interface NextServicePageProps
  extends InferGetStaticPropsType<typeof getStaticProps>,
    ServicePageProps {}

const NextServicePage: React.FC<NextServicePageProps> = (props) => {
  const {
    pageProviderProps,
    relatedPosts,
    relatedServices,
    service,
    serviceCategory,
    showcases,
  } = props
  const { site } = pageProviderProps.layoutProviderProps
  const { locale } = useRouter()
  const currentLocale = site?.locales?.find(
    (siteLocale) => siteLocale.key === (locale || '')
  )
  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        autoBreadcrumbs
        footerProps={{ disableCallout: true }}
        seo={{
          title: `${service.title} ${currentLocale?.title}`,
          description: `${service.title} services in ${currentLocale?.title}. ${
            service.seo?.description ||
            `Leverage our expert ${service.category.title.toLowerCase()} team. Get a free consultation today.`
          }`,
        }}
      >
        <ServicePage
          relatedPosts={relatedPosts}
          relatedServices={relatedServices}
          service={service}
          serviceCategory={serviceCategory}
          showcases={showcases}
        />
      </LandingLayout>
    </PageProvider>
  )
}

export default NextServicePage
