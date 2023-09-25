import type { PressRelease } from '@gravis-os/types'

import React from 'react'

import {
  Blocks,
  renderOtherPressReleasesBlock,
  renderPostDetailBlock,
  renderPostHeroBlockItem,
} from '@gravis-os/landing'

export interface PressReleasePageProps {
  otherPressReleases?: PressRelease[]
  pressRelease: PressRelease
}

const PressReleasePage: React.FC<PressReleasePageProps> = (props) => {
  const { otherPressReleases, pressRelease } = props

  return (
    <Blocks
      items={[
        renderPostHeroBlockItem({
          disableAuthorDetails: true,
          item: pressRelease,
        }),
        renderPostDetailBlock({
          disableAuthorDetails: true,
          item: pressRelease,
          pt: { xs: 3, md: 6 },
        }),
        renderOtherPressReleasesBlock({
          items: otherPressReleases,
          py: { xs: 5, md: 10 },
        }),
      ]}
    />
  )
}

export default PressReleasePage
