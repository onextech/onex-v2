import React from 'react'
import { Showcase } from '@onex/types'
import { BlockProps } from '@gravis-os/landing'
import { renderShowcaseCardBlockItem } from './index'

export interface RenderShowcasesBlockProps extends Omit<BlockProps, 'items'> {
  items: Showcase[]
}

const renderShowcasesBlock = (props: RenderShowcasesBlockProps) => {
  const { items } = props
  return {
    key: 'showcases',
    center: true,
    maxWidth: 'xl',
    pt: 0,
    items: items.map((item) => renderShowcaseCardBlockItem({ item })),
  }
}

export default renderShowcasesBlock
