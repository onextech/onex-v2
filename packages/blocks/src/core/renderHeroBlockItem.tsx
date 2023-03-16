import React from 'react'

export interface RenderHeroBlockItemProps {
  item: {
    title: string
    subtitle?: string
    hero_src?: string
    hero_alt?: string
  }
}

const renderHeroBlockItem = (props: RenderHeroBlockItemProps) => {
  const { item } = props
  const { title, subtitle, hero_src, hero_alt } = item || {}
  return {
    key: 'hero',
    pb: 0,
    sx: { backgroundColor: 'background.paper' },
    items: [
      { type: 'h1', title },
      {
        type: 'subtitle1',
        title: subtitle,
        titleProps: {
          maxWidth: true,
          sx: { mt: { xs: 3, md: 5 } },
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
          backgroundSx: { mt: { xs: 6, md: 12 } },
        },
      },
    ],
  }
}

export default renderHeroBlockItem
