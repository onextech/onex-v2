import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { PressRelease } from '@onex/types'
import {
  renderPostHeroBlockItem,
  renderOtherPressReleasesBlock,
  renderPostDetailBlock,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface PressReleasePageProps {
  pressRelease: PressRelease
  otherPressReleases?: PressRelease[]
}

const PressReleasePage: React.FC<PressReleasePageProps> = (props) => {
  const { pressRelease, otherPressReleases } = props
  const { routeConfig } = useLayout()

  return (
    <Blocks
      items={[
        renderPostHeroBlockItem({
          item: pressRelease,
          overline: 'News',
          overlineProps: {
            href: routeConfig.PRESS_RELEASES,
          },
        }),
        renderPostDetailBlock({ item: pressRelease, pt: { xs: 3, md: 6 } }),
        renderOtherPressReleasesBlock({
          items: otherPressReleases,
          py: { xs: 5, md: 10 },
        }),
      ]}
    />
  )
}

export default PressReleasePage
