import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Technology } from '@onex/types'
import {
  renderTechnologyBlockItem,
  RenderTechnologyBlockItemProps,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface TechnologysPageProps {
  technologys: Technology[]
}

const TechnologysPage: React.FC<TechnologysPageProps> = (props) => {
  const { technologys } = props
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
            { type: 'overline', title: 'Technologies' },
            {
              type: 'h1',
              title: 'Technologies',
            },
            {
              type: 'subtitle1',
              title:
                'Meet the moment with our technologys and capabilities that help you define your vision for the future and make it happen.',
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
                alt: 'technology-hero',
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
          key: 'technologys',
          sx: { backgroundColor: 'background.paper' },
          items: [
            {
              type: 'grid',
              gridProps: { spacing: 5, rowSpacing: 8 },
              gridItems: technologys.map((technology) =>
                renderTechnologyBlockItem({
                  item: {
                    ...technology,
                    href: `${routeConfig.SERVICES}/${technology.slug}`,
                  } as RenderTechnologyBlockItemProps['item'],
                })
              ),
            },
          ],
        },
      ]}
    />
  )
}

export default TechnologysPage
