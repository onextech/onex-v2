import React from 'react'

import { Box, CircularProgress } from '@onex/ui'
import dynamic from 'next/dynamic'

import type { RenderRelatedServicesBlockProps } from '../../blocks/renderRelatedServicesBlock'

// Dynamically import to defer loading of service cards
const DynamicRelatedServices = dynamic(
  () =>
    Promise.all([
      import('../../web/Block/Block'),
      import('../../blocks/renderRelatedServicesBlock'),
    ]).then(([BlockModule, renderModule]) => {
      const Block = BlockModule.default
      const renderRelatedServicesBlock = renderModule.default

      const RelatedServicesBlock: React.FC<LazyRelatedServicesProps> = (
        props
      ) => {
        const blockConfig = renderRelatedServicesBlock(props)
        if (!blockConfig) return null
        return <Block {...blockConfig} />
      }
      return RelatedServicesBlock
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

export type LazyRelatedServicesProps = RenderRelatedServicesBlockProps

export const LazyRelatedServices: React.FC<LazyRelatedServicesProps> = (
  props
) => {
  return <DynamicRelatedServices {...props} />
}

export default LazyRelatedServices
