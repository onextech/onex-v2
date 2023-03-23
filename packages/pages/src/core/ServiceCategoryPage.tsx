import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Service, ServiceCategory } from '@onex/types'
import {
  RenderPostBlockItemProps,
  renderServiceBlockItem,
  renderServicesBlockItem,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface ServiceCategoryPageProps {
  services: Service[]
  serviceCategory: ServiceCategory
  otherServiceCategorys?: ServiceCategory[]
}

const ServiceCategoryPage: React.FC<ServiceCategoryPageProps> = (props) => {
  const { services, serviceCategory, otherServiceCategorys } = props
  const { routeConfig } = useLayout()

  if (!serviceCategory) return null

  const { title, subtitle } = serviceCategory

  return (
    <Blocks
      items={[
        {
          key: 'hero',
          py: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
          items: [
            { type: 'overline', title: 'Service Category' },
            {
              type: 'h1',
              title,
            },
            {
              type: 'subtitle1',
              title: subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
                sx: { mt: 2 },
              },
            },
          ],
        },
        {
          key: 'background-nodes',
          py: 0,
          backgroundImageProps: {
            src: serviceCategory.hero_src,
            alt: serviceCategory.hero_alt,
            backgroundHeight: { xs: 240, md: 320 },
          },
        },
        {
          key: 'services',
          sx: { backgroundColor: 'background.paper' },
          pt: { xs: 5, md: 10 },
          items: [renderServicesBlockItem({ items: services })],
        },
        {
          key: 'related-service-categorys',
          py: { xs: 5, md: 10 },
          items: [
            {
              type: 'h4',
              title: 'Other Service Categories',
              titleProps: { sx: { mb: { xs: 3, md: 5 } } },
            },
            {
              type: 'grid',
              gridItems: otherServiceCategorys?.map((otherServiceCategory) =>
                renderServiceBlockItem({
                  item: {
                    href: `${routeConfig.SERVICES}/${otherServiceCategory.slug}`,
                    ...(otherServiceCategory as RenderPostBlockItemProps['item']),
                  },
                })
              ),
            },
          ],
        },
      ]}
    />
  )
}

export default ServiceCategoryPage
