import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Resource } from '@onex/types'
import orderBy from 'lodash/orderBy'
import { RenderPostBlockItemProps, renderPostBlockItem } from '@onex/blocks'
import { useRouter } from 'next/router'
import { routeConfig } from '@onex/common'
import { useLayout } from '@onex/providers'

export interface ResourceSuccessPageProps {
  resource: Resource
  relatedResources: Resource[]
}

const ResourceSuccessPage: React.FC<ResourceSuccessPageProps> = (props) => {
  const { resource, relatedResources } = props
  const router = useRouter()
  const { site } = useLayout()
  return (
    <Blocks
      items={[
        {
          key: 'hero',
          pt: { xs: 5, md: 10 },
          pb: 0,
          sx: { backgroundColor: 'background.paper' },
          items: [
            { type: 'overline', title: 'Thank You For Downloading' },
            {
              type: 'h1',
              title: resource.title,
            },
            {
              type: 'subtitle1',
              title:
                'It\'s on the way to your inbox.',
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
                alt: 'People working in an office',
                background: true,
                backgroundHeight: { xs: 200, md: 320 },
                backgroundSx: { mt: 5 },
              },
            },
            {
              type: 'h4',
              title:
                `More Free Resources from ${site.title}`,
              titleProps: { maxWidth: true, sx: { mt: { xs: 5, md: 10 } } },
            },
          ],
        },
        {
          key: 'resource',
          sx: { backgroundColor: 'background.paper' },
          items: [
            {
              type: 'grid',
              gridProps: { spacing: 5, rowSpacing: 8 },
              gridItems: orderBy(relatedResources, 'published_at', 'desc')
                .filter(resource => resource.slug !== router.basePath)
                .map((resource) =>
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

export default ResourceSuccessPage
