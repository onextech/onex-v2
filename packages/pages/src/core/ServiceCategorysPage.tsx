import React from 'react'
import { Blocks } from '@gravis-os/landing'
import { getCrudItemsByCategory } from '@gravis-os/utils'
import type { Service, ServiceCategory } from '@onex/types'
import { useLayout } from '@onex/providers'
import {
  renderServiceCategoryBlockItem,
  RenderServiceCategoryBlockItemProps,
} from '@onex/blocks'
import chunk from 'lodash/chunk'

export interface ServiceCategorysProps {
  services: Service[]
  serviceCategorys: ServiceCategory[]
}

const ServiceCategorys: React.FC<ServiceCategorysProps> = (props) => {
  const { services, serviceCategorys } = props

  const { routeConfig } = useLayout()
  const categoryWithServices = getCrudItemsByCategory(
    services.map((service) => ({
      ...service,
      href: `${routeConfig.SERVICES}/${service.slug}`,
    })),
    serviceCategorys
  )

  const categoryWithServicesChunks = chunk(categoryWithServices, 2)

  return (
    <Blocks
      items={[
        {
          key: 'hero',
          py: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
          items: [
            { type: 'overline', title: 'Services' },
            {
              type: 'h1',
              title: 'Craft experiences that touch hearts and move markets.',
            },
            {
              type: 'subtitle1',
              title:
                'Meet the moment with our services and capabilities that help you define your vision for the future and make it happen.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
                sx: { mt: 2 },
              },
            },
          ],
        },
        ...categoryWithServicesChunks
          .map((categoryWithServicesChunk) => {
            const firstCategoryWithServices = categoryWithServicesChunk[0]
            return [
              {
                key: 'background-nodes',
                py: 0,
                backgroundImageProps: {
                  src: firstCategoryWithServices.hero_src,
                  alt: firstCategoryWithServices.hero_alt,
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
                    gridItems: categoryWithServicesChunk.map(
                      (categoryWithService) =>
                        renderServiceCategoryBlockItem({
                          item: categoryWithService as RenderServiceCategoryBlockItemProps['item'],
                        })
                    ),
                  },
                ],
              },
            ]
          })
          .flat(),
      ]}
    />
  )
}

export default ServiceCategorys
