import React from 'react'

export interface RenderThreeColumnGridBlockItemProps {
  overline?: string
  title: string
  subtitle?: string
  items: Array<{ fa_icon: string; title: string; subtitle: string }>
}

const renderThreeColumnGridBlockItem = (
  props: RenderThreeColumnGridBlockItemProps
) => {
  const { overline, title, subtitle, items } = props

  return {
    key: title,
    center: true,
    items: [
      { type: 'overline', title: overline },
      {
        type: 'h3',
        title,
        maxWidth: 'md',
        titleProps: { gutterBottom: true },
      },
      {
        type: 'body1',
        title: subtitle,
        maxWidth: 'md',
        titleProps: {
          color: 'text.secondary',
          maxWidth: true,
        },
      },
      {
        type: 'grid',
        sx: { mt: { xs: 5, md: 12 } },
        gridProps: { spacing: 4, rowSpacing: 8 },
        gridItemProps: {
          xs: 6,
          md: 4,
          sx: { textAlign: { xs: 'center', md: 'left' } },
        },
        gridItems: items.map((item) => {
          const { fa_icon, title, subtitle } = item
          return {
            items: [
              {
                type: 'fa-icon',
                title: `fa-3x fa-thin ${fa_icon}`,
                titleProps: { sx: { mb: 3 } },
              },
              {
                type: 'subtitle2',
                title,
                titleProps: { gutterBottom: true },
              },
              {
                type: 'body1',
                title: subtitle,
                titleProps: { color: 'text.secondary' },
              },
            ],
          }
        }),
      },
    ],
  }
}

export default renderThreeColumnGridBlockItem
