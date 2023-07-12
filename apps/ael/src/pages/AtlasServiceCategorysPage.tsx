import React from 'react'
import {
  Blocks,
  renderHeroWithBackgroundBlock,
  useLayout,
} from '@gravis-os/landing'
import { getCategoryWithItemsAndHref } from '@gravis-os/utils'
import type { Service, ServiceCategory } from '@gravis-os/types'
import chunk from 'lodash/chunk'

export interface AtlasServiceCategorysPageProps {
  services: Service[]
  serviceCategorys: ServiceCategory[]
}

const AtlasServiceCategorysPage: React.FC<AtlasServiceCategorysPageProps> = (
  props
) => {
  const { services, serviceCategorys } = props
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
          dark: true,
          center: true,
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
          subtitle:
            "We've work with clients to build, iterate and launch digital health products in consumer health education, medical data, health equity, Pharma SaaS, healthcare financing, community wellness, provider management, specialty care and more.",
          dark: false,
          center: true,
          py: 20,
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
          buttonProps: {
            title: 'Our Work',
            sx: { mt: 4 },
            href: routeConfig.SHOWCASES,
          },
        }),
      ]}
    />
  )
}

export default AtlasServiceCategorysPage
