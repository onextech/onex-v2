import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Resource } from '@onex/types'
import { ResourceForm } from '@onex/components'
import { renderFourColumnGridBlock } from '@onex/blocks'

export interface ResourcePageProps {
  resource: Resource
}

const ResourcePage: React.FC<ResourcePageProps> = (props) => {
  const { resource } = props
  const { title, subtitle, avatar_src, avatar_alt, sections } = resource
  const { benefits } = sections || {}

  return (
    <Blocks
      items={[
        {
          key: 'form',
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
                      titleProps: { alt: avatar_alt, ar: '4:3', scaleOnHover:true },
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
                      type: 'h5',
                      title: 'Get this guide delivered to your inbox.',
                      titleProps: { gutterBottom: true },
                    },
                    {
                      type: 'body1',
                      title:
                        'Enter your email and details to unlock this guide',
                      titleProps: { color: 'text.secondary' },
                    },
                    {
                      type: 'jsx',
                      title: <ResourceForm />,
                      boxProps: { sx: { mt: 2 } },
                    },
                  ],
                },
              ],
            },
          ],
        },
        // Benefits
        renderFourColumnGridBlock({
          ...benefits,
          textAlign: 'left',
          pt: 5,
          title: 'In this guide, we cover:',
          sx: {
            backgroundColor: 'background.paper',
            borderTop: 1,
            borderColor: 'divider',
          },
        }),
      ]}
    />
  )
}

export default ResourcePage
