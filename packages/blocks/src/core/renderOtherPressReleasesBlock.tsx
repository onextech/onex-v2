import React from 'react'
import { PressRelease } from '@onex/types'
import { BlockProps } from '@gravis-os/landing'
import { useLayout } from '@onex/providers'
import renderPostBlockItem, {
  RenderPostBlockItemProps,
} from './renderPostBlockItem'

export interface RenderOtherPressReleasesBlockProps
  extends Omit<BlockProps, 'items'> {
  items?: PressRelease[]
}

const renderOtherPressReleasesBlock = (
  props: RenderOtherPressReleasesBlockProps
) => {
  const { items, ...rest } = props
  const { routeConfig } = useLayout()
  if (!items?.length) return
  return {
    key: 'other-press-releases',
    items: [
      {
        type: 'h4',
        title: 'Other News',
        titleProps: { sx: { mb: { xs: 3, md: 5 } } },
      },
      {
        type: 'grid',
        gridItems: items.map((item) => {
          return renderPostBlockItem({
            item: {
              href: `${routeConfig.PRESS_RELEASES}/${item.slug}`,
              ...(item as RenderPostBlockItemProps['item']),
            },
          })
        }),
      },
    ],
    ...rest,
  }
}

export default renderOtherPressReleasesBlock
