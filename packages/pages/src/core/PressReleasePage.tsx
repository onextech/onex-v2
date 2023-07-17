import React from 'react'
import {
  Blocks,
  renderOtherPressReleasesBlock,
  renderPostDetailBlock,
  renderPostHeroBlockItem,
} from '@gravis-os/landing'
import type { PressRelease } from '@gravis-os/types'

export interface PressReleasePageProps {
  pressRelease: PressRelease
  otherPressReleases?: PressRelease[]
}

const PressReleasePage: React.FC<PressReleasePageProps> = (props) => {
  const { pressRelease, otherPressReleases } = props

  return (
    <Blocks
      items={[
        renderPostHeroBlockItem({
          item: pressRelease,
          disableAuthorDetails: true,
        }),
        renderPostDetailBlock({
          item: pressRelease,
          pt: { xs: 3, md: 6 },
          disableAuthorDetails: true,
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
