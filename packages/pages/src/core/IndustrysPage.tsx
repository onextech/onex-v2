import type { Industry } from '@gravis-os/types'

import React from 'react'

import {
  Blocks,
  RenderIndustryBlockItemProps,
  renderIndustryBlockItem,
  useLayout,
} from '@gravis-os/landing'

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
          id: 'hero',
          items: [
            { title: 'Industries', type: 'overline' },
            {
              title: 'Industries',
              type: 'h1',
            },
            {
              title:
                'Our expertise and knowledge allow us to cater to a diverse range of industries, addressing their unique challenges and requirements.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
                sx: { mt: 2 },
              },
              type: 'subtitle1',
            },
            {
              title: 'https://source.unsplash.com/bwpgwJesFhw/1600x900',
              disableContainer: true,
              titleProps: {
                alt: 'High rise buildings',
                background: true,
                backgroundHeight: { xs: 320, md: 450 },
                backgroundSx: { mt: 5 },
              },
              type: 'image',
            },
            {
              title:
                'We leverage deep insights and global expertise to achieve outcomes that are most important to you. As your trusted advisor, we bring the full depth and breadth of our firm to focus on your unique needs and challenges.',
              titleProps: { maxWidth: true, sx: { mt: { xs: 5, md: 10 } } },
              type: 'h4',
            },
          ],
          pb: 0,
          pt: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
        },
        {
          id: 'industrys',
          items: [
            {
              gridItems: industrys.map((industry) =>
                renderIndustryBlockItem({
                  item: {
                    ...industry,
                    href: `${routeConfig.INDUSTRYS}/${industry.slug}`,
                  } as RenderIndustryBlockItemProps['item'],
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

export default IndustrysPage
