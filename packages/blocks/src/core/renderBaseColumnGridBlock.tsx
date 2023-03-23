import React from 'react'
import { BlockProps } from '@gravis-os/landing'

export interface RenderBaseColumnGridBlockProps
  extends Omit<BlockProps, 'items'> {
  overline?: string
  title: string
  subtitle?: string
  items?: Array<{
    avatar_src?: string
    fa_icon?: string
    overline?: string
    title: string
    subtitle?: string
  }>
  columns: number
}

const renderBaseColumnGridBlock = (props: RenderBaseColumnGridBlockProps) => {
  const { overline, title, subtitle, items, columns, ...rest } = props

  return {
    key: title,
    center: true,
    items: [
      { type: 'overline', title: overline },
      {
        type: 'h3',
        title,
        maxWidth: 'md',
        titleProps: { gutterBottom: true },
      },
      {
        type: 'body1',
        title: subtitle,
        maxWidth: 'md',
        titleProps: {
          color: 'text.secondary',
          maxWidth: true,
        },
      },
      {
        type: 'grid',
        sx: { mt: { xs: 5, md: 10 } },
        gridProps: { spacing: 4, rowSpacing: 8 },
        gridItemProps: {
          xs: 6,
          md: 12 / columns,
          sx: { textAlign: { xs: 'center', md: 'left' } },
        },
        gridItems: items?.map((item) => {
          const { fa_icon, overline, title, subtitle, avatar_src } = item
          return {
            items: [
              avatar_src && {
                type: 'image',
                title: avatar_src,
                titleProps: {
                  alt: avatar_src,
                  width: 100,
                  height: 100,
                  sx: { mb: 4 },
                },
              },
              fa_icon && {
                type: 'fa-icon',
                title: `fa-3x fa-thin ${fa_icon}`,
                titleProps: { sx: { mb: 3 } },
              },
              overline && {
                type: 'overline',
                title: overline,
                titleProps: { gutterBottom: true },
              },
              {
                type: 'subtitle2',
                title,
                titleProps: { gutterBottom: true },
              },
              subtitle && {
                type: 'body1',
                title: subtitle,
                titleProps: { color: 'text.secondary' },
              },
            ],
          }
        }),
      },
    ],
    ...rest,
  }
}

export default renderBaseColumnGridBlock
