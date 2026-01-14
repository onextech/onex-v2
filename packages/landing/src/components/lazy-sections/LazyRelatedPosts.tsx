import React from 'react'

import { Box, CircularProgress } from '@onex/ui'
import dynamic from 'next/dynamic'

import type { RenderRelatedPostsBlockProps } from '../../blocks/renderRelatedPostsBlock'

// Dynamically import to defer loading of post cards
const DynamicRelatedPosts = dynamic(
  () =>
    Promise.all([
      import('../../web/Block/Block'),
      import('../../blocks/renderRelatedPostsBlock'),
    ]).then(([BlockModule, renderModule]) => {
      const Block = BlockModule.default
      const renderRelatedPostsBlock = renderModule.default

      const RelatedPostsBlock: React.FC<LazyRelatedPostsProps> = (props) => {
        const blockConfig = renderRelatedPostsBlock(props)
        if (!blockConfig) return null
        return <Block {...blockConfig} />
      }
      return RelatedPostsBlock
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

export type LazyRelatedPostsProps = RenderRelatedPostsBlockProps

export const LazyRelatedPosts: React.FC<LazyRelatedPostsProps> = (props) => {
  return <DynamicRelatedPosts {...props} />
}

export default LazyRelatedPosts
