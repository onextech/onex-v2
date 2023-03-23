import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { PressRelease } from '@onex/types'
import {
  renderPostHeroBlockItem,
  renderOtherPressReleasesBlock,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface PressReleasePageProps {
  pressRelease: PressRelease
  otherPressReleases?: PressRelease[]
}

const PressReleasePage: React.FC<PressReleasePageProps> = (props) => {
  const { pressRelease, otherPressReleases } = props
  const {
    html,
    author_avatar_src,
    author_avatar_alt,
    author_title,
    author_job_title,
  } = pressRelease || {}

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
        {
          key: 'content',
          pt: { xs: 3, md: 6 },
          sx: { backgroundColor: 'background.paper' },
          items: [
            {
              type: 'grid',
              gridItems: [
                {
                  md: 3,
                  lg: 2,
                  items: [
                    {
                      type: 'image',
                      title: author_avatar_src,
                      titleProps: {
                        alt: author_avatar_alt,
                        width: 40,
                        height: 40,
                      },
                    },
                    { type: 'subtitle3', title: author_title },
                    { type: 'body1', title: author_job_title },
                  ],
                },
                {
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
                    },
                  ],
                },
              ],
            },
          ],
        },
        renderOtherPressReleasesBlock({
          items: otherPressReleases,
          py: { xs: 5, md: 10 },
        }),
      ]}
    />
  )
}

export default PressReleasePage
