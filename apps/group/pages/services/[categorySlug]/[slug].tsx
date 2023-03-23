import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ServicePage } from '@onex/pages'
import {
  getCategoryFromCrudItem,
  getRelatedCrudItemsByTagTitle,
} from '@gravis-os/utils'
import {
  MOCK_GROUP_POSTS,
  MOCK_GROUP_SERVICES,
  MOCK_GROUP_SERVICE_CATEGORYS,
} from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Post, Service, ServiceCategory } from '@onex/types'
import getDynamicPage from '@app/utils/getDynamicPage'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: MOCK_GROUP_SERVICES.map(({ slug, category }) => ({
      params: { slug, categorySlug: category.slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = (context) => {
  const service = MOCK_GROUP_SERVICES.find(
    ({ slug }) => slug === context.params.slug
  )

  const servicePage = getDynamicPage(service)

  const serviceCategory = getCategoryFromCrudItem(
    service,
    MOCK_GROUP_SERVICE_CATEGORYS
  )
  const relatedServices = MOCK_GROUP_SERVICES.filter(
    ({ category_id }) => category_id === service?.category_id
  )

  const relatedPosts = getRelatedCrudItemsByTagTitle(
    MOCK_GROUP_POSTS,
    service?.title
  ).slice(0, 3)

  return {
    props: {
      service: servicePage,
      serviceCategory,
      relatedServices,
      relatedPosts,
    },
  }
}

export interface NextServicePageProps {
  service: Service
  relatedPosts: Post[]
  relatedServices: Service[]
  serviceCategory: ServiceCategory
}

const NextServicePage: React.FC<NextServicePageProps> = (props) => {
  const { service, serviceCategory, relatedServices, relatedPosts } = props
  return (
    <LandingLayout seo={service.seo} autoBreadcrumbs>
      <ServicePage
        service={service}
        serviceCategory={serviceCategory}
        relatedServices={relatedServices}
        relatedPosts={relatedPosts}
      />
    </LandingLayout>
  )
}

export default NextServicePage
