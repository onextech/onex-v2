import type { Service, ServiceCategory } from '@onex/types'

import React from 'react'

import {
  Blocks,
  RenderPostBlockItemProps,
  renderServiceBlockItem,
  renderServicesBlockItem,
  useLayout,
} from '@onex/landing'

export interface ServiceCategoryPageProps {
  otherServiceCategorys?: ServiceCategory[]
  serviceCategory: ServiceCategory
  services: Service[]
}

const ServiceCategoryPage: React.FC<ServiceCategoryPageProps> = (props) => {
  const { otherServiceCategorys, serviceCategory, services } = props
  const { routeConfig } = useLayout()

  if (!serviceCategory) return null

  const { title, hero_alt, hero_src, subtitle } = serviceCategory

  return (
    <Blocks
      items={[
        {
          id: 'hero',
          items: [
            {
              title,
              type: 'h1',
            },
            {
              title: subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
                sx: { mt: 2 },
              },
              type: 'subtitle1',
            },
          ],
          py: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
        },
        {
          id: 'background-nodes',
          backgroundImageProps: {
            alt: hero_alt,
            backgroundHeight: { xs: 240, md: 320 },
            src: hero_src,
          },
          py: 0,
        },
        {
          id: 'services',
          items: [renderServicesBlockItem({ items: services })],
          pt: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
        },
        {
          id: 'related-service-categorys',
          items: [
            {
              title: 'Other Service Categories',
              titleProps: { sx: { mb: { xs: 3, md: 5 } } },
              type: 'h4',
            },
            {
              gridItems: otherServiceCategorys?.map((otherServiceCategory) =>
                renderServiceBlockItem({
                  item: {
                    href: `${routeConfig.SERVICES}/${otherServiceCategory.slug}`,
                    ...(otherServiceCategory as RenderPostBlockItemProps['item']),
                  },
                })
              ),
              type: 'grid',
            },
          ],
          py: { xs: 5, md: 10 },
        },
      ]}
    />
  )
}

export default ServiceCategoryPage
