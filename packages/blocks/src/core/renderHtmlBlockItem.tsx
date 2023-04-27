import React from 'react'
import { BlockProps } from '@gravis-os/landing'

export interface RenderHtmlBlockItemProps extends Omit<BlockProps, 'items'> {
  html: string
}

const renderHtmlBlockItem = (props: RenderHtmlBlockItemProps) => {
  const { html, ...rest } = props
  return {
    items: [
      {
        type: 'html',
        title: html,
        titleProps: {
          sx: {
            '& h1, & h2, & h3, & h4, & h5, & h6': {
              mt: 0,
            },
            '& p': { mb: 3 },
            fontSize: {
              xs: 'subtitle2.fontSize',
              md: 'subtitle1.fontSize',
            },
          },
        },
        ...rest,
      },
    ],
  }
}

export default renderHtmlBlockItem