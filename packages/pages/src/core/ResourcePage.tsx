import type { Resource } from '@onex/types'

import React from 'react'

import {
  Blocks,
  DynamicResourceForm,
  renderClientLogosImageMarqueeBlock,
  renderFourColumnGridBlock,
  renderThreeColumnGridBlock,
  useLayout,
} from '@onex/landing'

export interface ResourcePageProps {
  resource: Resource
}

const ResourcePage: React.FC<ResourcePageProps> = (props) => {
  const { resource } = props
  const { clientLogos } = useLayout()
  const { title, avatar_alt, avatar_src, hero_src, hero_alt, hero_props, hero_box_props,
    cta_form_title,
    cta_form_subtitle,
    cta_form_button_title,
    sections, subtitle } = resource
  const { benefits, features } = sections || {}

  return (
    <Blocks
      items={[
        {
          id: 'form',
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
                      title: hero_src || avatar_src,
                      boxProps: { maxWidth: { md: '70%' }, ...hero_box_props },
                      titleProps: {
                        alt: hero_alt || avatar_alt,
                        ar: '4:3',
                        scaleOnHover: true,
                        ...hero_props,
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
                      position: { md: 'absolute' },
                      px: 4,
                      py: 5,
                      top: 0,
                    },
                  },
                  items: [
                    {
                      title: cta_form_title || 'Get a copy of this guide.',
                      type: 'h5',
                    },
                    {
                      title: cta_form_subtitle || 'Enter your details to unlock this guide.',
                      titleProps: { color: 'text.secondary', sx: { mt: 1 } },
                      type: 'body1',
                    },
                    {
                      title: <DynamicResourceForm submitButtonProps={{
                        title: cta_form_button_title,
                      }} />,
                      boxProps: { sx: { mt: 3 } },
                      type: 'jsx',
                    },
                  ],
                },
              ],
              gridProps: { spacing: { xs: 0, md: 5 } },
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
        // Features
        renderThreeColumnGridBlock({
          ...features,
          py: { xs: 5, md: 10 },
          sx: {
            backgroundColor: 'background.paper',
            border: (theme) => `1px solid ${theme.palette.divider}`,
          },
          textAlign: 'left',
        }),
        // Benefits
        renderFourColumnGridBlock({
          ...benefits,
          pt: { xs: 5, md: 10 },
          sx: {
            backgroundColor: 'background.paper',
            border: (theme) => `1px solid ${theme.palette.divider}`,
          },
        }),
        // ClientLogosImageMarquee
        renderClientLogosImageMarqueeBlock({ items: clientLogos.slice(0, 8) }),
      ]}
    />
  )
}

export default ResourcePage
