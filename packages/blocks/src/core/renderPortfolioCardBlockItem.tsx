import React from 'react'
import { renderGhostButtonBlockItem } from '@onex/blocks'
import { BlockItemProps } from '@gravis-os/landing'
import routeConfig from '@app/configs/routeConfig'

export interface RenderPortfolioCardBlockItemProps {
  backgroundColor?: string
  mode?: 'light' | 'dark'
  title: BlockItemProps['title']
  subtitle: BlockItemProps['title']
  imageSrc: string
  reverse?: boolean
  slug?: string
}

const renderPortfolioCardBlockItem = (
  props: RenderPortfolioCardBlockItemProps
) => {
  const { slug, backgroundColor, mode, imageSrc, title, subtitle, reverse } =
    props

  const gridItems = [
    {
      md: 6,
      lg: 7,
      sx: {
        height: { xs: 300, md: 500 },
        position: 'relative',
        overflow: 'hidden',
      },
      items: [
        {
          type: 'image',
          title: imageSrc,
          boxProps: { sx: { display: 'flex', justifyContent: 'center' } },
          titleProps: {
            alt: 'image-src',
            background: true,
            fixedBackground: true,
            disableResponsive: true,
            disablePointerEvents: true,
            scaleOnHover: true,
            containerSx: {
              width: { xs: '60%', sm: '65%' },
              bottom: -8,
            },
          },
        },
      ],
    },
    {
      md: 6,
      lg: 5,
      boxProps: {
        sx: {
          mt: { xs: 2, md: 4, lg: 5 },
          mx: { xs: 3, md: 0, lg: 0 },
          [reverse ? 'ml' : 'mr']: { xs: 3, md: 9, lg: 12 },
        },
      },
      items: [
        {
          type: 'h3',
          title,
          titleProps: {
            color: 'text.primary',
            gutterBottom: true,
          },
        },
        {
          type: 'subtitle3',
          title: subtitle,
          titleProps: {
            color: 'text.secondary',
          },
        },
        renderGhostButtonBlockItem({
          overline: 'Portfolio',
          title: 'Read more',
          boxProps: { mt: 5 },
          href: `${routeConfig.PORTFOLIO}/${slug || ''}`,
        }),
      ],
    },
  ]

  const nextGridItems = reverse ? gridItems.slice().reverse() : gridItems

  return {
    type: 'grid',
    maxWidth: 'xl',
    sx: { mt: { xs: 6, md: 10 } },
    mode,
    boxProps: { sx: { backgroundColor, borderRadius: 1 } },
    gridProps: {
      reverse: { xs: !reverse, md: reverse },
      spacing: 3,
      sx: { textAlign: { xs: 'center', md: 'left' } },
    },
    gridItems: nextGridItems,
  }
}

export default renderPortfolioCardBlockItem
