import { Showcase } from '@onex/types'
import { Block, BlockProps } from '@gravis-os/landing'
import { Slider } from '@gravis-os/ui'
import React from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import renderShowcaseSliderItem from './renderShowcaseSliderItem'
import 'keen-slider/keen-slider.min.css'

export interface RenderShowcaseSliderProps
  extends Omit<BlockProps, 'items' | 'title'> {
  items: Showcase[]
  title?: React.ReactNode
  subtitle?: React.ReactNode
  overline?: React.ReactNode
}

const renderShowcaseSlider = (props: RenderShowcaseSliderProps) => {
  const { overline, title, subtitle, items, ...rest } = props

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true })

  return {
    key: 'showcase-slider',
    maxWidth: 'xl',
    items: [
      overline && {
        type: 'overline',
        title: overline,
      },
      title && {
        type: 'h3',
        title,
        titleProps: { gutterBottom: true, maxWidth: '60%' },
      },
      subtitle && {
        type: 'body1',
        title: subtitle,
        titleProps: {
          color: 'text.secondary',
          maxWidth: '45%',
        },
      },
      {
        type: 'jsx',
        title: (
          <Slider
            autoplay
            loop
            arrows
            sx={{ mt: { xs: 0, md: 4 } }}
            options={{ slides: { perView: 1, spacing: 12 } }}
            dotProps={{ color: 'secondary.main' }}
            height={{ md: 500 }}
            items={items.map((item) => {
              return <Block items={[renderShowcaseSliderItem({ item })]} />
            })}
          />
        ),
      },
    ],
    ...rest,
  }
}

export default renderShowcaseSlider
