import React from 'react'
import { BlockProps } from '@gravis-os/landing'

export interface RenderHeroBlockItemProps extends BlockProps {
  item: {
    title: string
    subtitle?: string
    hero_src?: string
    hero_alt?: string
  }
}

const renderHeroBlockItem = (props: RenderHeroBlockItemProps) => {
  const { item, ...rest } = props
  const { title, subtitle, hero_src, hero_alt } = item || {}
  return {
    key: 'hero',
    pb: 0,
    pt: { xs: 5, md: 9 },
    sx: { backgroundColor: 'background.paper' },
    ...rest,
    items: [
      { type: 'overline', title: 'Service', titleProps: { sx: { mb: 4 } } },
      { type: 'h1', title },
      {
        type: 'subtitle1',
        title: subtitle,
        titleProps: {
          maxWidth: true,
          sx: { mt: 3 },
          color: 'text.secondary',
        },
      },
      {
        type: 'image',
        title: hero_src,
        disableContainer: true,
        titleProps: {
          alt: hero_alt,
          background: true,
          backgroundHeight: { xs: 480, md: 680 },
          backgroundSx: { mt: { xs: 6, md: 11 } },
        },
      },
    ],
  }
}

export default renderHeroBlockItem
