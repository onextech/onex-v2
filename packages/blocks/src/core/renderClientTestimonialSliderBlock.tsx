import { ClientTestimonial } from '@onex/types'
import { Block, BlockProps, Blocks } from '@gravis-os/landing'
import { Slider } from '@gravis-os/ui'
import React from 'react'
import renderClientTestimonialSliderBlockItem from './renderClientTestimonialSliderBlockItem'
import 'keen-slider/keen-slider.min.css'

export interface RenderClientTestimonialSliderBlockProps
  extends Omit<BlockProps, 'items' | 'title'> {
  items: ClientTestimonial[]
  title?: React.ReactNode
  subtitle?: React.ReactNode
}

const renderClientTestimonialSliderBlock = (
  props: RenderClientTestimonialSliderBlockProps
) => {
  const {
    title = '',
    subtitle = '',
    items,
    ...rest
  } = props

  return {
    key: 'client-testimonials',
    items: [
      { type: 'overline', title: 'Client Testimonials' },
      title && {
        type: 'h3',
        title,
        titleProps: { gutterBottom: true },
      },
      subtitle && {
        type: 'body1',
        title: subtitle,
        titleProps: {
          color: 'text.secondary',
          maxWidth: '50%',
        },
      },
      {
        type: 'jsx',
        title: (
          <Slider
          autoplay
          loop
          arrows
            dotProps={{ color: 'secondary.main' }}
            height={{ xs: 450, md: 400 }}
            items={items.map(item => {
              return (
                <Block sx={ { px: {xs: 4, md: 12 } } } items={renderClientTestimonialSliderBlockItem({ item })}/>
              )
            })}
          />
        ),
      },
    ],
    ...rest,
  }
}

export default renderClientTestimonialSliderBlock
