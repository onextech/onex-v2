import React from 'react'
import { BlockItemProps } from '@gravis-os/landing'
import { renderGhostButtonBlockItem } from './index'

export interface RenderFadeToBottomBackgroundImageBlockItemProps {
  overline?: string
  title: string
  titleProps?: BlockItemProps
  subtitle?: string
  subtitleProps?: BlockItemProps
  hero_src?: string
  hero_alt?: string
  buttonProps?: {
    href: string
    overline: string
    title: string
  }
}

const renderFadeToBottomBackgroundImageBlockItem = (
  props: RenderFadeToBottomBackgroundImageBlockItemProps
) => {
  const {
    overline,
    title,
    titleProps,
    subtitle,
    subtitleProps,
    hero_src,
    hero_alt,
    buttonProps,
  } = props
  return {
    key: title,
    center: true,
    dark: true,
    pb: 46,
    backgroundImageProps: {
      src: hero_src,
      alt: hero_alt,
    },
    items: [
      { type: 'overline', title: overline },
      {
        type: 'h4',
        title,
        maxWidth: 'sm',
        ...titleProps,
        titleProps: { gutterBottom: true, ...titleProps?.titleProps },
      },
      {
        type: 'h6',
        title: subtitle,
        maxWidth: 'md',
        ...subtitleProps,
        titleProps: {
          color: 'text.secondary',
          maxWidth: true,
          ...subtitleProps?.titleProps,
        },
      },
      renderGhostButtonBlockItem({
        overline: 'Our Mission',
        title: 'Enabling Smarter Businesses',
        boxProps: { mt: 3 },
        ...buttonProps,
      }),
    ],
  }
}

export default renderFadeToBottomBackgroundImageBlockItem
