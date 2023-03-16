import React from 'react'
import { BlockProps } from '@gravis-os/landing'

export interface RenderRightChecklistBlockItemProps {
  blockProps?: BlockProps
  overline?: string
  title: string
  subtitle?: string
  items: Array<{ title: string }>
}

const renderRightChecklistBlockItem = (
  props: RenderRightChecklistBlockItemProps
) => {
  const { overline, title, subtitle, items, blockProps } = props

  return {
    key: 'checklist',
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
            md: 7,
            items: [
              { type: 'overline', title: overline },
              {
                type: 'h3',
                title,
                titleProps: { gutterBottom: true },
              },
              {
                type: 'body1',
                title: subtitle,
                titleProps: {
                  color: 'text.secondary',
                  maxWidth: true,
                },
              },
            ],
          },
          {
            md: 5,
            items: [
              {
                type: 'accordion',
                title: items?.map((item) => {
                  const { title } = item
                  return {
                    key: title,
                    title,
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

export default renderRightChecklistBlockItem
