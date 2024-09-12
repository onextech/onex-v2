import type { Resource } from '@onex/types'

import React from 'react'

import {
  Blocks,
  RenderPostBlockItemProps,
  renderPostBlockItem,
  useLayout,
} from '@onex/landing'
import { routeConfig } from '@onex/common'
import orderBy from 'lodash/orderBy'
import { useRouter } from 'next/router'

export interface ResourceSuccessPageProps {
  relatedResources?: Resource[]
  resource: Resource
}

const ResourceSuccessPage: React.FC<ResourceSuccessPageProps> = (props) => {
  const { relatedResources, resource } = props
  const { title, avatar_alt, avatar_src, filename, subtitle } = resource
  const router = useRouter()
  const { site } = useLayout()
  return (
    <Blocks
      items={[
        {
          id: 'hero',
          items: [
            {
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
                    { title: 'Resource', type: 'overline' },
                    {
                      title,
                      titleProps: { mb: 2 },
                      type: 'h1',
                    },
                    {
                      title: subtitle,
                      titleProps: {
                        color: 'text.secondary',
                        maxWidth: true,
                        sx: { mb: 3 },
                      },
                      type: 'subtitle3',
                    },
                    {
                      title: avatar_src,
                      boxProps: { maxWidth: { md: '70%' } },
                      titleProps: {
                        alt: avatar_alt,
                        ar: '4:3',
                        scaleOnHover: true,
                      },
                      type: 'image',
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
                      backgroundColor: 'background.paper',
                      height: { md: '100%' },
                      mb: { xs: 5, md: 0 },
                      position: { md: 'absolute' },
                      px: 4,
                      py: 5,
                      top: 0,
                    },
                  },
                  items: [
                    {
                      title: `fa-3x fa-thin fa-badge-check`,
                      titleProps: { sx: { color: 'success.main', mb: 1 } },
                      type: 'fa-icon',
                    },
                    {
                      title: `Registration Success`,
                      titleProps: { sx: { color: 'success.main', mb: 1 } },
                      type: 'overline',
                    },
                    {
                      title: 'Your download is ready!',
                      titleProps: { gutterBottom: true, sx: { mb: 2 } },
                      type: 'h5',
                    },
                    {
                      title:
                        'Great news! Click the link below to download your exclusive report. Enjoy your new read.',
                      titleProps: { color: 'text.secondary', sx: { mb: 2 } },
                      type: 'body1',
                    },
                    {
                      title: 'Download',
                      titleProps: {
                        fullWidth: true,
                        href: `/resources/${filename}`,
                        hrefProps: { targetBlank: true },
                        size: 'large',
                        variant: 'contained',
                      },
                      type: 'button',
                    },
                  ],
                },
              ],
              gridProps: {
                reverse: true,
                spacing: { xs: 0, md: 5 },
              },
              type: 'grid',
            },
          ],
          py: 5,
          reveal: false,
          sx: {
            backgroundColor: 'background.default',
            position: 'relative',
          },
        },
        Boolean(relatedResources?.length) && {
          id: 'hero',
          items: [
            {
              title: `More Resources from ${site.title}`,
              titleProps: { maxWidth: true, sx: { mb: 4 } },
              type: 'h4',
            },
            {
              gridItems: orderBy(relatedResources, 'published_at', 'desc')
                .filter(
                  (relatedResource) => relatedResource.slug !== router.basePath
                )
                .map((relatedResource) =>
                  renderPostBlockItem({
                    item: {
                      ...relatedResource,
                      href: `${routeConfig.RESOURCES}/${relatedResource.slug}`,
                    } as RenderPostBlockItemProps['item'],
                  })
                ),
              gridProps: { rowSpacing: 8, spacing: 5 },
              type: 'grid',
            },
          ],
          py: 8,
          sx: { backgroundColor: 'background.paper' },
        },
      ]}
    />
  )
}

export default ResourceSuccessPage
