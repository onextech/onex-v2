import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Service, ServiceCategory } from '@onex/types'
import {
  renderServiceBlockItem,
  RenderServiceBlockItemProps,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface ServiceCategoryPageProps {
  services: Service[]
  serviceCategory: ServiceCategory
}

const ServiceCategoryPage: React.FC<ServiceCategoryPageProps> = (props) => {
  const { services, serviceCategory } = props
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
          key: 'service-categorys',
          sx: { backgroundColor: 'background.paper' },
          pt: { xs: 5, md: 10 },
          items: [
            {
              type: 'grid',
              gridItems: services.map((service) =>
                renderServiceBlockItem({
                  item: {
                    href: `${routeConfig.SERVICES}/${serviceCategory.slug}/${service.slug}`,
                    ...(service as RenderServiceBlockItemProps['item']),
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
