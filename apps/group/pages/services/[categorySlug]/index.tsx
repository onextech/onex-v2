import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { ServiceCategoryPage } from '@onex/pages'
import { MOCK_GROUP_SERVICE_CATEGORYS, MOCK_GROUP_SERVICES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Service, ServiceCategory } from '@onex/types'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: MOCK_GROUP_SERVICE_CATEGORYS.map(({ slug }) => ({
      params: { categorySlug: slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = (context) => {
  const serviceCategory = MOCK_GROUP_SERVICE_CATEGORYS.find(
    ({ slug }) => slug === context.params.categorySlug
  )
  const services = MOCK_GROUP_SERVICES.filter(
    ({ category_id }) => category_id === serviceCategory?.id
  )
  const otherServiceCategorys = MOCK_GROUP_SERVICE_CATEGORYS.filter(
    ({ id }) => id !== serviceCategory?.id
  ).slice(0, 3)

  return {
    props: {
      serviceCategory,
      services,
      otherServiceCategorys,
    },
  }
}

export interface NextServicesPageProps {
  serviceCategory: ServiceCategory
  otherServiceCategorys: ServiceCategory[]
  services: Service[]
}

const NextServicesPage: React.FC<NextServicesPageProps> = (props) => {
  const { serviceCategory, services, otherServiceCategorys } = props

  return (
    <LandingLayout
      seo={{
        title: serviceCategory.title,
        description: serviceCategory.subtitle,
      }}
      autoBreadcrumbs
    >
      <ServiceCategoryPage
        serviceCategory={serviceCategory}
        otherServiceCategorys={otherServiceCategorys}
        services={services}
      />
    </LandingLayout>
  )
}

export default NextServicesPage
