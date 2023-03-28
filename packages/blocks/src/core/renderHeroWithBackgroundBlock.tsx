import React from 'react'
import { BlockProps } from '@gravis-os/landing'
import renderGhostButtonBlockItem, {
  RenderGhostButtonBlockItemProps,
} from './renderGhostButtonBlockItem'

export interface RenderHeroWithBackgroundBlockProps
  extends Omit<BlockProps, 'items'> {
  overline?: string
  title: string
  subtitle?: string
  hero_src?: string
  hero_alt?: string
  buttonProps?: RenderGhostButtonBlockItemProps
  secondaryButtonProps?: RenderGhostButtonBlockItemProps
}

const renderHeroWithBackgroundBlock = (
  props: RenderHeroWithBackgroundBlockProps
) => {
  const {
    overline,
    title,
    subtitle,
    hero_src,
    hero_alt,
    buttonProps,
    secondaryButtonProps,
    ...rest
  } = props

  return {
    key: 'hero-with-background',
    py: 30,
    dark: true,
    center: true,
    maxWidth: 'md',
    ...(hero_src && { backgroundImageProps: { src: hero_src, alt: hero_alt } }),
    items: [
      { type: 'overline', title: overline },
      { type: 'h2', title, titleProps: { gutterBottom: true } },
      {
        type: 'subtitle1',
        title: subtitle,
        titleProps: { color: 'text.secondary', maxWidth: true },
      },
      {
        type: 'stack',
        sx: { mt: 3 },
        stackProps: {
          spacing: 0,
          center: true,
          direction: 'row' as const,
          reverseDirectionOnMobile: true,
        },
        stackItems: [
          {
            items: [renderGhostButtonBlockItem(buttonProps)],
          },
          {
            items: [renderGhostButtonBlockItem(secondaryButtonProps)],
          },
        ],
      },
    ],
    ...rest,
  }
}

export default renderHeroWithBackgroundBlock
