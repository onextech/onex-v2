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
  const { locale, asPath } = useRouter()
  const currentLocale = site?.locales?.find(
    (siteLocale) => siteLocale.key === (locale || '')
  )

  // Build FAQ Schema from service FAQs
  const faqItems = service?.sections?.faqs?.items || []
  const faqSchema =
    faqItems.length > 0
      ? {
          '@type': 'FAQPage',
          mainEntity: faqItems.map(
            (faq: { content: string; title: string }) => ({
              '@type': 'Question',
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.content,
              },
              name: faq.title,
            })
          ),
        }
      : undefined

  // Build Service Schema
  const serviceSchema = {
    '@type': 'Service',
    areaServed: {
      '@type': 'Country',
      name: currentLocale?.title || 'Singapore',
    },
    description:
      service.seo?.description ||
      `Leverage our expert ${
        service.category?.title?.toLowerCase() || 'professional'
      } team. Get a free consultation today.`,
    name: `${service.title} ${currentLocale?.title || ''}`.trim(),
    provider: {
      '@type': 'Organization',
      name: site?.company_title || 'One X Group',
      url: site?.absolute_url,
    },
    url: `${site?.absolute_url}${asPath}`,
  }

  // Combine schemas
  const jsonLd = [serviceSchema, faqSchema].filter(Boolean) as Record<
    string,
    unknown
  >[]

  return (
    <PageProvider {...pageProviderProps}>
      <LandingLayout
        autoBreadcrumbs
        footerProps={{ disableCallout: true }}
        jsonLd={jsonLd}
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
