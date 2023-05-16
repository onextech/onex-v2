import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { PressRelease } from '@onex/types'
import { renderPostBlockItem, RenderPostBlockItemProps } from '@onex/blocks'
import { useLayout } from '@onex/providers'
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
          key: 'hero',
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
                'Meet the moment with our pressRelease and capabilities that help you define your vision for the future and make it happen.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
                sx: { mt: 2 },
              },
            },
            {
              type: 'image',
              title: '/images/about_working_in_office.png',
              disableContainer: true,
              titleProps: {
                alt: 'post-hero',
                background: true,
                backgroundHeight: { xs: 320, md: 450 },
                backgroundSx: { mt: 5 },
              },
            },
            {
              type: 'h4',
              title:
                'We leverage deep insights and global expertise to achieve outcomes that are most important to you. As your trusted advisor, we bring the full depth and breadth of our firm to focus on your unique needs and challenges.',
              titleProps: { maxWidth: true, sx: { mt: { xs: 5, md: 10 } } },
            },
          ],
        },
        {
          key: 'pressRelease',
          sx: { backgroundColor: 'background.paper' },
          items: [
            {
              type: 'grid',
              gridProps: { spacing: 5, rowSpacing: 8 },
              gridItems: orderBy(pressReleases, 'published_at', 'desc').map((pressRelease) =>
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
