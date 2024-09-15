import React from 'react'

import { BlockProps } from '../web/Block/Block'
import { BlockItemProps } from '../web/Block/BlockItem'

export interface RenderBaseColumnGridBlockProps
  extends Omit<BlockProps, 'items' | 'title'> {
  columns: number
  imageProps?: BlockItemProps['titleProps']
  items?: Array<{
    avatar_alt?: string
    avatar_src?: string
    fa_icon?: string
    href?: string
    overline?: string
    stat?: string
    subtitle?: string
    title: string
    titleProps?: BlockItemProps['titleProps']
  }>
  overline?: string
  subtitle?: string
  subtitleHref?: string
  textAlign?: 'center' | 'left'
  title: React.ReactNode
  titleProps?: BlockItemProps['titleProps']
}

const renderBaseColumnGridBlock = (props: RenderBaseColumnGridBlockProps) => {
  const {
    title,
    columns,
    imageProps,
    items,
    overline,
    subtitle,
    subtitleHref,
    textAlign = 'center',
    titleProps,
    ...rest
  } = props
  const { center } = rest

  const isTextAlignCenter = textAlign === 'center'

  return {
    items: [
      { title: overline, type: 'overline' },
      {
        title,
        titleProps: {
          gutterBottom: true,
          ...(!isTextAlignCenter && { maxWidth: '50%' }),
          ...titleProps,
        },
        type: 'h3',
        ...(isTextAlignCenter && { maxWidth: 'md' }),
      },
      {
        title: subtitle,
        titleProps: {
          color: 'text.secondary',
          href: subtitleHref,
          maxWidth: isTextAlignCenter ? true : '40%',
        },
        type: subtitleHref ? 'link' : 'body1',
        ...(isTextAlignCenter && { maxWidth: 'md' }),
      },
      {
        gridItemProps: {
          xs: columns <= 3 ? 12 : 6,
          md: 12 / columns,
          sx: { textAlign: { xs: 'center', md: center ? 'center' : 'left' } },
        },
        gridItems: items?.map((item) => {
          const {
            title,
            avatar_alt,
            avatar_src,
            fa_icon,
            href,
            overline,
            stat,
            subtitle,
            titleProps,
          } = item
          const hasStat = items.some((item) => item.stat)
          return {
            items: [
              avatar_src && {
                title: avatar_src,
                titleProps: {
                  alt: avatar_alt,
                  height: 100,
                  sx: { mb: 4 },
                  width: 100,
                  ...imageProps,
                },
                type: 'image',
              },
              fa_icon && {
                title: [hasStat ? '' : 'fa-3x', 'fa-thin', `${fa_icon}`].join(
                  ' '
                ),
                titleProps: {
                  ...titleProps,
                  sx: {
                    mb: 3,
                    ...(hasStat && { fontSize: '2.5rem', mb: '0.75rem' }),
                    ...titleProps?.sx,
                  },
                },
                type: 'fa-icon',
              },
              stat && {
                title: stat,
                titleProps: { mb: 0.5 },
                type: 'h4',
              },
              overline && {
                title: overline,
                titleProps: { gutterBottom: true, marginTop: 2 },
                type: 'overline',
              },
              {
                title,
                titleProps: {
                  ...(href && { href, variant: 'subtitle2' }),
                  gutterBottom: true,
                },
                type: href ? 'link' : 'subtitle2',
              },
              subtitle && {
                title: subtitle,
                titleProps: { color: 'text.secondary' },
                type: 'body1',
              },
              href && {
                title: 'Learn More',
                titleProps: {
                  href,
                  mt: 2,
                  rightCaret: true,
                  variant: 'body2',
                },
                type: 'link',
              },
            ],
          }
        }),
        gridProps: { rowSpacing: 8, spacing: 4 },
        sx: { mt: { xs: 5, md: 10 } },
        type: 'grid',
      },
    ],
    ...rest,
    center: isTextAlignCenter,
  }
}

export default renderBaseColumnGridBlock
