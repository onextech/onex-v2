import React from 'react'
import { Blocks } from '@gravis-os/landing'
import { renderPortfolioCardBlockItem } from '@onex/blocks'
import type { Technology } from '@onex/types'

export interface TechnologysPageProps {
  technologys: Technology[]
}

const TechnologysPage: React.FC<TechnologysPageProps> = (props) => {
  const { technologys } = props
  return (
    <Blocks
      items={[
        {
          key: 'portfolio-hero',
          maxWidth: 'xl',
          sx: { pt: { xs: 3, md: 6 } },
          pb: 0,
          items: [
            { type: 'overline', title: 'Portfolio' },
            {
              type: 'h1',
              title: 'Invest in Digital Transformation with Confidence.',
              titleProps: { mb: 2, maxWidth: true },
            },
            {
              type: 'subtitle1',
              title:
                'We assist enterprise clients in their digital transformation by applying established and emerging technologies into their core business models.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: '60%',
              },
            },
          ],
        },
        {
          key: 'portfolio-card-list',
          center: true,
          maxWidth: 'xl',
          pt: 0,
          items: technologys.map((technology) =>
            renderPortfolioCardBlockItem({ item: technology })
          ),
        },
      ]}
    />
  )
}

export default TechnologysPage
