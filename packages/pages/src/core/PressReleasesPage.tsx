import React from 'react'
import {
  Blocks,
  renderPostBlockItem,
  RenderPostBlockItemProps,
  useLayout,
} from '@gravis-os/landing'
import type { PressRelease } from '@gravis-os/types'
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
          pt: { xs: 5, md: 10 },
          pb: 0,
          sx: { backgroundColor: 'background.paper' },
          items: [
            { type: 'overline', title: 'News' },
            {
              type: 'h1',
              title: 'News',
            },
            {
              type: 'subtitle1',
              title:
                'Explore our featured articles and discover how our innovative solutions are making waves in the business world.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
                sx: { mt: 2 },
              },
            },
            {
              type: 'image',
              title: 'https://source.unsplash.com/c5QdMcuFlgY/1600x900',
              disableContainer: true,
              titleProps: {
                alt: 'Person looking at a wall of newspapers',
                background: true,
                backgroundHeight: { xs: 320, md: 450 },
                backgroundSx: { mt: 5 },
              },
            },
            {
              type: 'h4',
              title:
                "We strive to make impactful change and help enterprises successfully grow in today's digital era. Read on to find out more about our work and collaborations with businesses.",
              titleProps: { maxWidth: true, sx: { mt: { xs: 5, md: 10 } } },
            },
          ],
        },
        {
          id: 'pressRelease',
          sx: { backgroundColor: 'background.paper' },
          items: [
            {
              type: 'grid',
              gridProps: { spacing: 5, rowSpacing: 8 },
              gridItems: orderBy(pressReleases, 'published_at', 'desc').map(
                (pressRelease) =>
                  renderPostBlockItem({
                    item: {
                      ...pressRelease,
                      href: `${routeConfig.PRESS_RELEASES}/${pressRelease.slug}`,
                    } as RenderPostBlockItemProps['item'],
                  })
              ),
            },
          ],
        },
      ]}
    />
  )
}

export default PressReleasesPage
