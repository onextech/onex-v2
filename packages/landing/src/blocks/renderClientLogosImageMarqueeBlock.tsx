import React from 'react'

import { ClientLogo } from '@onex/types'
import { ImageMarquee } from '@onex/ui'

import { BlockProps } from '../web/Block/Block'

export interface RenderClientLogosImageMarqueeBlockProps
  extends Omit<BlockProps, 'items'> {
  /**
   * Scale the image size based on a number between 0 - 1
   */
  imageSizeMultiplier?: number
  items?: ClientLogo[]
  opacity?: number
}

const renderClientLogosImageMarqueeBlock = (
  props: RenderClientLogosImageMarqueeBlockProps
) => {
  const { imageSizeMultiplier = 0.8, items, opacity = 0.3, ...rest } = props

  return {
    center: true,
    disableContainer: true,
    items: [
      {
        title: 'Trusted by leading organizations',
        titleProps: { sx: { opacity: 0.7 } },
        type: 'overline',
      },
      {
        title: (
          <ImageMarquee
            gradient
            imageProps={{ priority: true }}
            items={items?.map((item) => ({
              id: item.avatar_src,
              alt: item.avatar_alt,
              height: item.avatar_height * imageSizeMultiplier,
              invertImageOnMode: 'light',
              src: item.avatar_src,
              sx: { opacity, ...item?.sx },
              width: item.avatar_width * imageSizeMultiplier,
            }))}
            spacing={{ xs: 10, md: 15, lg: 20 }}
            speed={15}
          />
        ),
        type: 'jsx',
      },
    ],
    pb: 2,
    pt: 3,
    reveal: false,
    ...rest,
  }
}

export default renderClientLogosImageMarqueeBlock
