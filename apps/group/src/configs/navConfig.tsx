import React from 'react'
import { pages as commonPages } from '@onex/common'
import {
  MOCK_GROUP_SERVICE_CATEGORYS,
  MOCK_GROUP_SERVICES,
  MOCK_GROUP_INDUSTRYS,
  MOCK_GROUP_POST_CATEGORYS,
} from '@onex/mocks'
import { getCrudItemsByCategory } from '@gravis-os/utils'
import routeConfig from './routeConfig'

const MOCK_GROUP_SERVICES_BY_CATEGORY = getCrudItemsByCategory(
  MOCK_GROUP_SERVICES,
  MOCK_GROUP_SERVICE_CATEGORYS
)

export const services = MOCK_GROUP_SERVICES_BY_CATEGORY.map((service) => ({
  ...service,
  href: `${routeConfig.SERVICES}/${service.slug}`,
  items: service.items.map((item) => ({
    ...item,
    href: `${routeConfig.SERVICES}/${item.slug}`,
  })),
}))

export const postCategorys = MOCK_GROUP_POST_CATEGORYS.map((postCategory) => ({
  ...postCategory,
  href: `${routeConfig.POSTS}/${postCategory.slug}`,
}))

export const industries = MOCK_GROUP_INDUSTRYS.map((industry) => ({
  ...industry,
  href: `${routeConfig.INDUSTRIES}/${industry.slug}`,
}))

export const pages = commonPages
