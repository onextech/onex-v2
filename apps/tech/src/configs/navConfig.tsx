import React from 'react'
import { pages as commonPages } from '@onex/common'
import {
  MOCK_TECH_SERVICE_CATEGORYS,
  MOCK_TECH_ADVANCED_SERVICES,
  MOCK_TECH_POST_CATEGORYS,
  MOCK_TECH_SERVICES,
  MOCK_TECH_TECHNOLOGYS,
} from '@onex/mocks'
import { getCrudItemsByCategory } from '@gravis-os/utils'
import routeConfig from './routeConfig'

const MOCK_TECH_SERVICES_BY_CATEGORY = getCrudItemsByCategory(
  MOCK_TECH_ADVANCED_SERVICES,
  MOCK_TECH_SERVICE_CATEGORYS
)

export const serviceCategorys = MOCK_TECH_SERVICES_BY_CATEGORY.map(
  (service) => ({
    ...service,
    href: `${routeConfig.SERVICES}/${service.slug}`,
    items: service.items.map((item) => ({
      ...item,
      href: `${routeConfig.SERVICES}/${service.slug}/${item.slug}`,
    })),
  })
)

export const services = MOCK_TECH_SERVICES.map((service) => ({
  ...service,
  href: `${routeConfig.SERVICES}/${service.slug}`,
}))

export const postCategorys = MOCK_TECH_POST_CATEGORYS.map((postCategory) => ({
  ...postCategory,
  href: `${routeConfig.POSTS}/${postCategory.slug}`,
}))

export const technologies = MOCK_TECH_TECHNOLOGYS.map((technology) => ({
  ...technology,
  href: `${routeConfig.TECHNOLOGIES}/${technology.slug}`,
}))

export const pages = commonPages
