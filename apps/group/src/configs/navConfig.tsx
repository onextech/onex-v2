import React from 'react'
import { pages as commonPages } from '@onex/common'
import {
  MOCK_GROUP_SERVICE_CATEGORYS,
  MOCK_GROUP_SERVICES,
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

export const industries = [
  {
    title: 'Financial Services',
    subtitle:
      'Support in cloud adoption and automation for startups and finance institutions.',
    slug: 'financial-services',
  },
  {
    title: 'Government',
    subtitle:
      'Support in cloud adoption and automation for startups and finance institutions.',
    slug: 'government-public-sectors',
  },
  {
    title: 'Maritime',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    slug: 'maritime',
  },
  {
    title: 'Real Estate',
    subtitle: 'Let certified engineers kick-start your cloud operations',
    slug: 'real-estate',
  },
].map((industry) => ({
  ...industry,
  href: `${routeConfig.INDUSTRIES}/${industry.slug}`,
}))

export const pages = commonPages
