import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Industry } from '@onex/types'
import {
  renderIndustryBlockItem,
  RenderIndustryBlockItemProps,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface IndustrysPageProps {
  industrys: Industry[]
}

const IndustrysPage: React.FC<IndustrysPageProps> = (props) => {
  const { industrys } = props
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
            { type: 'overline', title: 'Industries' },
            {
              type: 'h1',
              title: 'Industries',
            },
            {
              type: 'subtitle1',
              title:
                'Meet the moment with our industrys and capabilities that help you define your vision for the future and make it happen.',
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
                alt: 'People working in office',
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
          key: 'industrys',
          sx: { backgroundColor: 'background.paper' },
          items: [
            {
              type: 'grid',
              gridProps: { spacing: 5, rowSpacing: 8 },
              gridItems: industrys.map((industry) =>
                renderIndustryBlockItem({
                  item: {
                    ...industry,
                    href: `${routeConfig.INDUSTRYS}/${industry.slug}`,
                  } as RenderIndustryBlockItemProps['item'],
                })
              ),
            },
          ],
        },
      ]}
    />
  )
}

export default IndustrysPage
