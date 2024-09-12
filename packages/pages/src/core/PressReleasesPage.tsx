import type { PressRelease } from '@onex/types'

import React from 'react'

import {
  Blocks,
  RenderPostBlockItemProps,
  renderPostBlockItem,
  useLayout,
} from '@onex/landing'
import orderBy from 'lodash/orderBy'

export interface PressReleasesPageProps {
  pressReleases: PressRelease[]
}

const PressReleasesPage: React.FC<PressReleasesPageProps> = (props) => {
  const { pressReleases } = props
  const { routeConfig } = useLayout()

  return (
    <Blocks
      items={[
        {
          id: 'hero',
          items: [
            { title: 'News', type: 'overline' },
            {
              title: 'News',
              type: 'h1',
            },
            {
              title:
                'Explore our featured articles and discover how our innovative solutions are making waves in the business world.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
                sx: { mt: 2 },
              },
              type: 'subtitle1',
            },
            {
              title: '/unsplash/c5QdMcuFlgY.jpg',
              disableContainer: true,
              titleProps: {
                alt: 'Person looking at a wall of newspapers',
                background: true,
                backgroundHeight: { xs: 320, md: 450 },
                backgroundSx: { mt: 5 },
              },
              type: 'image',
            },
            {
              title:
                "We strive to make impactful change and help enterprises successfully grow in today's digital era. Read on to find out more about our work and collaborations with businesses.",
              titleProps: { maxWidth: true, sx: { mt: { xs: 5, md: 10 } } },
              type: 'h4',
            },
          ],
          pb: 0,
          pt: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
        },
        {
          id: 'pressRelease',
          items: [
            {
              gridItems: orderBy(pressReleases, 'published_at', 'desc').map(
                (pressRelease) =>
                  renderPostBlockItem({
                    item: {
                      ...pressRelease,
                      href: `${routeConfig.PRESS_RELEASES}/${pressRelease.slug}`,
                    } as RenderPostBlockItemProps['item'],
                  })
              ),
              gridProps: { rowSpacing: 8, spacing: 5 },
              type: 'grid',
            },
          ],
          sx: { backgroundColor: 'background.paper' },
        },
      ]}
    />
  )
}

export default PressReleasesPage
