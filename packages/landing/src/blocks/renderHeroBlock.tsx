import React from 'react'

import { GetStartedPage } from '@onex/pages'

import { useLayout } from '../providers'
import { BlockProps } from '../web/Block/Block'
import renderContactCalloutButtonBlockItem from './renderContactCalloutButtonBlockItem'

export interface RenderHeroBlockProps extends BlockProps {
  item: {
    hero_alt?: string
    hero_src?: string
    subtitle?: string
    title: string
  }
}

const renderHeroBlock = (props: RenderHeroBlockProps) => {
  const { item, ...rest } = props
  const { title, hero_alt, hero_src, subtitle } = item || {}
  const { site } = useLayout()
  return {
    id: 'hero',
    pb: 0,
    pt: { xs: 4, md: 8 },
    sx: { backgroundColor: 'background.paper' },
    ...rest,
    items: [
      { title, type: 'h1' },
      {
        title: subtitle,
        titleProps: {
          maxWidth: true,
          sx: { maxWidth: { md: '60%' }, mt: { xs: 1, md: 3 } },
        },
        type: 'subtitle1',
      },
      renderContactCalloutButtonBlockItem({
        title: site.cta_button_title,
        children: (
          <GetStartedPage
            disableTestimonials={site.disable_testimonials}
            fullScreen
          />
        ),
        titleProps: { sx: { mt: 3 } },
      }),
      {
        title: 'Schedule a non-obligatory 30 mins consultation',
        titleProps: {
          sx: { color: 'text.secondary', fontWeight: 'normal', mt: 1 },
        },
        type: 'body2',
      },
      {
        title: hero_src,
        disableContainer: true,
        titleProps: {
          alt: hero_alt,
          background: true,
          backgroundHeight: { xs: 400, md: 600 },
          backgroundSx: { mt: { xs: 5, md: 10 } },
          priority: true,
        },
        type: 'image',
      },
    ],
  }
}

export default renderHeroBlock
