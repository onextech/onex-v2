import React from 'react'
import {
  Blocks,
  renderPostBlockItem,
  RenderPostBlockItemProps,
  useLayout,
} from '@gravis-os/landing'
import type { Resource } from '@gravis-os/types'
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
          pt: { xs: 5, md: 10 },
          pb: 0,
          sx: { backgroundColor: 'background.paper' },
          items: [
            { type: 'overline', title: 'Resources' },
            {
              type: 'h1',
              title: 'Resources',
            },
            {
              type: 'subtitle1',
              title:
                'Unlock the key to business success with our comprehensive collection of resources.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
                sx: { mt: 2 },
              },
            },
            {
              type: 'image',
              title: 'https://source.unsplash.com/yEQ9TOaL5FM/1600x900',
              disableContainer: true,
              titleProps: {
                alt: 'Books in a library',
                background: true,
                backgroundHeight: { xs: 320, md: 450 },
                backgroundSx: { mt: 5 },
              },
            },
            {
              type: 'h4',
              title:
                'We offer expert guides and valuable insights on leveraging technology to turn your strategic vision into a resounding success. Discover innovative strategies, best practices, and industry trends to optimize your enterprise software development and propel your business forward.',
              titleProps: { maxWidth: true, sx: { mt: { xs: 5, md: 10 } } },
            },
          ],
        },
        {
          id: 'resource',
          sx: { backgroundColor: 'background.paper' },
          items: [
            {
              type: 'grid',
              gridProps: { spacing: 5, rowSpacing: 8 },
              gridItems: orderBy(resources, 'published_at', 'desc').map(
                (resource) =>
                  renderPostBlockItem({
                    item: {
                      ...resource,
                      href: `${routeConfig.RESOURCES}/${resource.slug}`,
                    } as RenderPostBlockItemProps['item'],
                  })
              ),
            },
          ],
        },
      ]}
    />
  )
}

export default ResourcesPage
