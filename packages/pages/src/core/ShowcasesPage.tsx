import React from 'react'
import { Blocks } from '@gravis-os/landing'
import { renderPortfolioCardBlockItem } from '@onex/blocks'
import type { Showcase } from '@onex/types'

export interface ShowcasesPageProps {
  showcases: Showcase[]
}

const ShowcasesPage: React.FC<ShowcasesPageProps> = (props) => {
  const { showcases } = props
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
          items: showcases.map((showcase) =>
            renderPortfolioCardBlockItem({ item: showcase })
          ),
        },
      ]}
    />
  )
}

export default ShowcasesPage
