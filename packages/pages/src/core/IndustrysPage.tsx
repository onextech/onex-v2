import React from 'react'
import {
  Blocks,
  renderIndustryBlockItem,
  RenderIndustryBlockItemProps,
  useLayout,
} from '@gravis-os/landing'
import type { Industry } from '@gravis-os/types'

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
                'Our expertise and knowledge allow us to cater to a diverse range of industries, addressing their unique challenges and requirements.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
                sx: { mt: 2 },
              },
            },
            {
              type: 'image',
              title: 'https://source.unsplash.com/bwpgwJesFhw/1600x900',
              disableContainer: true,
              titleProps: {
                alt: 'High rise buildings',
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
