import type { Resource } from '@gravis-os/types'

import React from 'react'

import {
  Blocks,
  RenderPostBlockItemProps,
  renderPostBlockItem,
  useLayout,
} from '@gravis-os/landing'
import orderBy from 'lodash/orderBy'

export interface ResourcesPageProps {
  resources: Resource[]
}

const ResourcesPage: React.FC<ResourcesPageProps> = (props) => {
  const { resources } = props
  const { routeConfig } = useLayout()

  return (
    <Blocks
      items={[
        {
          id: 'hero',
          items: [
            { title: 'Resources', type: 'overline' },
            {
              title: 'Resources',
              type: 'h1',
            },
            {
              title:
                'Unlock the key to business success with our comprehensive collection of resources.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
                sx: { mt: 2 },
              },
              type: 'subtitle1',
            },
            {
              title: '/unsplash/yEQ9TOaL5FM.jpg',
              disableContainer: true,
              titleProps: {
                alt: 'Books in a library',
                background: true,
                backgroundHeight: { xs: 320, md: 450 },
                backgroundSx: { mt: 5 },
              },
              type: 'image',
            },
            {
              title:
                'We offer expert guides and valuable insights on leveraging technology to turn your strategic vision into a resounding success. Discover innovative strategies, best practices, and industry trends to optimize your enterprise software development and propel your business forward.',
              titleProps: { maxWidth: true, sx: { mt: { xs: 5, md: 10 } } },
              type: 'h4',
            },
          ],
          pb: 0,
          pt: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
        },
        {
          id: 'resource',
          items: [
            {
              gridItems: orderBy(resources, 'published_at', 'desc').map(
                (resource) =>
                  renderPostBlockItem({
                    item: {
                      ...resource,
                      href: `${routeConfig.RESOURCES}/${resource.slug}`,
                    } as RenderPostBlockItemProps['item'],
                  })
              ),
              gridProps: { rowSpacing: 8, spacing: 5 },
              type: 'grid',
            },
          ],
          sx: { backgroundColor: 'background.paper' },
        },
      ]}
    />
  )
}

export default ResourcesPage
