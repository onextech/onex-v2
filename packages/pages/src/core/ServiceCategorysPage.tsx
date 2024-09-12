import type { Service, ServiceCategory } from '@onex/types'

import React from 'react'

import {
  Blocks,
  RenderServiceCategoryBlockItemProps,
  renderServiceCategoryBlockItem,
  useLayout,
} from '@onex/landing'
import { getCategoryWithItemsAndHref } from '@onex/utils'
import chunk from 'lodash/chunk'

export interface ServiceCategorysPageProps {
  serviceCategorys: ServiceCategory[]
  services: Service[]
}

const ServiceCategorysPage: React.FC<ServiceCategorysPageProps> = (props) => {
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
        {
          id: 'hero',
          items: [
            { title: 'Services', type: 'overline' },
            {
              title: 'Empowering Innovation, Driving Transformation',
              type: 'h1',
            },
            {
              title:
                'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
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
        ...categoryWithServicesChunks.flatMap((categoryWithServicesChunk) => {
          const firstCategoryWithServices: ServiceCategory =
            categoryWithServicesChunk[0]
          return [
            {
              id: 'background-nodes',
              backgroundImageProps: {
                alt: firstCategoryWithServices.hero_alt,
                backgroundHeight: { xs: 240, md: 320 },
                src: firstCategoryWithServices.hero_src,
              },
              py: 0,
            },
            {
              id: 'service-categorys',
              items: [
                {
                  gridItems: categoryWithServicesChunk.map(
                    (categoryWithService) =>
                      renderServiceCategoryBlockItem({
                        item: categoryWithService as RenderServiceCategoryBlockItemProps['item'],
                      })
                  ),
                  type: 'grid',
                },
              ],
              pt: { xs: 5, md: 10 },
              sx: { backgroundColor: 'background.paper' },
            },
          ]
        }),
      ]}
    />
  )
}

export default ServiceCategorysPage
