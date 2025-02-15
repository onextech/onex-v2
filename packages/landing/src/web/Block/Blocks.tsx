import React from 'react'

import Block, { BlockProps } from './Block'

export interface BlocksProps {
  items: BlockProps[]
}

const Blocks: React.FC<BlocksProps> = (props) => {
  const { items } = props

  if (!items) return null

  return (
    <>
      {items.filter(Boolean).map((item, i) => {
        const key = item.id || `block-item-${i}`

        // Check if item is jsx, then return as is
        if (React.isValidElement(item)) return <React.Fragment key={key}>{item}</React.Fragment>

        return <Block key={key} {...item} />
      })}
    </>
  )
}

export default Blocks
