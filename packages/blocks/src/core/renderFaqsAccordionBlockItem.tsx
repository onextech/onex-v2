import React from 'react'
import { BlockProps } from '@gravis-os/landing'

export interface RenderFaqsAccordionBlockItemProps {
  blockProps?: BlockProps
  items: Array<{ key: string; title: string; content: string }>
}

const renderFaqsAccordionBlockItem = (
  props: RenderFaqsAccordionBlockItemProps
) => {
  const { items, blockProps } = props

  return {
    key: 'faqs',
    ...blockProps,
    items: [
      {
        type: 'grid',
        gridProps: { spacing: 4 },
        gridItemProps: {
          sx: { textAlign: { xs: 'center', md: 'left' } },
        },
        gridItems: [
          {
            md: 4,
            items: [
              {
                type: 'h3',
                title: 'FAQs',
                maxWidth: 'md',
                titleProps: { gutterBottom: true },
              },
              {
                type: 'body1',
                title:
                  'Learn how we deliver effective, value-driven technological innovations for leading enterprises.',
                maxWidth: 'md',
                titleProps: {
                  color: 'text.secondary',
                  maxWidth: true,
                },
              },
            ],
          },
          {
            md: 8,
            items: [
              {
                type: 'accordion',
                title: items.map((item) => {
                  const { key, title, content } = item
                  return {
                    key,
                    title,
                    content,
                  }
                }),
              },
            ],
          },
        ],
      },
    ],
  }
}

export default renderFaqsAccordionBlockItem
