import React from 'react'
import {
  Blocks,
  RenderPostBlockItemProps,
  renderPostBlockItem,
  useLayout,
} from '@gravis-os/landing'
import type { Resource } from '@gravis-os/types'
import orderBy from 'lodash/orderBy'
import { useRouter } from 'next/router'
import { routeConfig } from '@onex/common'
import { Button } from '@gravis-os/ui'

export interface ResourceSuccessPageProps {
  resource: Resource
  relatedResources?: Resource[]
}

const ResourceSuccessPage: React.FC<ResourceSuccessPageProps> = (props) => {
  const { resource, relatedResources } = props
  const { title, subtitle, avatar_src, avatar_alt, sections } = resource
  const router = useRouter()
  const { site } = useLayout()
  return (
    <Blocks
      items={[
        {
          key: 'hero',
          reveal: false,
          py: 5,
          sx: {
            position: 'relative',
            backgroundColor: 'background.default',
          },
          items: [
            {
              type: 'grid',
              gridProps: { spacing: { xs: 0, md: 5 } },
              gridItems: [
                {
                  sm: 7,
                  md: 8,
                  lg: 9,
                  boxProps: {
                    sx: {
                      minHeight: { md: '100vh' },
                    },
                  },
                  items: [
                    { type: 'overline', title: 'Resource' },
                    {
                      type: 'h1',
                      title,
                      titleProps: { mb: 2 },
                    },
                    {
                      type: 'subtitle3',
                      title: subtitle,
                      titleProps: {
                        color: 'text.secondary',
                        maxWidth: true,
                        sx: { mb: 3 },
                      },
                    },
                    {
                      type: 'image',
                      title: avatar_src,
                      titleProps: {
                        alt: avatar_alt,
                        ar: '4:3',
                        scaleOnHover: true,
                      },
                      boxProps: { maxWidth: { md: '70%' } },
                    },
                  ],
                },
                {
                  sm: 5,
                  md: 4,
                  lg: 3,
                  boxProps: {
                    reveal: true,
                    sx: {
                      height: { md: '100%' },
                      backgroundColor: 'background.paper',
                      top: 0,
                      py: 5,
                      px: 4,
                      position: { md: 'absolute' },
                    },
                  },
                  items: [
                    {
                      type: 'fa-icon',
                      title: `fa-3x fa-thin fa-badge-check`,
                      titleProps: { sx: { mb: 1, color: 'success.main' } },
                    },
                    {
                      type: 'overline',
                      title: `Registration Success`,
                      titleProps: { sx: { mb: 1, color: 'success.main' } },
                    },
                    {
                      type: 'h5',
                      title: 'Your download is ready!',
                      titleProps: { sx: { mb: 2 }, gutterBottom: true },
                    },
                    {
                      type: 'body1',
                      title:
                        'Great news! Click the link below to download your eBook. Enjoy your new read!',
                      titleProps: { color: 'text.secondary', sx: { mb: 2 } },
                    },
                    {
                      type: 'jsx',
                      title: (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`/files/resources/${resource.slug}.pdf`}
                        >
                          <Button
                            fullWidth
                            size="large"
                            variant="contained"
                            title="Download"
                          />
                        </a>
                      ),
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          key: 'hero',
          py: 8,
          sx: { backgroundColor: 'background.paper' },
          items: [
            {
              type: 'h4',
              title: `More Resources from ${site.title}`,
              titleProps: { maxWidth: true, sx: { mb: 4 } },
            },
            {
              type: 'grid',
              gridProps: { spacing: 5, rowSpacing: 8 },
              gridItems: orderBy(relatedResources, 'published_at', 'desc')
                .filter((resource) => resource.slug !== router.basePath)
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
