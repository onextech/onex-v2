import React from 'react'

import { Box, CircularProgress } from '@onex/ui'
import dynamic from 'next/dynamic'

import type { RenderFaqsAccordionBlockProps } from '../../blocks/renderFaqsAccordionBlock'

// Dynamically import to code-split @radix-ui/react-accordion
const DynamicFaqsAccordion = dynamic(
  () =>
    Promise.all([
      import('../../web/Block/Block'),
      import('../../blocks/renderFaqsAccordionBlock'),
    ]).then(([BlockModule, renderModule]) => {
      const Block = BlockModule.default
      const renderFaqsAccordionBlock = renderModule.default

      const FaqsAccordionBlock: React.FC<LazyFaqsAccordionProps> = (props) => {
        const blockConfig = renderFaqsAccordionBlock(props)
        if (!blockConfig) return null
        return <Block {...blockConfig} />
      }
      return FaqsAccordionBlock
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

export type LazyFaqsAccordionProps = RenderFaqsAccordionBlockProps

export const LazyFaqsAccordion: React.FC<LazyFaqsAccordionProps> = (props) => {
  return <DynamicFaqsAccordion {...props} />
}

export default LazyFaqsAccordion
