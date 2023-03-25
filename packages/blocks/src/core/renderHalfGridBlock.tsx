import React from 'react'
import renderGhostButtonBlockItem, {
  RenderGhostButtonBlockItemProps,
} from './renderGhostButtonBlockItem'

export interface RenderHalfGridBlockProps {
  overline?: string
  title: string
  subtitle?: string
  fullHeight?: boolean
  reverse?: boolean
  buttonProps?: RenderGhostButtonBlockItemProps
}

const renderHalfGridBlock = (props: RenderHalfGridBlockProps) => {
  const { overline, title, subtitle, fullHeight, reverse, buttonProps } = props

  return {
    key: title,
    py: 0,
    items: [
      {
        type: 'grid',
        gridProps: { spacing: 0, reverse, overflowX: 'hidden' },
        gridItemProps: {
          xs: 12,
          md: 6,
          sx: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
          },
        },
        gridItems: [
          // Text
          {
            sx: {
              my: { xs: 5, md: 20 },
              ...(reverse && { pl: { xs: 3, md: 6, lg: 8, xl: 10 } }),
            },
            items: [
              { type: 'overline', title: overline },
              {
                type: 'h3',
                title,
                titleProps: { gutterBottom: true },
              },
              {
                type: 'subtitle1',
                title: subtitle,
                titleProps: {
                  color: 'text.secondary',
                  maxWidth: !reverse,
                },
              },
              renderGhostButtonBlockItem({
                overline: 'Our Mission',
                title: 'Enabling Smarter Businesses',
                boxProps: { mt: 3 },
                ...buttonProps,
              }),
            ],
          },
          // Image
          {
            sx: {
              ...(fullHeight && {
                // Breakout image out of container
                margin: { md: '0 calc(50% - 50vw + 8px)' },
                width: '100%',
                height: '100%',
                position: { md: 'absolute' },
                [reverse ? 'left' : 'right']: 0,

                '& .MuiBox-root': { width: '100%', height: '100%' },
              }),
            },
            items: [
              {
                type: 'image',
                title: '/images/about_hero.png',
                titleProps: { alt: 'hero', fill: true },
              },
            ],
          },
        ],
      },
    ],
  }
}

export default renderHalfGridBlock
