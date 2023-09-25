import type { Service, ServiceCategory } from '@gravis-os/types'

import React from 'react'

import {
  Blocks,
  renderHeroWithBackgroundBlock,
  useLayout,
} from '@gravis-os/landing'
import { getCategoryWithItemsAndHref } from '@gravis-os/utils'
import chunk from 'lodash/chunk'

export interface AtlasServiceCategorysPageProps {
  serviceCategorys: ServiceCategory[]
  services: Service[]
}

const AtlasServiceCategorysPage: React.FC<AtlasServiceCategorysPageProps> = (
  props
) => {
  const { serviceCategorys, services } = props
  const { routeConfig } = useLayout()

  const categoryWithServices = getCategoryWithItemsAndHref<
    Service,
    ServiceCategory
  >(services, serviceCategorys, routeConfig.SERVICES)

  const categoryWithServicesChunks = chunk(categoryWithServices, 2)

  return (
    <Blocks
      items={[
        renderHeroWithBackgroundBlock({
          title:
            'We build transformative digital health products with amazing healthcare companies.',
          center: true,
          dark: false,
          py: 20,
          sx: {
            '& h1': {
              fontSize: '3rem',
              lineHeight: '4rem',
            },
          },
        }),
        renderHeroWithBackgroundBlock({
          title:
            'We navigate, design and deliver medical websites, mobile applications, and data dashboards that are used globally by millions of users every day.',
          center: true,
          dark: true,
          py: 20,
          sx: {
            '& h1': {
              fontSize: '2rem',
              lineHeight: '3rem',
            },
          },
        }),
        renderHeroWithBackgroundBlock({
          title: 'Next Generation Digital Health',
          buttonProps: {
            title: 'Our Work',
            href: routeConfig.SHOWCASES,
            sx: { mt: 4 },
          },
          center: true,
          dark: false,
          py: 20,
          subtitle:
            "We've work with clients to build, iterate and launch digital health products in consumer health education, medical data, health equity, Pharma SaaS, healthcare financing, community wellness, provider management, specialty care and more.",
          sx: {
            '& h1': {
              fontSize: '3rem',
              lineHeight: '4rem',
            },
            '& h2': {
              fontSize: '2rem',
              lineHeight: '3rem',
            },
          },
        }),
      ]}
    />
  )
}

export default AtlasServiceCategorysPage
