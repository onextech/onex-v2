import React from 'react'
import { pages as commonPages } from '@onex/common'
import {
  MOCK_TECH_POST_CATEGORYS,
  MOCK_TECH_SERVICES,
  MOCK_TECH_TECHNOLOGYS,
} from '@onex/mocks'
import routeConfig from './routeConfig'

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
