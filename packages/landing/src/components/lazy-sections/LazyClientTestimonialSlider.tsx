import React from 'react'

import { Box, CircularProgress } from '@onex/ui'
import { ClientTestimonial } from '@onex/types'
import dynamic from 'next/dynamic'

import type { RenderClientTestimonialSliderBlockProps } from '../../blocks/renderClientTestimonialSliderBlock'

// Dynamically import the heavy component to code-split keen-slider
const DynamicTestimonialSlider = dynamic(
  () =>
    Promise.all([
      import('../../web/Block/Block'),
      import('../../blocks/renderClientTestimonialSliderBlock'),
    ]).then(([BlockModule, renderModule]) => {
      const Block = BlockModule.default
      const renderClientTestimonialSliderBlock = renderModule.default

      // Return a component that renders the block
      const TestimonialSliderBlock: React.FC<LazyClientTestimonialSliderProps> = (
        props
      ) => {
        const blockConfig = renderClientTestimonialSliderBlock(props)
        return <Block {...blockConfig} />
      }
      return TestimonialSliderBlock
    }),
  {
    loading: () => (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress />
      </Box>
    ),
    ssr: true,
  }
)

export interface LazyClientTestimonialSliderProps
  extends Omit<RenderClientTestimonialSliderBlockProps, 'items'> {
  items: ClientTestimonial[]
}

export const LazyClientTestimonialSlider: React.FC<
  LazyClientTestimonialSliderProps
> = (props) => {
  return <DynamicTestimonialSlider {...props} />
}

export default LazyClientTestimonialSlider
