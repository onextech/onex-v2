import React from 'react'
import {
  Blocks,
  renderServiceCategoryBlockItem,
  RenderServiceCategoryBlockItemProps,
  useLayout,
} from '@gravis-os/landing'
import { getCategoryWithItemsAndHref } from '@gravis-os/utils'
import type { Service, ServiceCategory } from '@gravis-os/types'
import chunk from 'lodash/chunk'

export interface ServiceCategorysPageProps {
  services: Service[]
  serviceCategorys: ServiceCategory[]
}

const ServiceCategorysPage: React.FC<ServiceCategorysPageProps> = (props) => {
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
        {
          id: 'hero',
          py: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
          items: [
            { type: 'overline', title: 'Services' },
            {
              type: 'h1',
              title: 'Empowering Innovation, Driving Transformation',
            },
            {
              type: 'subtitle1',
              title:
                'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
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
            const firstCategoryWithServices: ServiceCategory =
              categoryWithServicesChunk[0]
            return [
              {
                id: 'background-nodes',
                py: 0,
                backgroundImageProps: {
                  src: firstCategoryWithServices.hero_src,
                  alt: firstCategoryWithServices.hero_alt,
                  backgroundHeight: { xs: 240, md: 320 },
                },
              },
              {
                id: 'service-categorys',
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

export default ServiceCategorysPage
